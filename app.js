// ============================================================
// AWS Certification Practice App — Config-driven
// Main Application Logic
// ============================================================

(function () {
  'use strict';

  // ---- Populate page from SiteConfig ----
  function populateFromConfig() {
    const c = window.SiteConfig;
    if (!c) return;

    // Helper to set text content of all matching elements
    function setText(sel, val) {
      document.querySelectorAll(sel).forEach(function(el) { el.textContent = val; });
    }
    function setHTML(sel, val) {
      document.querySelectorAll(sel).forEach(function(el) { el.innerHTML = val; });
    }

    // Page title
    document.title = c.certFullName + ' (' + c.examCode + ') \u2014 Practice Tests & Training';

    // Logo
    var logoText = document.querySelector('.logo-text');
    if (logoText) logoText.innerHTML = c.logoText + ' <span class="logo-accent">' + c.logoAccent + '</span>';

    // Hero section
    setText('[data-cfg="hero-subtitle"]', c.heroSubtitle);
    setText('[data-cfg="cert-name"]', c.certName);
    setText('[data-cfg="hero-desc"]', c.heroDescription);

    // Exam stats
    setText('[data-cfg="exam-questions"]', c.totalQuestions);
    setText('[data-cfg="exam-minutes"]', c.timeMinutes);
    setText('[data-cfg="exam-pass-score"]', c.passScore);
    setText('[data-cfg="exam-domains"]', c.domains.length);

    // Feature subtitle
    setText('[data-cfg="feature-subtitle"]', c.featureSubtitle);

    // Test selection subtitle
    var testSubtitle = document.querySelector('[data-cfg="test-subtitle"]');
    if (testSubtitle) testSubtitle.innerHTML = 'Try a free quick test or unlock all durations for a one-time <strong>$' + c.price + '</strong> payment';

    // Exam code references
    setText('[data-cfg="exam-code"]', c.examCode);
    setText('[data-cfg="cert-full-name"]', c.certFullName);

    // Domain names in training sidebar and results
    c.domains.forEach(function(d, i) {
      var label = 'Domain ' + (i + 1) + ': ' + d.name;
      var labelPct = label + ' (' + Math.round(d.weight * 100) + '%)';
      setText('[data-cfg="domain-' + (i + 1) + '"]', label);
      setText('[data-cfg="domain-' + (i + 1) + '-pct"]', labelPct);
    });

    // Build domains grid dynamically
    var domainsGrid = document.getElementById('domains-grid-dynamic');
    if (domainsGrid) {
      domainsGrid.innerHTML = '';
      c.domains.forEach(function(d, i) {
        var pct = Math.round(d.weight * 100);
        var item = document.createElement('div');
        item.className = 'domain-item';
        item.setAttribute('data-domain', i + 1);
        item.innerHTML = '<div class="domain-number">' + (i + 1) + '</div>' +
          '<div class="domain-info">' +
          '<div class="domain-name">' + d.name + '</div>' +
          '<div class="domain-bar-track"><div class="domain-bar-fill" style="width: 0%" data-width="' + pct + '%"></div></div>' +
          '</div>' +
          '<div class="domain-weight">' + pct + '%</div>';
        domainsGrid.appendChild(item);
      });
    }

    // Build results domain breakdown dynamically
    var breakdownList = document.getElementById('domain-breakdown-list');
    if (breakdownList) {
      breakdownList.innerHTML = '';
      c.domains.forEach(function(d, i) {
        var n = i + 1;
        var item = document.createElement('div');
        item.className = 'domain-breakdown-item';
        item.setAttribute('data-domain', n);
        item.innerHTML = '<div class="domain-breakdown-label">' +
          '<span>Domain ' + n + ': ' + d.name + '</span>' +
          '<span class="domain-breakdown-percent" id="domain-' + n + '-percent">0%</span>' +
          '</div>' +
          '<div class="domain-breakdown-bar-bg"><div class="domain-breakdown-bar" id="domain-' + n + '-bar"></div></div>';
        breakdownList.appendChild(item);
      });
    }

    // Payment modal
    var priceEl = document.querySelector('[data-cfg="price"]');
    if (priceEl) priceEl.textContent = '$' + c.price;
    setText('[data-cfg="guarantee"]', c.guarantee);

    // Pay button label (direct Stripe Payment Link redirect)
    var stripeBtn = document.getElementById('stripe-pay-btn');
    if (stripeBtn) stripeBtn.textContent = 'Pay $' + c.price + ' \u2014 Start Practicing';

    // Footer disclaimer
    setText('[data-cfg="footer-disclaimer"]', c.footerDisclaimer);
  }

  // Run immediately (before DOMContentLoaded since script is at bottom)
  populateFromConfig();

  // ---- State ----
  const state = {
    currentView: 'home',
    currentDomain: '1',
    currentTopic: '1.1',
    // Practice Test
    testQuestions: [],
    testAnswers: {},
    optionOrders: {},      // shuffled option order per question index, built at test start
    flaggedQuestions: new Set(),
    currentQuestionIndex: 0,
    timerInterval: null,
    timeRemaining: 90 * 60,
    testSubmitted: false,
    reviewFilter: 'all',
    // Quick Quiz
    quizQuestions: [],
    quizAnswers: {},
    quizCurrentIndex: 0,
    quizChecked: false,
    quizCorrectCount: 0,
  };

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];

  // ============================================================
  // VIEW NAVIGATION
  // ============================================================
  function showView(viewId) {
    $$('.view').forEach(v => v.classList.remove('active-view'));
    const view = $(`#${viewId}-view`);
    if (view) view.classList.add('active-view');

    $$('.nav-link').forEach(btn => btn.classList.remove('active'));
    const navMap = { home: 'nav-home-btn', training: 'nav-training-btn', test: 'nav-test-btn' };
    const navBtn = navMap[viewId] ? $(`#${navMap[viewId]}`) : null;
    if (navBtn) navBtn.classList.add('active');

    state.currentView = viewId;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile nav
    const headerNav = $('#header-nav');
    const menuBtn = $('#mobile-menu-btn');
    if (headerNav) headerNav.classList.remove('open');
    if (menuBtn) menuBtn.classList.remove('open');
  }

  // Expose for components/header.js (read at click-time, after app.js has loaded)
  window.showView = showView;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    const sa = [...a].sort(), sb = [...b].sort();
    return sa.every((v, i) => v === sb[i]);
  }

  // ============================================================
  // HOME VIEW
  // ============================================================
  function initHome() {
    // Training buttons
    ['#hero-start-training', '#start-training-btn'].forEach(sel => {
      const btn = $(sel);
      if (btn) btn.addEventListener('click', () => { initTraining(); showView('training'); });
    });

    // Test buttons — scroll to test selection section
    ['#hero-start-test', '#start-test-btn'].forEach(sel => {
      const btn = $(sel);
      if (btn) btn.addEventListener('click', () => {
        const section = document.getElementById('test-selection');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (hasPaid()) {
          startPracticeTest();
        } else {
          showPaymentModal();
        }
      });
    });

    // Test option cards — require login, free tests bypass payment, others gated
    $$('.test-start-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // Must be logged in for any test
        if (window.AppAuth && !window.AppAuth.isLoggedIn()) {
          window.showAuthModal('signup');
          return;
        }
        const isFree = btn.dataset.free === 'true';
        if (!isFree && !hasPaid()) { showPaymentModal(); return; }
        const numQ = parseInt(btn.dataset.questions, 10) || 65;
        const timeS = parseInt(btn.dataset.time, 10) || 5400;
        startPracticeTest(numQ, timeS);
      });
    });

    // Expose globally for firebase-auth.js
    window.updateTestCardLocks = updateTestCardLocks;

    // Update test card lock states on load
    updateTestCardLocks();

    // Domain items click — go to training
    $$('.domain-item').forEach(item => {
      item.addEventListener('click', () => {
        const d = item.dataset.domain;
        if (d && window.trainingContent && window.trainingContent[d]) {
          state.currentDomain = d;
          state.currentTopic = Object.keys(window.trainingContent[d].topics)[0];
          initTraining();
          showView('training');
        }
      });
    });

    // Nav buttons — e.preventDefault() stops <a href="/"> from reloading the page
    // Mobile menu toggle is handled by components/header.js
    $('#nav-home-btn').addEventListener('click', (e) => { e.preventDefault(); showView('home'); });
    $('#nav-training-btn').addEventListener('click', (e) => { e.preventDefault(); initTraining(); showView('training'); });
    $('#nav-test-btn').addEventListener('click', (e) => {
      e.preventDefault();
      if (state.testQuestions.length > 0 && !state.testSubmitted) {
        showView('test');
        return;
      }
      // Show home view but keep Practice Test highlighted in nav
      // (test selection section lives on the home view)
      showView('home');
      $$('.nav-link').forEach(b => b.classList.remove('active'));
      const navTestBtn = $('#nav-test-btn');
      if (navTestBtn) navTestBtn.classList.add('active');
      setTimeout(() => {
        const section = document.getElementById('test-selection');
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    });

    // Animate domain bars on scroll
    animateDomainBars();
  }

  function animateDomainBars() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll('.domain-bar-fill');
          fills.forEach(fill => {
            const targetWidth = fill.dataset.width;
            if (targetWidth) {
              setTimeout(() => { fill.style.width = targetWidth; }, 200);
            }
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    const grid = $('.domains-grid');
    if (grid) observer.observe(grid);
  }

  // ============================================================
  // TRAINING VIEW
  // ============================================================
  function initTraining() {
    renderTrainingSidebar();
    loadTrainingTopic(state.currentDomain, state.currentTopic);
  }

  function renderTrainingSidebar() {
    const nav = $('#training-sidebar-nav');
    if (!nav || !window.trainingContent) return;
    nav.innerHTML = '';

    for (const domainId of Object.keys(window.trainingContent)) {
      const domain = window.trainingContent[domainId];
      const wrapper = document.createElement('div');
      wrapper.className = 'sidebar-domain';

      const btn = document.createElement('button');
      btn.className = 'sidebar-domain-btn' + (domainId === state.currentDomain ? ' active' : '');
      btn.innerHTML = `<span class="sidebar-domain-label">Domain ${domainId}: ${domain.name}</span><span class="sidebar-domain-weight">${domain.weight}%</span>`;
      btn.addEventListener('click', () => {
        $$('.sidebar-domain-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const topics = wrapper.querySelector('.sidebar-topics');
        if (topics) topics.classList.toggle('open');
      });

      const topics = document.createElement('div');
      topics.className = 'sidebar-topics' + (domainId === state.currentDomain ? ' open' : '');

      for (const topicId of Object.keys(domain.topics)) {
        const topic = domain.topics[topicId];
        const tBtn = document.createElement('button');
        tBtn.className = 'sidebar-topic-btn' + (topicId === state.currentTopic && domainId === state.currentDomain ? ' active' : '');
        tBtn.textContent = `${topicId}: ${topic.title}`;
        tBtn.addEventListener('click', () => {
          state.currentDomain = domainId;
          state.currentTopic = topicId;
          loadTrainingTopic(domainId, topicId);
          $$('.sidebar-topic-btn').forEach(b => b.classList.remove('active'));
          tBtn.classList.add('active');
        });
        topics.appendChild(tBtn);
      }

      wrapper.appendChild(btn);
      wrapper.appendChild(topics);
      nav.appendChild(wrapper);
    }
  }

  function loadTrainingTopic(domainId, topicId) {
    const content = window.trainingContent;
    if (!content || !content[domainId]) return;
    const domain = content[domainId];
    const topic = domain.topics[topicId];
    if (!topic) return;

    const title = $('#training-topic-title');
    const badge = $('#training-domain-badge');
    const area = $('#training-content-area');

    if (title) title.textContent = topic.title;
    if (badge) badge.textContent = `Domain ${domainId}: ${domain.name} (${domain.weight}%)`;
    if (area) { area.innerHTML = topic.content; area.scrollTop = 0; }
  }

  function initTrainingEvents() {
    const quizBtn = $('#start-quick-quiz-btn');
    if (quizBtn) quizBtn.addEventListener('click', () => startQuickQuiz(state.currentDomain, state.currentTopic));

    const backBtn = $('#training-home-btn');
    if (backBtn) backBtn.addEventListener('click', () => showView('home'));
  }

  // ============================================================
  // PRACTICE TEST
  // ============================================================
  // Build a per-attempt shuffled option order for one question.
  // Strips embedded "A) " / "B) " prefixes, shuffles the option texts,
  // and remaps correctAnswers indices into the new display positions.
  function buildOptionOrder(q) {
    var stripped = q.options.map(function (opt) {
      return opt.replace(/^[A-E]\)\s*/, '');
    });

    // Fisher-Yates on an index array
    var order = stripped.map(function (_, i) { return i; });
    for (var i = order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = order[i]; order[i] = order[j]; order[j] = tmp;
    }

    // Display texts in the new order
    var texts = order.map(function (origIdx) { return stripped[origIdx]; });

    // Map each original correct index to its new display position
    var origCorrect = {};
    q.correctAnswers.forEach(function (c) { origCorrect[c] = true; });
    var correctIndices = [];
    order.forEach(function (origIdx, newIdx) {
      if (origCorrect[origIdx]) correctIndices.push(newIdx);
    });
    correctIndices.sort(function (a, b) { return a - b; });

    return { texts: texts, correctIndices: correctIndices };
  }

  function startPracticeTest(numQuestions, timeSeconds) {
    numQuestions = numQuestions || 65;
    timeSeconds = timeSeconds || 5400;

    const bank = window.questionBank;
    if (!bank || bank.length === 0) { alert('Question bank not loaded.'); return; }

    // Build domain map dynamically from config
    const cfg = window.SiteConfig;
    const domainIds = cfg.domains.map((_, i) => i + 1);
    const byDomain = {};
    domainIds.forEach(d => { byDomain[d] = []; });
    bank.forEach(q => { if (byDomain[q.domain]) byDomain[q.domain].push(q); });

    // Scale domain weights to match requested question count
    const weights = {};
    cfg.domains.forEach((d, i) => { weights[i + 1] = d.weight; });
    const counts = {};
    let total = 0;
    for (const d of domainIds) {
      counts[d] = Math.round(numQuestions * weights[d]);
      total += counts[d];
    }
    // Adjust rounding differences on the largest domain
    const largestDomain = domainIds.reduce((a, b) => weights[a] >= weights[b] ? a : b);
    counts[largestDomain] += (numQuestions - total);

    let selected = [];
    for (const d of domainIds) {
      selected = selected.concat(shuffle(byDomain[d]).slice(0, counts[d]));
    }

    state.testQuestions = shuffle(selected);
    // Build per-question shuffled option orders for this attempt
    state.optionOrders = {};
    state.testQuestions.forEach(function (q, idx) {
      state.optionOrders[idx] = buildOptionOrder(q);
    });
    state.testAnswers = {};
    state.flaggedQuestions = new Set();
    state.currentQuestionIndex = 0;
    state.timeRemaining = timeSeconds;
    state.testSubmitted = false;
    state.reviewFilter = 'all';

    renderNavigatorGrid();
    renderTestQuestion();
    startTimer();
    showView('test');
  }

  function renderTestQuestion() {
    const q = state.testQuestions[state.currentQuestionIndex];
    if (!q) return;
    const idx = state.currentQuestionIndex;

    // Counter + progress
    const counter = $('#test-question-counter');
    if (counter) counter.textContent = `Question ${idx + 1} of ${state.testQuestions.length}`;
    const bar = $('#test-progress-bar');
    if (bar) bar.style.width = ((idx + 1) / state.testQuestions.length * 100) + '%';

    // Tags
    const domainTag = $('#test-domain-tag');
    if (domainTag) domainTag.textContent = `Domain ${q.domain}: ${q.domainName}`;
    const typeTag = $('#test-type-tag');
    if (typeTag) typeTag.textContent = q.type === 'multiple-response' ? 'Multiple Response' : 'Multiple Choice';

    // Question
    const text = $('#test-question-text');
    if (text) text.textContent = q.question;

    // Instruction
    const instr = $('#test-question-instruction');
    if (instr) {
      if (q.type === 'multiple-response') {
        instr.textContent = `(Select ${q.correctAnswers.length} answers)`;
        instr.classList.remove('hidden');
      } else {
        instr.textContent = '';
        instr.classList.add('hidden');
      }
    }

    // Options — use this attempt's shuffled order
    const container = $('#test-answer-options');
    if (!container) return;
    container.innerHTML = '';
    const inputType = q.type === 'multiple-response' ? 'checkbox' : 'radio';
    const existing = state.testAnswers[idx] || [];
    const order = state.optionOrders[idx];
    const LABELS = 'ABCDE';

    order.texts.forEach((text, i) => {
      const label = document.createElement('label');
      label.className = 'answer-option' + (existing.includes(i) ? ' selected' : '');

      const input = document.createElement('input');
      input.type = inputType;
      input.name = 'test-answer';
      input.value = i;
      input.checked = existing.includes(i);
      input.className = 'answer-input';

      const span = document.createElement('span');
      span.className = 'answer-text';
      span.textContent = LABELS[i] + ') ' + text;

      label.appendChild(input);
      label.appendChild(span);

      if (!state.testSubmitted) {
        label.addEventListener('click', (e) => {
          if (e.target !== input) { e.preventDefault(); input.checked = !input.checked; }
          handleTestAnswer(i, input.checked, inputType);
        });
      }

      container.appendChild(label);
    });

    // Flag button
    const flagBtn = $('#flag-question-btn');
    if (flagBtn) {
      if (state.flaggedQuestions.has(idx)) {
        flagBtn.classList.add('flagged');
        flagBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M2 1v12h1.5V8.5h7L9 6l1.5-2.5h-7V1H2z"/></svg> Unflag';
      } else {
        flagBtn.classList.remove('flagged');
        flagBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M2 1v12h1.5V8.5h7L9 6l1.5-2.5h-7V1H2z"/></svg> Flag for Review';
      }
    }

    // Prev/Next
    const prevBtn = $('#prev-question-btn');
    const nextBtn = $('#next-question-btn');
    if (prevBtn) prevBtn.disabled = idx === 0;
    if (nextBtn) nextBtn.textContent = idx === state.testQuestions.length - 1 ? 'Finish' : 'Next →';

    // Explanation (review mode)
    const explEl = $('#question-explanation');
    if (explEl) {
      if (state.testSubmitted) {
        const ua = state.testAnswers[idx] || [];
        const correct = arraysEqual(ua, order.correctIndices);
        const correctLabels = order.correctIndices
          .map(i => LABELS[i] + ') ' + order.texts[i]).join(', ');
        explEl.innerHTML = `<div class="explanation-box ${correct ? 'correct' : 'incorrect'}">
          <p class="explanation-status">${correct ? '✓ Correct' : '✗ Incorrect'}</p>
          <p class="explanation-correct-answer"><strong>Correct answer${order.correctIndices.length > 1 ? 's' : ''}:</strong> ${correctLabels}</p>
          <p class="explanation-text">${q.explanation}</p>
        </div>`;
        explEl.classList.remove('hidden');

        container.querySelectorAll('.answer-option').forEach((label, i) => {
          const inp = label.querySelector('input');
          if (inp) inp.disabled = true;
          label.style.pointerEvents = 'none';
          if (order.correctIndices.includes(i)) label.classList.add('option-correct');
          if (ua.includes(i) && !order.correctIndices.includes(i)) label.classList.add('option-incorrect');
        });
      } else {
        explEl.classList.add('hidden');
        explEl.innerHTML = '';
      }
    }

    updateNavigatorGrid();
    updateNavigatorSummary();
  }

  function handleTestAnswer(optIdx, checked, type) {
    const idx = state.currentQuestionIndex;
    if (type === 'radio') {
      state.testAnswers[idx] = [optIdx];
    } else {
      if (!state.testAnswers[idx]) state.testAnswers[idx] = [];
      const arr = state.testAnswers[idx];
      if (checked && !arr.includes(optIdx)) arr.push(optIdx);
      if (!checked) { const i = arr.indexOf(optIdx); if (i > -1) arr.splice(i, 1); }
    }
    // Visual
    $$('#test-answer-options .answer-option').forEach(label => {
      const inp = label.querySelector('input');
      label.classList.toggle('selected', inp && inp.checked);
    });
    updateNavigatorGrid();
    updateNavigatorSummary();
  }

  function renderNavigatorGrid() {
    const grid = $('#navigator-grid');
    if (!grid) return;
    grid.innerHTML = '';
    state.testQuestions.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.className = 'navigator-item';
      btn.textContent = i + 1;
      btn.addEventListener('click', () => { state.currentQuestionIndex = i; renderTestQuestion(); });
      grid.appendChild(btn);
    });
  }

  function updateNavigatorGrid() {
    $$('#navigator-grid .navigator-item').forEach((btn, i) => {
      btn.classList.remove('current', 'answered', 'flagged');
      if (i === state.currentQuestionIndex) btn.classList.add('current');
      if (state.testAnswers[i] && state.testAnswers[i].length > 0) btn.classList.add('answered');
      if (state.flaggedQuestions.has(i)) btn.classList.add('flagged');
    });
  }

  function updateNavigatorSummary() {
    const answered = Object.keys(state.testAnswers).filter(k => state.testAnswers[k].length > 0).length;
    const el1 = $('#answered-count'), el2 = $('#flagged-count'), el3 = $('#unanswered-count');
    if (el1) el1.textContent = answered;
    if (el2) el2.textContent = state.flaggedQuestions.size;
    if (el3) el3.textContent = state.testQuestions.length - answered;
  }

  // Timer
  function startTimer() {
    clearInterval(state.timerInterval);
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
      state.timeRemaining--;
      updateTimerDisplay();
      if (state.timeRemaining <= 0) { clearInterval(state.timerInterval); submitTest(); }
    }, 1000);
  }

  function updateTimerDisplay() {
    const el = $('#test-timer');
    if (!el) return;
    const m = Math.floor(state.timeRemaining / 60);
    const s = state.timeRemaining % 60;
    el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    el.classList.toggle('timer-warning', state.timeRemaining <= 300 && state.timeRemaining > 60);
    el.classList.toggle('timer-danger', state.timeRemaining <= 60);
  }

  // Submit
  function submitTest() {
    clearInterval(state.timerInterval);
    state.testSubmitted = true;
    calculateResults();
    showView('results');
  }

  function calculateResults() {
    let totalCorrect = 0;
    const dr = { 1: { c: 0, t: 0 }, 2: { c: 0, t: 0 }, 3: { c: 0, t: 0 }, 4: { c: 0, t: 0 } };

    state.testQuestions.forEach((q, i) => {
      const ua = state.testAnswers[i] || [];
      const correct = arraysEqual(ua, state.optionOrders[i].correctIndices);
      if (correct) totalCorrect++;
      dr[q.domain].t++;
      if (correct) dr[q.domain].c++;
    });

    const ratio = totalCorrect / state.testQuestions.length;
    const scaled = Math.round(100 + ratio * 900);
    const passed = scaled >= 700;

    // Score circle animation
    const scoreValue = $('#score-value');
    const scoreCircle = $('#score-circle');
    const ringFill = $('#score-ring-fill');
    if (scoreValue) animateNumber(scoreValue, 0, scaled, 1500);
    if (scoreCircle) scoreCircle.className = 'score-circle ' + (passed ? 'score-circle--passed' : 'score-circle--failed');
    if (ringFill) {
      const circumference = 2 * Math.PI * 54; // ~339.29
      const offset = circumference * (1 - ratio);
      setTimeout(() => { ringFill.style.strokeDashoffset = offset; }, 100);
    }

    const scoreStatus = $('#score-status');
    if (scoreStatus) {
      scoreStatus.textContent = passed ? 'PASSED' : 'NOT PASSED';
      scoreStatus.className = 'score-status ' + (passed ? 'score-passed' : 'score-failed');
    }
    const correctEl = $('#correct-count'), totalEl = $('#total-count');
    if (correctEl) correctEl.textContent = totalCorrect;
    if (totalEl) totalEl.textContent = state.testQuestions.length;

    // Domain bars
    for (const d of [1, 2, 3, 4]) {
      const pct = dr[d].t > 0 ? Math.round((dr[d].c / dr[d].t) * 100) : 0;
      const pctEl = $(`#domain-${d}-percent`);
      const barEl = $(`#domain-${d}-bar`);
      if (pctEl) pctEl.textContent = pct + '%';
      if (barEl) {
        barEl.style.width = '0%';
        barEl.className = 'domain-breakdown-bar ' + (pct >= 70 ? 'bar-pass' : 'bar-fail');
        setTimeout(() => { barEl.style.width = pct + '%'; }, 400);
      }
    }

    renderReviewList();
  }

  function renderReviewList() {
    const list = $('#review-list');
    if (!list) return;
    list.innerHTML = '';

    state.testQuestions.forEach((q, i) => {
      const ua = state.testAnswers[i] || [];
      const qOrder = state.optionOrders[i];
      const correct = arraysEqual(ua, qOrder.correctIndices);
      const flagged = state.flaggedQuestions.has(i);

      if (state.reviewFilter === 'correct' && !correct) return;
      if (state.reviewFilter === 'incorrect' && correct) return;
      if (state.reviewFilter === 'flagged' && !flagged) return;

      const card = document.createElement('div');
      card.className = `review-card ${correct ? 'review-correct' : 'review-incorrect'}`;
      card.innerHTML = `
        <div class="review-card-header">
          <span class="review-q-number">Q${i + 1}</span>
          <span class="review-domain-tag">Domain ${q.domain}</span>
          ${flagged ? '<span class="review-flagged-tag">Flagged</span>' : ''}
          <span class="review-status ${correct ? 'status-correct' : 'status-incorrect'}">${correct ? '✓ Correct' : '✗ Incorrect'}</span>
        </div>
        <p class="review-question-text">${q.question}</p>
        <div class="review-answers">
          ${qOrder.texts.map((text, j) => {
            let cls = 'review-option';
            if (qOrder.correctIndices.includes(j)) cls += ' review-option-correct';
            if (ua.includes(j) && !qOrder.correctIndices.includes(j)) cls += ' review-option-incorrect';
            if (ua.includes(j)) cls += ' review-option-selected';
            return `<div class="${cls}">${'ABCDE'[j]}) ${text}</div>`;
          }).join('')}
        </div>
        <div class="review-explanation" style="display:none"><strong>Explanation:</strong> ${q.explanation}</div>`;

      card.addEventListener('click', () => {
        const expl = card.querySelector('.review-explanation');
        expl.style.display = expl.style.display === 'none' ? 'block' : 'none';
      });

      list.appendChild(card);
    });
  }

  function animateNumber(el, from, to, duration) {
    const start = performance.now();
    (function update(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * eased);
      if (p < 1) requestAnimationFrame(update);
    })(start);
  }

  function initTestEvents() {
    $('#prev-question-btn').addEventListener('click', () => {
      if (state.currentQuestionIndex > 0) { state.currentQuestionIndex--; renderTestQuestion(); }
    });
    $('#next-question-btn').addEventListener('click', () => {
      if (state.currentQuestionIndex < state.testQuestions.length - 1) {
        state.currentQuestionIndex++;
        renderTestQuestion();
      } else if (!state.testSubmitted) {
        confirmSubmit();
      }
    });
    $('#flag-question-btn').addEventListener('click', () => {
      const idx = state.currentQuestionIndex;
      state.flaggedQuestions.has(idx) ? state.flaggedQuestions.delete(idx) : state.flaggedQuestions.add(idx);
      renderTestQuestion();
    });
    $('#submit-test-btn').addEventListener('click', confirmSubmit);

    // Review filters
    $$('.review-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.review-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.reviewFilter = btn.dataset.filter;
        renderReviewList();
      });
    });

    $('#retake-test-btn').addEventListener('click', startPracticeTest);
    $('#results-home-btn').addEventListener('click', () => showView('home'));
  }

  function confirmSubmit() {
    const unanswered = state.testQuestions.length - Object.keys(state.testAnswers).filter(k => state.testAnswers[k].length > 0).length;
    const msg = unanswered > 0
      ? `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Submit anyway?`
      : 'Are you sure you want to submit your test?';
    if (confirm(msg)) submitTest();
  }

  // ============================================================
  // QUICK QUIZ
  // ============================================================
  function startQuickQuiz(domainId, topicId) {
    const bank = window.questionBank;
    if (!bank) return;
    let eligible = bank.filter(q => q.domain === parseInt(domainId));
    if (topicId) {
      const filtered = eligible.filter(q => q.topic === topicId);
      if (filtered.length >= 5) eligible = filtered;
    }

    state.quizQuestions = shuffle(eligible).slice(0, 10);
    state.quizAnswers = {};
    state.quizCurrentIndex = 0;
    state.quizChecked = false;
    state.quizCorrectCount = 0;

    const titleEl = $('#quiz-title');
    const domain = window.trainingContent ? window.trainingContent[domainId] : null;
    if (titleEl && domain) titleEl.textContent = `Quick Quiz: Domain ${domainId} - ${domain.name}`;

    const area = $('.quiz-question-area');
    const results = $('#quiz-results');
    if (area) area.classList.remove('hidden');
    if (results) results.classList.add('hidden');

    renderQuizQuestion();
    showView('quiz');
  }

  function renderQuizQuestion() {
    const q = state.quizQuestions[state.quizCurrentIndex];
    if (!q) return;

    const counter = $('#quiz-question-counter');
    if (counter) counter.textContent = `Question ${state.quizCurrentIndex + 1} of ${state.quizQuestions.length}`;

    const bar = $('#quiz-progress-bar');
    if (bar) bar.style.width = ((state.quizCurrentIndex + 1) / state.quizQuestions.length * 100) + '%';

    const tag = $('#quiz-domain-tag');
    if (tag) tag.textContent = `Domain ${q.domain}: ${q.domainName}`;

    const text = $('#quiz-question-text');
    if (text) text.textContent = q.question;

    const instr = $('#quiz-question-instruction');
    if (instr) {
      if (q.type === 'multiple-response') {
        instr.textContent = `(Select ${q.correctAnswers.length} answers)`;
        instr.classList.remove('hidden');
      } else {
        instr.textContent = '';
        instr.classList.add('hidden');
      }
    }

    const container = $('#quiz-answer-options');
    if (!container) return;
    container.innerHTML = '';
    const inputType = q.type === 'multiple-response' ? 'checkbox' : 'radio';

    q.options.forEach((opt, i) => {
      const label = document.createElement('label');
      label.className = 'answer-option';

      const input = document.createElement('input');
      input.type = inputType;
      input.name = 'quiz-answer';
      input.value = i;
      input.className = 'answer-input';

      const span = document.createElement('span');
      span.className = 'answer-text';
      span.textContent = opt;

      label.appendChild(input);
      label.appendChild(span);

      label.addEventListener('click', (e) => {
        if (state.quizChecked) return;
        if (e.target !== input) { e.preventDefault(); input.checked = !input.checked; }
        if (inputType === 'radio') {
          state.quizAnswers[state.quizCurrentIndex] = [i];
        } else {
          if (!state.quizAnswers[state.quizCurrentIndex]) state.quizAnswers[state.quizCurrentIndex] = [];
          const arr = state.quizAnswers[state.quizCurrentIndex];
          if (input.checked && !arr.includes(i)) arr.push(i);
          if (!input.checked) { const idx = arr.indexOf(i); if (idx > -1) arr.splice(idx, 1); }
        }
        container.querySelectorAll('.answer-option').forEach(lbl => {
          lbl.classList.toggle('selected', lbl.querySelector('input')?.checked);
        });
      });

      container.appendChild(label);
    });

    // Reset UI
    const feedback = $('#quiz-feedback');
    if (feedback) feedback.classList.add('hidden');
    const checkBtn = $('#quiz-check-btn');
    const nextBtn = $('#quiz-next-btn');
    if (checkBtn) checkBtn.classList.remove('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');
    state.quizChecked = false;
  }

  function checkQuizAnswer() {
    const q = state.quizQuestions[state.quizCurrentIndex];
    const ua = state.quizAnswers[state.quizCurrentIndex] || [];
    const correct = arraysEqual(ua, q.correctAnswers);
    if (correct) state.quizCorrectCount++;
    state.quizChecked = true;

    const feedback = $('#quiz-feedback');
    const status = $('#quiz-feedback-status');
    const explanation = $('#quiz-feedback-explanation');
    if (feedback) feedback.classList.remove('hidden');
    if (status) {
      status.textContent = correct ? '✓ Correct!' : '✗ Incorrect';
      status.className = 'quiz-feedback-status ' + (correct ? 'feedback-correct' : 'feedback-incorrect');
    }
    if (explanation) {
      explanation.innerHTML = `<p><strong>Correct:</strong> ${q.correctAnswers.map(i => q.options[i]).join(', ')}</p><p>${q.explanation}</p>`;
    }

    $$('#quiz-answer-options .answer-option').forEach((label, i) => {
      label.querySelector('input').disabled = true;
      label.style.pointerEvents = 'none';
      if (q.correctAnswers.includes(i)) label.classList.add('option-correct');
      if (ua.includes(i) && !q.correctAnswers.includes(i)) label.classList.add('option-incorrect');
    });

    $('#quiz-check-btn').classList.add('hidden');
    const nextBtn = $('#quiz-next-btn');
    nextBtn.classList.remove('hidden');
    nextBtn.textContent = state.quizCurrentIndex === state.quizQuestions.length - 1 ? 'See Results' : 'Next Question →';
  }

  function initQuizEvents() {
    $('#quiz-check-btn').addEventListener('click', () => {
      if (!(state.quizAnswers[state.quizCurrentIndex]?.length > 0)) {
        alert('Please select an answer.');
        return;
      }
      checkQuizAnswer();
    });
    $('#quiz-next-btn').addEventListener('click', () => {
      if (state.quizCurrentIndex < state.quizQuestions.length - 1) {
        state.quizCurrentIndex++;
        renderQuizQuestion();
      } else {
        // Show results
        $('.quiz-question-area').classList.add('hidden');
        const results = $('#quiz-results');
        results.classList.remove('hidden');
        $('#quiz-correct-count').textContent = state.quizCorrectCount;
        $('#quiz-total-count').textContent = state.quizQuestions.length;
      }
    });
    $('#quiz-back-btn').addEventListener('click', () => showView('training'));
    $('#quiz-retry-btn').addEventListener('click', () => startQuickQuiz(state.currentDomain, state.currentTopic));
    $('#quiz-return-btn').addEventListener('click', () => showView('training'));
  }

  // ============================================================
  // VISUAL EFFECTS
  // ============================================================

  // Scroll-triggered animations
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    $$('.feature-card, .domain-item, .exam-stat').forEach(el => {
      el.classList.add('animate-target');
      observer.observe(el);
    });

    // Test option cards scroll-reveal
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    $$('.scroll-reveal').forEach(el => revealObserver.observe(el));
  }

  // Hero particle network background
  function initHeroParticles() {
    const canvas = $('#hero-particles');
    if (!canvas) return;
    const hero = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: -1000, y: -1000 };

    function resize() {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }

    function create() {
      particles = [];
      const count = Math.min(Math.floor(canvas.width / 20), 80);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,153,0,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles + mouse interaction
      particles.forEach(p => {
        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150 * 0.5;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,153,0,${p.opacity})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      requestAnimationFrame(draw);
    }

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    hero.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });

    resize();
    create();
    draw();
    window.addEventListener('resize', () => { resize(); create(); });
  }

  // Card tilt effect
  function initTiltEffects() {
    $$('.feature-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;

        // Move glow
        const glow = card.querySelector('.feature-card-glow');
        if (glow) {
          glow.style.left = `${(e.clientX - rect.left) - rect.width}px`;
          glow.style.top = `${(e.clientY - rect.top) - rect.height}px`;
        }
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ============================================================
  // TESTIMONIALS CAROUSEL — continuous marquee
  // ============================================================
  function initCarousel() {
    const oldTrack = $('#testimonials-track');
    if (!oldTrack || oldTrack.querySelectorAll('.testimonial-card').length === 0) return;

    // Clone to clear accumulated event listeners from previous renders
    const track = oldTrack.cloneNode(true);
    oldTrack.parentNode.replaceChild(track, oldTrack);

    // Duplicate cards for seamless infinite loop
    track.innerHTML = track.innerHTML + track.innerHTML;

    // Force reflow so animation restarts cleanly
    track.style.animation = 'none';
    void track.offsetHeight;
    track.style.animation = '';

    track.addEventListener('mouseenter', function() { track.style.animationPlayState = 'paused'; });
    track.addEventListener('mouseleave', function() { track.style.animationPlayState = 'running'; });
    track.addEventListener('touchstart', function() { track.style.animationPlayState = 'paused'; }, { passive: true });
    track.addEventListener('touchend', function() { track.style.animationPlayState = 'running'; }, { passive: true });
  }

  // ============================================================
  // TESTIMONIALS — loaded from Firestore, approved only
  // ============================================================
  function escHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function initTestimonials() {
    if (!window.firebase || !window.firebase.firestore) return;
    firebase.firestore()
      .collection('testimonials')
      .where('status', '==', 'approved')
      .orderBy('date', 'desc')
      .onSnapshot(function(snap) {
        renderTestimonials(snap.docs.map(function(d) {
          return Object.assign({ id: d.id }, d.data());
        }));
      }, function() { /* silently ignore — section stays hidden */ });
  }

  function renderTestimonials(reviews) {
    const section = $('#testimonials-section');
    if (!section) return;

    if (reviews.length < 3) {
      section.style.display = 'none';
      return;
    }

    // Stats — only render figures backed by real data
    const withScores = reviews.filter(function(r) { return r.verified_score; });
    const statsEl = $('#testimonials-stats');
    if (statsEl) {
      let html = '';
      if (withScores.length >= 3) {
        const avg = withScores.reduce(function(s, r) { return s + r.verified_score; }, 0) / withScores.length;
        html += '<div class="testimonials-stat"><strong>' + Math.round(avg) + '</strong> avg reported score</div>';
      }
      statsEl.innerHTML = html;
    }

    // Render cards — never expose uid or email
    const avatarColors = ['#FF9900','#146EB4','#232F3E','#1B660F','#7B2D8E','#1A7A8A','#D4511E','#2E7D32'];
    const track = $('#testimonials-track');
    if (!track) return;
    track.innerHTML = reviews.map(function(r) {
      const initials = r.name.trim().split(/\s+/).map(function(w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
      const color = avatarColors[(r.name.charCodeAt(0) + (r.name.charCodeAt(1) || 0)) % avatarColors.length];
      const meta = [r.role ? escHtml(r.role) : '', r.verified_score ? 'Score: ' + r.verified_score : ''].filter(Boolean).join(' &bull; ');
      return [
        '<div class="testimonial-card">',
        '<div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>',
        '<p class="testimonial-quote">&ldquo;' + escHtml(r.quote) + '&rdquo;</p>',
        '<div class="testimonial-author">',
        '<div class="testimonial-avatar" style="background:' + color + '">' + initials + '</div>',
        '<div class="testimonial-info">',
        '<span class="testimonial-name">' + escHtml(r.name) + '</span>',
        meta ? '<span class="testimonial-role">' + meta + '</span>' : '',
        '</div></div></div>'
      ].join('');
    }).join('');

    section.style.display = '';
    initCarousel();
  }

  // ============================================================
  // REVIEW PROMPT + FORM — post-purchase
  // ============================================================
  window.showReviewPrompt = function() {
    const modal = $('#review-modal');
    if (!modal) return;
    const user = window.AppAuth && window.AppAuth.currentUser;
    if (!user) return;
    const nameEl = $('#review-name');
    if (nameEl) nameEl.value = window.AppAuth.getDisplayName();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  function initReviewForm() {
    const modal = $('#review-modal');
    if (!modal) return;

    function closeReviewModal() {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    const closeBtn = $('#review-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeReviewModal);
    const skipBtn = $('#review-skip');
    if (skipBtn) skipBtn.addEventListener('click', closeReviewModal);
    modal.addEventListener('click', function(e) { if (e.target === modal) closeReviewModal(); });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeReviewModal();
    });

    const form = $('#review-form');
    if (!form) return;
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const user = window.AppAuth && window.AppAuth.currentUser;
      if (!user) return;

      const errEl = $('#review-error');
      const btn = $('#review-submit');
      const name = $('#review-name').value.trim();
      const role = $('#review-role').value.trim();
      const scoreRaw = $('#review-score').value.trim();
      const quote = $('#review-quote').value.trim();
      const score = scoreRaw ? parseInt(scoreRaw, 10) : null;

      if (score !== null && (score < 100 || score > 1000)) {
        errEl.textContent = 'Score must be between 100 and 1000.';
        errEl.classList.remove('hidden');
        return;
      }

      btn.disabled = true;
      btn.textContent = 'Submitting…';
      errEl.classList.add('hidden');

      try {
        const doc = {
          uid: user.uid,
          name: name,
          role: role || null,
          quote: quote,
          date: firebase.firestore.FieldValue.serverTimestamp(),
          status: 'pending'
        };
        if (score) doc.verified_score = score;
        await firebase.firestore().collection('testimonials').add(doc);
        closeReviewModal();
        const b = document.createElement('div');
        b.className = 'payment-success-banner';
        b.innerHTML = '<span>Thank you! Your review has been submitted for approval.</span>' +
          '<button class="banner-close" onclick="this.parentElement.remove()">&#10005;</button>';
        document.body.insertBefore(b, document.body.firstChild);
        setTimeout(function() { if (b.parentNode) b.remove(); }, 6000);
      } catch (err) {
        errEl.textContent = 'Could not submit. Please try again.';
        errEl.classList.remove('hidden');
      } finally {
        btn.disabled = false;
        btn.textContent = 'Submit Review';
      }
    });
  }

  // ============================================================
  // PAYMENT / STRIPE
  // ============================================================
  function hasPaid() {
    if (window.AppAuth && window.AppAuth.ready) {
      return window.AppAuth.hasPaid();
    }
    return false;
  }

  function updateTestCardLocks() {
    const paid = hasPaid();
    $$('.test-option-card').forEach(card => {
      const lockEl = card.querySelector('.test-option-lock');
      const btn = card.querySelector('.test-start-btn');
      const isFree = card.classList.contains('test-option-free');
      if (paid && !isFree) {
        card.classList.add('unlocked');
        if (lockEl) lockEl.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>';
        if (btn) btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Start Test';
      } else if (!isFree) {
        card.classList.remove('unlocked');
        if (lockEl) lockEl.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
      }
    });
  }

  function showPaymentModal() {
    // Must be logged in to pay
    if (window.AppAuth && !window.AppAuth.isLoggedIn()) {
      // Store intent so BuyFlow auto-resumes Stripe redirect after signup/signin
      sessionStorage.setItem('pendingBuyIntent', '1');
      window.showAuthModal('login');
      return;
    }
    const modal = $('#payment-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    }
  }

  function hidePaymentModal() {
    const modal = $('#payment-modal');
    if (modal) {
      modal.classList.add('closing');
      setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('modal-open', 'closing');
        document.body.style.overflow = '';
      }, 250);
    }
  }

  function initPayment() {
    // Close modal on X button
    const closeBtn = $('#modal-close');
    if (closeBtn) closeBtn.addEventListener('click', hidePaymentModal);

    // Close modal on overlay click
    const modal = $('#payment-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) hidePaymentModal();
      });
    }

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        hidePaymentModal();
      }
    });

    // Pay button — delegate to shared BuyFlow module
    const payBtn = $('#stripe-pay-btn');
    if (payBtn) {
      if (window.BuyFlow) window.BuyFlow.registerBtn('stripe-pay-btn', payBtn.textContent.trim());
      payBtn.addEventListener('click', function () {
        if (hasPaid()) { hidePaymentModal(); return; }
        if (window.BuyFlow) window.BuyFlow.handlePay();
      });
    }
  }

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    initHome();
    initTrainingEvents();
    initTestEvents();
    initQuizEvents();
    initPayment();
    initTestimonials();
    initReviewForm();
    initScrollAnimations();
    initHeroParticles();
    initTiltEffects();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
