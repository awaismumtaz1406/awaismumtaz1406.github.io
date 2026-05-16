/* ============================================================
   js/main.js  —  Awais Mumtaz Portfolio Renderer
   Reads the PORTFOLIO object from data/portfolio.js and
   builds every section dynamically. Never edit this file
   to change content — edit data/portfolio.js instead.
   ============================================================ */

(function () {

  /* ── Helpers ─────────────────────────────────────────────── */
  const $ = id => document.getElementById(id);

  function el(tag, cls) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    return e;
  }

  function mkA(cls, href, text, target, downloadName) {
    const a = el('a', cls || '');
    a.href = href;
    if (text) a.innerHTML = text;
    if (target) { a.target = target; a.rel = 'noopener noreferrer'; }
    if (downloadName) a.setAttribute('download', downloadName);
    return a;
  }

  /* ── Proficiency level map ───────────────────────────────── */
  const LEVELS = {
    1: { label: 'Beginner',     pct: '22%'  },
    2: { label: 'Intermediate', pct: '54%'  },
    3: { label: 'Advanced',     pct: '82%'  },
    4: { label: 'Expert',       pct: '100%' },
  };

  /* ── Project emoji fallbacks ─────────────────────────────── */
  const EMOJI = {
    'fitness-app':        '&#x1F3CB;',
    'news-dashboard':     '&#x1F4F0;',
    'weather-dashboard':  '&#x26C5;',
    'currency-converter': '&#x1F4B1;',
  };

  /* ── Pull data from portfolio.js ─────────────────────────── */
  const { personal, skills, projects, services, resumeUrl } = PORTFOLIO;

  /* ══════════════════════════════════════════════════════════
     NAV
     ══════════════════════════════════════════════════════════ */
  $('nav-resume').href = resumeUrl;
  $('nav-resume').setAttribute('download', 'Awais_Mumtaz_Resume.pdf');

  /* ══════════════════════════════════════════════════════════
     HERO
     ══════════════════════════════════════════════════════════ */
  $('hero-role').textContent = personal.role;
  $('hero-bio').textContent  = personal.bio;

  // Action buttons
  const acts = $('hero-actions');

  const dlBtn = mkA('btn btn-primary', resumeUrl, '&#x2193; Download Resume', null, 'Awais_Mumtaz_Resume.pdf');
  dlBtn.setAttribute('aria-label', 'Download resume as PDF');
  acts.appendChild(dlBtn);

  acts.appendChild(mkA('btn btn-outline', '#contact', '&#x2192; Let\'s Connect'));

  const gh = personal.socials.find(s => s.label === 'GitHub');
  if (gh) acts.appendChild(mkA('btn btn-ghost', gh.url, 'GitHub', '_blank'));

  // Social pills
  const socDiv = $('hero-socials');
  personal.socials.forEach(s => {
    const a = mkA('pill', s.url, s.label, '_blank');
    a.setAttribute('aria-label', s.label + ' profile');
    socDiv.appendChild(a);
  });

  const emailPill = mkA('pill', 'mailto:' + personal.contact.email, personal.contact.email);
  emailPill.setAttribute('aria-label', 'Send email');
  socDiv.appendChild(emailPill);

  /* ══════════════════════════════════════════════════════════
     ABOUT
     ══════════════════════════════════════════════════════════ */
  $('about-bio').textContent = personal.bio;

  const contactItems = [
    { icon: '&#x2709;',    key: 'Email',    val: personal.contact.email,    href: 'mailto:' + personal.contact.email },
    { icon: '&#x1F4DE;',  key: 'Phone',    val: personal.contact.phone,    href: 'tel:' + personal.contact.phone.replace(/\s/g, '') },
    { icon: '&#x1F4CD;',  key: 'Location', val: personal.contact.location, href: null },
    ...personal.socials.map(s => ({
      icon: '&#x1F517;', key: s.label,
      val:  s.url.replace('https://', ''), href: s.url,
    })),
  ];

  const ac = $('about-contact');
  contactItems.forEach(ci => {
    const row = el('div', 'contact-row');
    const ico = el('span', 'contact-icon'); ico.innerHTML = ci.icon;
    const key = el('span', 'contact-key'); key.textContent = ci.key;
    const val = el(ci.href ? 'a' : 'span', 'contact-val');
    val.textContent = ci.val;
    if (ci.href) {
      val.href = ci.href;
      if (!ci.href.startsWith('mailto') && !ci.href.startsWith('tel')) {
        val.target = '_blank';
        val.rel = 'noopener noreferrer';
      }
    }
    row.appendChild(ico);
    row.appendChild(key);
    row.appendChild(val);
    ac.appendChild(row);
  });

  /* ══════════════════════════════════════════════════════════
     SKILLS
     ══════════════════════════════════════════════════════════ */
  const sg = $('skills-grid');

  skills.forEach((cat, ci) => {
    const card = el('div', 'skill-card reveal');
    card.style.transitionDelay = (ci * 0.07) + 's';
    card.setAttribute('role', 'region');
    card.setAttribute('aria-label', cat.category + ' skills');

    const catEl = el('p', 'skill-cat');
    catEl.textContent = cat.category;

    const ul = el('ul', 'skill-list');
    ul.setAttribute('aria-label', cat.category);

    cat.items.forEach(sk => {
      const lv = LEVELS[sk.level] || LEVELS[2];
      const li = document.createElement('li');

      // Name + level label row
      const meta = el('div', 'skill-meta');
      const nm   = el('span', 'skill-name');
      if (sk.icon) {
        const ico = el('span');
        ico.setAttribute('aria-hidden', 'true');
        ico.textContent = sk.icon;
        nm.appendChild(ico);
      }
      const nameSpan = el('span');
      nameSpan.textContent = sk.name;
      nm.appendChild(nameSpan);

      const lvEl = el('span', 'skill-lv');
      lvEl.textContent = lv.label;
      meta.appendChild(nm);
      meta.appendChild(lvEl);

      // Progress bar
      const track = el('div', 'skill-track');
      track.setAttribute('role', 'progressbar');
      track.setAttribute('aria-valuenow', sk.level);
      track.setAttribute('aria-valuemin', '1');
      track.setAttribute('aria-valuemax', '4');
      track.setAttribute('aria-label', sk.name + ': ' + lv.label);

      const fill = el('div', 'skill-fill');
      fill.dataset.w = lv.pct;
      track.appendChild(fill);

      li.appendChild(meta);
      li.appendChild(track);
      ul.appendChild(li);
    });

    card.appendChild(catEl);
    card.appendChild(ul);
    sg.appendChild(card);
  });

  /* ══════════════════════════════════════════════════════════
     PROJECTS
     ══════════════════════════════════════════════════════════ */
  const pw       = $('projects-wrap');
  const featured = projects.filter(p => p.featured);
  const rest     = projects.filter(p => !p.featured);

  // Featured cards (large 2-column layout)
  featured.forEach(p => {
    const card = el('article', 'proj-featured reveal');
    card.setAttribute('aria-label', p.title);

    // Left side — content
    const left = el('div');

    const badge = el('div', 'feat-badge');
    badge.textContent = '★ Featured Project';
    left.appendChild(badge);

    const title = el('h3', 'proj-title');
    title.textContent = p.title;
    left.appendChild(title);

    const period = el('p', 'proj-period');
    period.textContent = p.period;
    left.appendChild(period);

    const desc = el('p', 'proj-desc');
    desc.textContent = p.description;
    left.appendChild(desc);

    if (p.highlights && p.highlights.length) {
      const ul = el('ul', 'proj-hi');
      p.highlights.forEach(h => {
        const li = document.createElement('li');
        li.textContent = h;
        ul.appendChild(li);
      });
      left.appendChild(ul);
    }

    const stk = el('div', 'proj-stack');
    p.stack.forEach(t => {
      const c = el('span', 'chip-stack');
      c.textContent = t;
      stk.appendChild(c);
    });
    left.appendChild(stk);

    const lnks = el('div', 'proj-links');
    if (p.github) lnks.appendChild(mkA('btn btn-outline btn-sm', p.github, '&#x2325; View on GitHub', '_blank'));
    if (p.live)   lnks.appendChild(mkA('btn btn-primary btn-sm', p.live,   '&#x2197; Live Demo',      '_blank'));
    left.appendChild(lnks);

    // Right side — visual placeholder or image
    const right = el('div', 'proj-visual');
    if (p.image) {
      const img = document.createElement('img');
      img.src = p.image;
      img.alt = p.title + ' screenshot';
      right.appendChild(img);
    } else {
      const ico = el('span', 'proj-visual-emoji');
      ico.innerHTML = EMOJI[p.id] || '&#x1F4A1;';
      const tagLine = el('span');
      tagLine.textContent = (p.tags || []).join(' · ');
      right.appendChild(ico);
      right.appendChild(tagLine);
    }

    card.appendChild(left);
    card.appendChild(right);
    pw.appendChild(card);
  });

  // Rest of projects — smaller grid cards
  if (rest.length) {
    if (featured.length) {
      const lbl = el('p', 'rest-label');
      lbl.textContent = 'More Projects';
      pw.appendChild(lbl);
    }

    const grid = el('div', 'proj-grid');

    rest.forEach((p, pi) => {
      const card = el('article', 'proj-card reveal');
      card.style.transitionDelay = (pi * 0.08) + 's';
      card.setAttribute('aria-label', p.title);

      const title = el('h3', 'proj-title');
      title.textContent = p.title;
      card.appendChild(title);

      const period = el('p', 'proj-period');
      period.textContent = p.period;
      card.appendChild(period);

      const desc = el('p', 'proj-desc');
      desc.textContent = p.description;
      card.appendChild(desc);

      const stk = el('div', 'proj-stack');
      p.stack.forEach(t => {
        const c = el('span', 'chip-stack');
        c.textContent = t;
        stk.appendChild(c);
      });
      card.appendChild(stk);

      const tags = el('div', 'proj-tags');
      (p.tags || []).forEach(t => {
        const c = el('span', 'chip-tag');
        c.textContent = '#' + t;
        tags.appendChild(c);
      });
      card.appendChild(tags);

      const lnks = el('div', 'proj-links');
      if (p.github) lnks.appendChild(mkA('btn btn-ghost btn-sm',   p.github, '&#x2325; GitHub', '_blank'));
      if (p.live)   lnks.appendChild(mkA('btn btn-primary btn-sm', p.live,   '&#x2197; Demo',   '_blank'));
      card.appendChild(lnks);

      grid.appendChild(card);
    });

    pw.appendChild(grid);
  }

  /* ══════════════════════════════════════════════════════════
     SERVICES
     ══════════════════════════════════════════════════════════ */
  const svGrid = $('services-grid');

  services.forEach((svc, si) => {
    const card = el('div', 'service-card reveal');
    card.style.transitionDelay = (si * 0.1) + 's';

    const ico = el('div', 'service-icon');
    ico.setAttribute('aria-hidden', 'true');
    ico.textContent = svc.icon;

    const ttl = el('h3', 'service-title');
    ttl.textContent = svc.title;

    const ul = el('ul', 'service-list');
    svc.items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });

    card.appendChild(ico);
    card.appendChild(ttl);
    card.appendChild(ul);
    svGrid.appendChild(card);
  });

  /* ══════════════════════════════════════════════════════════
     CONTACT CTA
     ══════════════════════════════════════════════════════════ */
  const cl = $('cta-links');

  cl.appendChild(mkA('btn btn-white', 'mailto:' + personal.contact.email, '&#x2709; ' + personal.contact.email));

  personal.socials.forEach(s => {
    cl.appendChild(mkA('btn btn-dark-out', s.url, s.label + ' &#x2192;', '_blank'));
  });

  const ctaResume = mkA('btn btn-dark-out', resumeUrl, '&#x2193; Resume PDF', null, 'Awais_Mumtaz_Resume.pdf');
  ctaResume.setAttribute('aria-label', 'Download resume PDF');
  cl.appendChild(ctaResume);

  /* ══════════════════════════════════════════════════════════
     FOOTER
     ══════════════════════════════════════════════════════════ */
  $('footer-copy').textContent = '© ' + new Date().getFullYear() + ' ' + personal.name + ' · All rights reserved.';

  const fl = $('footer-links');
  personal.socials.forEach(s => {
    const a = mkA('', s.url, s.label, '_blank');
    a.setAttribute('aria-label', s.label);
    a.style.cssText = 'color:#52525b;font-family:var(--font-mono);font-size:.75rem;transition:color var(--tr)';
    fl.appendChild(a);
  });

  /* ══════════════════════════════════════════════════════════
     SKILL BAR ANIMATION (scroll-triggered)
     ══════════════════════════════════════════════════════════ */
  function animateBars() {
    document.querySelectorAll('.skill-fill').forEach(bar => {
      if (bar.getBoundingClientRect().top < window.innerHeight - 40) {
        bar.style.width = bar.dataset.w;
      }
    });
  }
  window.addEventListener('scroll', animateBars, { passive: true });
  animateBars(); // run once on load in case skills are visible

  /* ══════════════════════════════════════════════════════════
     SCROLL REVEAL (IntersectionObserver)
     ══════════════════════════════════════════════════════════ */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ══════════════════════════════════════════════════════════
     MOBILE NAV — open / close
     ══════════════════════════════════════════════════════════ */
  const hamburger = $('hamburger');
  const mobileNav = $('mobileNav');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  });

  $('closeNav').addEventListener('click', closeNav);

  // Click backdrop to close
  mobileNav.addEventListener('click', e => {
    if (e.target === mobileNav) closeNav();
  });

  // ESC key to close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeNav();
  });

  function closeNav() {
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Expose so inline onclick="closeNav()" in mobile-nav links works
  window.closeNav = closeNav;

})();
