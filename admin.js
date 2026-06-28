(function () {
  'use strict';

  firebase.initializeApp(window.SiteConfig.firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

  const $ = s => document.querySelector(s);

  // ---- Auth gate ----
  auth.onAuthStateChanged(async function (user) {
    if (!user) {
      window.location.replace('/');
      return;
    }
    try {
      const snap = await db.collection('admins').doc(user.uid).get();
      if (!snap.exists || snap.data().isAdmin !== true) {
        window.location.replace('/');
        return;
      }
    } catch (e) {
      window.location.replace('/');
      return;
    }

    // Authed as admin — show UI
    $('#admin-gate').style.display = 'none';
    $('#admin-app').style.display = '';
    $('#admin-user-email').textContent = user.email;
    $('#admin-signout').addEventListener('click', function () { auth.signOut(); });

    startListener();
  });

  // ---- Real-time listener on all testimonials ----
  function startListener() {
    db.collection('testimonials')
      .orderBy('date', 'desc')
      .onSnapshot(function (snap) {
        const all = snap.docs.map(d => Object.assign({ id: d.id }, d.data()));
        renderAll(all);
      }, function (err) {
        showError('Failed to load reviews: ' + err.message);
      });
  }

  // ---- Render ----
  function renderAll(reviews) {
    const pending  = reviews.filter(r => r.status === 'pending');
    const approved = reviews.filter(r => r.status === 'approved');
    const rejected = reviews.filter(r => r.status === 'rejected');

    renderCounts(pending.length, approved.length, rejected.length);
    renderList('list-pending',  pending,  ['approve', 'reject', 'edit']);
    renderList('list-approved', approved, ['unapprove', 'reject']);
    renderList('list-rejected', rejected, ['approve', 'unapprove']);
  }

  function renderCounts(p, a, r) {
    $('#counts-bar').innerHTML =
      '<span class="count-chip pending">' + p + ' pending</span>' +
      '<span class="count-chip approved">' + a + ' approved</span>' +
      '<span class="count-chip rejected">' + r + ' rejected</span>';
  }

  function renderList(containerId, reviews, actions) {
    const el = $('#' + containerId);
    if (!reviews.length) {
      el.innerHTML = '<p class="empty-state">None.</p>';
      return;
    }
    el.innerHTML = reviews.map(r => cardHTML(r, actions)).join('');
    // Wire buttons
    reviews.forEach(r => wireCard(r.id, actions));
  }

  function fmtDate(ts) {
    if (!ts || !ts.toDate) return '';
    return ts.toDate().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function esc(s) {
    return String(s || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function cardHTML(r, actions) {
    const score = r.verified_score ? '<span class="review-score">Score: ' + r.verified_score + '</span>' : '';
    const role  = r.role ? '<span class="review-role">' + esc(r.role) + '</span>' : '';
    const date  = '<span class="review-date">' + fmtDate(r.date) + '</span>';

    const btns = actions.map(a => {
      if (a === 'approve')   return '<button class="btn-action btn-approve" data-action="approve" data-id="' + r.id + '">Approve</button>';
      if (a === 'reject')    return '<button class="btn-action btn-reject"  data-action="reject"  data-id="' + r.id + '">Reject</button>';
      if (a === 'unapprove') return '<button class="btn-action btn-unapprove" data-action="pending" data-id="' + r.id + '">Move to pending</button>';
      if (a === 'edit')      return '<button class="btn-action btn-edit"    data-action="edit"    data-id="' + r.id + '">Edit</button>';
      return '';
    }).join('');

    return [
      '<div class="review-card ' + esc(r.status) + '" id="card-' + r.id + '">',
      '<div class="review-meta">',
      '<span class="review-name">' + esc(r.name) + '</span>',
      role, score, date,
      '</div>',
      '<p class="review-quote" id="quote-' + r.id + '">' + esc(r.quote) + '</p>',
      '<div class="review-actions" id="actions-' + r.id + '">' + btns + '</div>',
      '</div>'
    ].join('');
  }

  function wireCard(id, actions) {
    const actionsEl = $('#actions-' + id);
    if (!actionsEl) return;

    actionsEl.addEventListener('click', async function (e) {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const action = btn.dataset.action;

      if (action === 'edit') {
        startEdit(id);
        return;
      }
      if (action === 'save') {
        await saveEdit(id);
        return;
      }
      if (action === 'cancel') {
        cancelEdit(id);
        return;
      }
      if (action === 'reject') {
        if (!confirm('Reject this review? It will not appear on the site.')) return;
      }
      await setStatus(id, action === 'approve' ? 'approved' : action === 'reject' ? 'rejected' : 'pending');
    });
  }

  // ---- Edit flow ----
  function startEdit(id) {
    const quoteEl = $('#quote-' + id);
    const actionsEl = $('#actions-' + id);
    if (!quoteEl || !actionsEl) return;

    const current = quoteEl.textContent;
    quoteEl.innerHTML = '<textarea class="edit-area" id="edit-ta-' + id + '" rows="4">' + esc(current) + '</textarea>';

    actionsEl.innerHTML =
      '<button class="btn-action btn-save"   data-action="save"   data-id="' + id + '">Save &amp; approve</button>' +
      '<button class="btn-action btn-cancel" data-action="cancel" data-id="' + id + '">Cancel</button>';
  }

  async function saveEdit(id) {
    const ta = $('#edit-ta-' + id);
    if (!ta) return;
    const newQuote = ta.value.trim();
    if (!newQuote) return;
    try {
      await db.collection('testimonials').doc(id).update({ quote: newQuote, status: 'approved' });
      // onSnapshot will re-render the card automatically
    } catch (err) {
      showError('Save failed: ' + err.message);
    }
  }

  function cancelEdit(id) {
    // onSnapshot hasn't fired again — restore original text from DOM
    const quoteEl = $('#quote-' + id);
    const ta = $('#edit-ta-' + id);
    if (quoteEl && ta) quoteEl.innerHTML = esc(ta.value);
    // Re-render just this card's actions by triggering a no-op status write
    // (easiest: just reload the listener data — it's already live via onSnapshot)
  }

  // ---- Status update ----
  async function setStatus(id, status) {
    try {
      await db.collection('testimonials').doc(id).update({ status: status });
      // onSnapshot fires and re-renders automatically
    } catch (err) {
      showError('Update failed: ' + err.message);
    }
  }

  function showError(msg) {
    const el = $('#admin-error');
    if (!el) return;
    el.textContent = msg;
    el.style.display = 'block';
    setTimeout(function () { el.style.display = 'none'; }, 6000);
  }
})();
