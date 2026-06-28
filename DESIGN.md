# Design System — cloudpractitionerprep.com

All tokens live in `:root` in `styles.css`. **Never hardcode a value that has a token.**
Every new page must load `styles.css` and reference the tokens below.

---

## Color tokens

```css
/* ── AWS Brand ─────────────────────────────────────── */
--aws-orange:       #FF9900   /* primary CTA, highlights */
--aws-orange-hover: #EC7211   /* hover state for orange elements */
--aws-orange-light: #FFF4E6   /* tinted orange backgrounds */
--aws-squid-ink:    #232F3E   /* header, dark surfaces, secondary CTA */
--aws-ink-hover:    #37475A
--aws-ink-dark:     #161E2D

/* ── Semantic ───────────────────────────────────────── */
--color-success:    #037F0C
--color-success-bg: #F2FCF3
--color-error:      #D91515
--color-error-bg:   #FFF0F0
--color-warning:    #B8860B
--color-warning-bg: #FFFCE6
--color-info:       #0972D3
--color-info-bg:    #F0F7FF

/* ── Neutrals ───────────────────────────────────────── */
--bg-page:          #F2F3F3   /* page background */
--bg-card:          #FFFFFF   /* card and modal backgrounds */
--text-primary:     #16191F
--text-secondary:   #5F6B7A
--text-muted:       #8D99A8
--border-color:     #D5DBDB
--border-light:     #EAEDED
--divider:          #E9EBED
```

---

## Typography

**Font stack:** `'Inter', 'Amazon Ember', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`
Loaded from Google Fonts CDN via `index.html`. Apply via `font-family: var(--font-main)`.

**Scale:**

| Token | rem | px | Use |
|---|---|---|---|
| `--fs-xs` | 0.75 | 12 | Tags, labels, captions |
| `--fs-sm` | 0.875 | 14 | Body text in dense UI, secondary text |
| `--fs-base` | 1.0 | 16 | Default body |
| `--fs-lg` | 1.125 | 18 | Lead text, feature descriptions |
| `--fs-xl` | 1.25 | 20 | Card headings, subheadings |
| `--fs-2xl` | 1.5 | 24 | Section titles |
| `--fs-3xl` | 2.0 | 32 | Page headings |
| `--fs-4xl` | 2.75 | 44 | Hero heading |

**Weight conventions:** 400 body · 500 emphasis · 600 label · 700 heading · 800 display

---

## Spacing

4 px base unit. Use variables — never magic numbers.

```
--sp-1   4px     --sp-6   24px
--sp-2   8px     --sp-8   32px
--sp-3   12px    --sp-10  40px
--sp-4   16px    --sp-12  48px
--sp-5   20px    --sp-16  64px
                 --sp-20  80px
```

**Section vertical rhythm:** `padding: var(--sp-16) 0` for standard sections, `var(--sp-20) 0 var(--sp-16)` for the hero.

---

## Radii, Shadows, Transitions

```css
/* Radii */
--r-sm: 4px   --r-md: 8px   --r-lg: 12px   --r-xl: 16px   --r-full: 9999px

/* Shadows */
--shadow-sm:    0 1px 1px 0 rgba(0,28,36,.3), 1px 1px 1px 0 rgba(0,28,36,.15)
--shadow-md:    0 2px 4px rgba(0,28,36,.12), 0 0 2px rgba(0,28,36,.06)
--shadow-lg:    0 4px 16px rgba(0,28,36,.15)
--shadow-xl:    0 8px 32px rgba(0,28,36,.18)
--shadow-hover: 0 4px 20px rgba(0,28,36,.2)

/* Transitions */
--t-fast:   150ms cubic-bezier(.4,0,.2,1)   /* micro-interactions */
--t-base:   250ms cubic-bezier(.4,0,.2,1)   /* most UI transitions */
--t-slow:   400ms cubic-bezier(.4,0,.2,1)   /* reveals, panels */
--t-spring: 500ms cubic-bezier(.175,.885,.32,1.275)  /* icon bounces */
```

---

## Layout

```css
--header-h:  56px    /* sticky header height — use in padding-top */
--sidebar-w: 300px   /* training sidebar */
--max-w:     1200px  /* .container max-width */
```

**Page shell:** All pages must include `#site-header` and `#site-footer`. `#app-main` has `padding-top: var(--header-h)`.

```html
<!-- Required shell for every page -->
<header id="site-header">…</header>
<main id="app-main">…</main>
<footer id="site-footer">…</footer>
```

**Grid container:**
```html
<div class="container">…</div>   <!-- max-width 1200px, centered, h-padded -->
```

---

## Buttons

Base class is `.btn`. Combine with one variant and optionally one size modifier.

| Class | Appearance | Use |
|---|---|---|
| `.btn.btn-primary` | Orange bg, dark text | Primary CTA |
| `.btn.btn-secondary` | Squid Ink bg, white text | Secondary action on light bg |
| `.btn.btn-outline` | Transparent, dark border | Tertiary on light bg |
| `.btn.btn-outline-light` | Transparent, white border | Tertiary on dark bg |
| `.btn.btn-ghost` | No border, muted text | Inline / low-emphasis |
| `.btn.btn-danger` | Red bg, white text | Destructive action |

**Size modifiers:**

| Class | Padding | Min-height |
|---|---|---|
| `.btn-sm` | `4px 12px` | 32px |
| *(default)* | `8px 20px` | 40px |
| `.btn-lg` | `12px 28px` | 48px |

**Full-width buttons** (modals, form submissions):
```html
<!-- width: 100% is added via a layout wrapper or w-100 utility, not in .btn -->
<!-- For modal pay button: -->
<button class="btn btn-primary btn-lg modal-pay-btn" id="stripe-pay-btn">…</button>
<!-- .modal-pay-btn adds display:flex; width:100%; margin-bottom:1rem — nothing else -->
```

**Active state variant:** Add `.active` to `.btn-outline` to show orange-selected state (used for review filter chips).

**Disabled:** Add `disabled` attribute — `.btn:disabled` sets `opacity: 0.5; pointer-events: none`.

---

## Cards

### Feature card (home page)
```html
<article class="feature-card animate-target">
  <div class="feature-card-glow"></div>   <!-- orange glow on hover -->
  <div class="feature-card-icon training-icon">…svg…</div>
  <h3>…</h3>
  <p>…</p>
  <ul class="feature-list"><li>…</li></ul>
  <button class="btn btn-primary">…</button>
</article>
```
Grid: `.feature-cards` → `grid-template-columns: repeat(2, 1fr)`, collapses to 1 col at 768px.

### Question card (test view)
```html
<div class="question-card">
  <div class="question-meta">
    <span class="question-domain-tag">…</span>
    <span class="question-type-tag">…</span>
  </div>
  <p class="question-text">…</p>
  <div class="answer-options">
    <label class="answer-option">…</label>
  </div>
  <div class="question-explanation">…</div>
</div>
```

### Review card (results view)
```html
<div class="review-card review-correct|review-incorrect">
  <div class="review-card-header">…</div>
  <p class="review-question-text">…</p>
  <div class="review-answers">…</div>
  <p class="review-explanation">…</p>
</div>
```

### Test option card (dark section)
```html
<div class="test-option-card test-option-free|test-option-featured">
  <div class="test-card-glow"></div>
  <div class="test-option-ribbon test-option-ribbon-free|recommended">…</div>
  <div class="test-option-lock">…</div>
  <div class="test-option-icon">…</div>
  <div class="test-option-time">90<span class="test-option-unit">min</span></div>
  <div class="test-option-questions">65 questions</div>
  <div class="test-option-divider"></div>
  <p class="test-option-desc">…</p>
  <button class="btn test-start-btn">…</button>
</div>
```

### Testimonial card
```html
<div class="testimonial-card">
  <div class="testimonial-stars">★★★★★</div>
  <p class="testimonial-quote">…</p>
  <div class="testimonial-author">
    <div class="testimonial-avatar" style="background:#FF9900">AB</div>
    <div class="testimonial-info">
      <span class="testimonial-name">…</span>
      <span class="testimonial-role">…</span>
    </div>
  </div>
</div>
```
Fixed width: 340px desktop / 300px tablet / 280px mobile. Lives inside `.testimonials-track` for marquee.

### Content callout boxes (training content)
```html
<div class="key-concept">…</div>  <!-- blue left-border, info bg -->
<div class="tip-box">…</div>      <!-- orange left-border, orange-light bg -->
<div class="warning-box">…</div>  <!-- red left-border, error bg -->
```

---

## Section patterns

### Light section (white bg)
```html
<section class="features-section">
  <div class="container">
    <h2 class="section-title">…</h2>
    <p class="section-subtitle">…</p>
    …content…
  </div>
</section>
```

### Dark section (squid ink bg + particles)
Used for hero and test selection. Background:
```css
background: linear-gradient(135deg, var(--aws-squid-ink) 0%, var(--aws-ink-dark) 50%, #0D1117 100%);
```
White text directly; use `rgba(255,255,255,0.65)` for subtitle text.

### Testimonials section
```html
<section class="testimonials-section" id="testimonials-section" style="display:none">
  <!-- Shown by JS only when ≥ 3 approved reviews exist in Firestore -->
  <div class="container">
    <h2 class="section-title">…</h2>
    <div class="testimonials-stats" id="testimonials-stats"></div>
    <div class="testimonials-carousel">
      <div class="testimonials-track" id="testimonials-track"></div>
    </div>
  </div>
</section>
```

---

## Navigation

```html
<header id="site-header">
  <div class="header-inner">
    <a href="#" class="header-logo">
      <svg class="logo-aws">…</svg>
      <span class="logo-text">EXAM-CODE <span class="logo-accent">Prep</span></span>
    </a>
    <nav class="header-nav" id="header-nav">
      <button class="nav-link active" data-view="home">…</button>
      <button class="nav-link" data-view="training">…</button>
      <button class="nav-link" data-view="test">…</button>
    </nav>
    <div class="auth-header-wrap">
      <button class="auth-header-btn" id="auth-header-btn">Sign In</button>
      <div class="user-menu hidden" id="user-menu">…</div>
    </div>
    <button class="mobile-menu-btn" id="mobile-menu-btn">…</button>
  </div>
</header>
```

**Active state:** Add `.active` to the current `.nav-link`. Controlled by `showView()` in `app.js`.
**Mobile:** `.header-nav` hides below 768px; `.mobile-menu-btn` toggles `.open` class.

---

## Footer

```html
<footer id="site-footer">
  <div class="container">
    <p data-cfg="footer-disclaimer">AWS Certified … — Not affiliated with or endorsed by Amazon Web Services.</p>
  </div>
</footer>
```

Dark background (`var(--aws-squid-ink)`), centered `var(--fs-xs)` text at 50% white opacity.
**The disclaimer text is mandatory on every page. Never remove it.**

---

## Modals

All modals share the same overlay/card structure:

```html
<div class="modal-overlay hidden" id="my-modal">
  <div class="modal-content [variant]">
    <button class="modal-close" id="my-modal-close">&times;</button>
    <!-- content -->
  </div>
</div>
```

**Variants** (add to `.modal-content`):

| Class | Max-width | Use |
|---|---|---|
| *(default)* | 440px | Payment modal |
| `.auth-modal-content` | 420px | Sign-in / sign-up |
| `.review-modal-content` | 480px | Review submission |

**Open/close:** Add/remove `.hidden`. For animated close, add `.closing` class and remove after 250ms. The JS in `firebase-auth.js` and `app.js` handles this pattern.

**Backdrop:** `rgba(0,0,0,0.6)`, `z-index: 2000`.

---

## Banners

Top-of-page notification strips (fixed, above content):

```html
<div class="payment-success-banner">
  <span>Message text</span>
  <button class="banner-close" onclick="this.parentElement.remove()">✕</button>
</div>
```

Default: green gradient. Override `background` for variants:
- Success: `linear-gradient(90deg, #037F0C, #2E7D32)` (default)
- Info/confirming: `linear-gradient(90deg, #1565C0, #0D47A1)`
- Error/kicked: `linear-gradient(90deg, #d32f2f, #c62828)`

---

## Form fields

```html
<div class="auth-field">
  <label for="field-id">Label <span class="field-optional">(optional)</span></label>
  <input type="text" id="field-id" …>
</div>
```

Focus ring: `border-color: var(--aws-orange); box-shadow: 0 0 0 3px rgba(255,153,0,0.12)`.

**Error message:**
```html
<div class="auth-error hidden">Error text here</div>
```
Remove `.hidden` to show. Uses `var(--color-error)` text on `var(--color-error-bg)` background.

---

## Auth modal components

```html
<div class="auth-tabs">
  <button class="auth-tab active" data-tab="login">Sign In</button>
  <button class="auth-tab" data-tab="signup">Create Account</button>
</div>
<form class="auth-form" id="auth-form-login">…</form>
<form class="auth-form hidden" id="auth-form-signup">…</form>

<div class="auth-divider"><span>or</span></div>
<button class="btn-google google-signin-btn">
  <svg><!-- Google G SVG --></svg>
  Continue with Google
</button>
```

---

## Badges and tags

```html
<span class="domain-badge">Domain 1: Cloud Concepts</span>    <!-- orange pill -->
<span class="question-domain-tag">Cloud Concepts</span>       <!-- orange pill, smaller -->
<span class="question-type-tag">Multiple Response</span>      <!-- grey pill -->
<span class="test-selection-eyebrow">Practice Tests</span>    <!-- uppercase bordered pill -->
```

Inline service highlight in training content:
```html
<span class="service-highlight">Amazon S3</span>
```

---

## Animations

**Scroll reveal:** Add `.animate-target` to elements. `initScrollAnimations()` in `app.js` adds `.animate-in` when the element enters the viewport. Stagger siblings with inline `transition-delay`.

**View transitions:** `.view.active-view` gets `animation: viewFadeIn 0.35s ease` automatically.

**Reduced motion:** All animations honor `prefers-reduced-motion: reduce` via the global override.

---

## Breakpoints

| Name | Width | Notable changes |
|---|---|---|
| Desktop | > 1024px | Full layout, 4-col test grid |
| Tablet | ≤ 1024px | Test layout stacks, 2-col test grid |
| Mobile | ≤ 768px | Nav collapses, single-column, sidebar stacks |
| Small | ≤ 480px | Hero text shrinks, exam stats stack |
| XSmall | ≤ 600px | 1-col test grid, modal fills screen |

---

## Accessibility

- Focus ring: `outline: 2px solid var(--aws-orange); outline-offset: 2px` (`:focus-visible` only)
- Screen-reader text: `.sr-only`
- Hidden but in DOM: `.hidden` (`display: none !important`)
- High contrast: border widths increase to 3px for answer options, navigator items, and buttons
