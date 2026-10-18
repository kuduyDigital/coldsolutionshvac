// ColdSolutions homepage — Lenis smooth scroll, reveals, city-aware phone, booking, form.
(() => {
  window.csReady = true;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- City-aware phone (single source of truth) ----------
  // PLACEHOLDER: confirm the primary number per city with the client.
  const CITIES = {
    houston: { tel: '+18329570060', label: '(832) 957-0060' },
    corpus: { tel: '+13613177171', label: '(361) 317-7171' },
  };
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } },
  };
  const setCity = (city) => {
    const c = CITIES[city] || CITIES.houston;
    $$('[data-phone-link]').forEach((a) => (a.href = `tel:${c.tel}`));
    $$('[data-phone-text]').forEach((t) => (t.textContent = c.label));
    $$('[data-city-input]').forEach((i) => (i.checked = i.value === city));
    store.set('cs-city', city);
  };
  $$('[data-city-input]').forEach((i) => i.addEventListener('change', () => i.checked && setCity(i.value)));
  setCity(store.get('cs-city') || 'houston');

  // ---------- Lenis ----------
  let lenis = null;
  if (!reduceMotion && window.Lenis) {
    lenis = new window.Lenis({
      autoRaf: true,
      lerp: 0.11,
      anchors: true, // honors CSS scroll-margin-top for the sticky header
      allowNestedScroll: true,
      stopInertiaOnNavigate: true,
    });
    window.lenis = lenis; // exposed for third-party widgets and debugging
  }

  // ---------- Mobile menu ----------
  const toggle = $('[data-menu-toggle]');
  const menu = $('[data-menu]');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('hidden', !open);
    $('[data-menu-icon]').setAttribute('d', open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M7 12h13M4 17h16');
    open ? lenis?.stop() : lenis?.start();
  };
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  $$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
  });

  // ---------- Reveals ----------
  const reveals = $$('[data-reveal]');
  // auto-stagger siblings in lists that don't set --i explicitly
  reveals.forEach((el) => {
    if (el.tagName === 'LI' && !el.style.getPropertyValue('--i')) {
      const sibs = [...el.parentElement.children].filter((c) => c.hasAttribute('data-reveal'));
      el.style.setProperty('--i', String(Math.min(sibs.indexOf(el), 6)));
    }
  });
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-in'));
  } else {
    // Fully clipped elements never report as intersecting, so mask/wipe
    // reveals are observed through their parent.
    const targets = new Map();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        targets.get(en.target).forEach((el) => el.classList.add('is-in'));
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    reveals.forEach((el) => {
      let t = /^(mask|wipe)$/.test(el.dataset.reveal) ? el.parentElement : el;
      if (t.tagName === 'PICTURE') t = t.parentElement;
      targets.has(t) ? targets.get(t).push(el) : (targets.set(t, [el]), io.observe(t));
    });
  }

  // ---------- Lineage line (scroll-linked) ----------
  const lineage = $('[data-lineage] ol');
  if (lineage && !reduceMotion) {
    const update = () => {
      const r = lineage.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.65 - r.top) / r.height));
      lineage.style.setProperty('--p', p.toFixed(4));
    };
    lenis ? lenis.on('scroll', update) : addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    update();
  }

  // ---------- Hero: temperature count-down + gentle parallax ----------
  const temp = $('[data-temp]');
  if (temp && !reduceMotion) {
    const from = +temp.dataset.from, to = +temp.dataset.to, dur = 1800, delay = 900;
    temp.textContent = from;
    const t0 = performance.now() + delay;
    const tick = (now) => {
      const k = Math.min(1, Math.max(0, (now - t0) / dur));
      const e = 1 - Math.pow(1 - k, 4); // ease-out
      temp.textContent = Math.round(from + (to - from) * e);
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  const parallax = $$('[data-parallax]');
  if (parallax.length && lenis) {
    lenis.on('scroll', ({ scroll }) => {
      if (scroll > innerHeight * 1.2) return;
      parallax.forEach((el) => (el.style.translate = `0 ${(scroll * +el.dataset.parallax).toFixed(1)}px`));
    });
  }

  // ---------- Housecall Pro booking (loaded on first use) ----------
  const HCP_SRC = 'https://online-booking.housecallpro.com/script.js?token=24691566194a487b9e6d3c694d9ff5e3&orgName=ColdSolutions';
  let hcpLoading = null;
  const loadHCP = () => hcpLoading ||= new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = HCP_SRC; s.async = true;
    s.onload = () => {
      // the widget defines HCPWidget after its own init
      const t0 = performance.now();
      (function wait() {
        if (window.HCPWidget?.openModal) return resolve(window.HCPWidget);
        if (performance.now() - t0 > 4000) return reject(new Error('HCP widget unavailable'));
        setTimeout(wait, 50);
      })();
    };
    s.onerror = reject;
    document.head.appendChild(s);
  });
  $$('[data-book]').forEach((a) => a.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return; // allow open-in-new-tab
    e.preventDefault();
    a.setAttribute('aria-busy', 'true');
    loadHCP()
      .then((w) => w.openModal())
      .catch(() => { window.location.href = a.href; }) // fall back to the hosted booking page
      .finally(() => a.removeAttribute('aria-busy'));
  }));

  // ---------- CompanyCam project feed (loaded when near the viewport) ----------
  const cc = $('[data-companycam]');
  if (cc) {
    const loadCC = () => {
      const s = document.createElement('script');
      s.src = 'https://showcase.companycam.com/bundle.js'; s.async = true;
      document.body.appendChild(s);
    };
    if ('IntersectionObserver' in window) {
      const ccio = new IntersectionObserver((en) => {
        if (en.some((e) => e.isIntersecting)) { ccio.disconnect(); loadCC(); }
      }, { rootMargin: '800px 0px' });
      ccio.observe(cc);
    } else loadCC();
  }

  // ---------- Quote form ----------
  $$('[data-quote-type="business"]').forEach((a) => a.addEventListener('click', () => {
    const biz = $('#seg-biz'); if (biz) biz.checked = true;
    const need = $('#need'); if (need) need.value = 'Commercial refrigeration';
  }));

  const form = $('[data-quote-form]');
  form?.addEventListener('submit', (e) => {
    let firstBad = null;
    $$('input[required], input[pattern]', form).forEach((input) => {
      const field = input.closest('.field');
      field.querySelector('.err')?.remove();
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      if (!input.checkValidity()) {
        const msg = input.validity.valueMissing ? 'This field is required.'
          : input.type === 'email' ? 'Enter a valid email address.'
          : input.name === 'zip' ? 'Enter a 5-digit ZIP code.' : 'Check this field.';
        const err = document.createElement('p');
        err.className = 'err'; err.id = `${input.id}-err`; err.textContent = msg;
        field.appendChild(err);
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', err.id);
        firstBad ||= input;
      }
    });
    if (firstBad) {
      e.preventDefault();
      firstBad.focus();
      $('[data-form-status]').textContent = 'Please fix the highlighted fields.';
    }
  });
})();
