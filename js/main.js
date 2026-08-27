document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Subtle 3D tilt on hover (product & feature cards) ---------- */
  const tiltEnabled = !window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.matchMedia('(hover: hover)').matches;
  function wireTilt(root) {
    if (!tiltEnabled) return;
    (root || document).querySelectorAll('.product-card:not([data-tilt-wired]), .feature-card:not([data-tilt-wired])').forEach(card => {
      card.dataset.tiltWired = 'true';
      card.style.transformStyle = 'preserve-3d';
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }
  wireTilt();

  /* ---------- Lightbox: click any card/product/profile photo to preview ---------- */
  let lightboxEl = null;
  function ensureLightbox() {
    if (lightboxEl) return lightboxEl;
    lightboxEl = document.createElement('div');
    lightboxEl.className = 'lightbox-overlay';
    lightboxEl.innerHTML = `<button class="lightbox-close" aria-label="Close preview">&times;</button><img alt=""><span class="lightbox-hint">Click anywhere to close</span>`;
    document.body.appendChild(lightboxEl);
    lightboxEl.addEventListener('click', () => closeLightbox());
    lightboxEl.querySelector('img').addEventListener('click', (e) => e.stopPropagation());
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
    return lightboxEl;
  }
  function openLightbox(src, alt) {
    const el = ensureLightbox();
    el.querySelector('img').src = src;
    el.querySelector('img').alt = alt || '';
    requestAnimationFrame(() => el.classList.add('open'));
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lightboxEl) return;
    lightboxEl.classList.remove('open');
    document.body.style.overflow = '';
  }
  document.addEventListener('click', (e) => {
    const img = e.target.closest(
      '.p-slide-track img, .product-expand-inner .gallery img, .who-img-main img, .who-img-sub img, .leader-photo img, .img-frame img, #home-products-grid img'
    );
    if (img) openLightbox(img.src, img.alt);
  });

  /* ---------- Header scroll state + mobile nav ---------- */
  const header = document.querySelector('.site-header');
  const progressBar = document.getElementById('scrollProgress');
  const onScroll = () => {
    header && header.classList.toggle('scrolled', window.scrollY > 30);
    if (progressBar) {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      progressBar.style.width = (scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0) + '%';
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  /* ---------- Scroll reveal ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  function observeReveal(root = document) {
    const els = root.querySelectorAll('.reveal:not(.in), .reveal-scale:not(.in)');
    els.forEach((el, i) => { if (!el.style.getPropertyValue('--i')) el.style.setProperty('--i', i % 8); io.observe(el); });
  }
  window.observeReveal = observeReveal;
  observeReveal();

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('[data-counter]');
  const cIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || '';
      const dur = 1400;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      cIo.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => cIo.observe(el));

  /* ---------- Hero slider ---------- */
  const heroTrack = document.querySelector('.hero-slides');
  if (heroTrack && typeof CMS !== 'undefined') {
    const HERO_SLIDES = CMS.getHeroSlides();
    HERO_SLIDES.forEach((src, i) => {
      const div = document.createElement('div');
      div.className = 'hero-slide' + (i === 0 ? ' active' : '');
      div.style.backgroundImage = `url('${src}')`;
      heroTrack.appendChild(div);
    });
    const dotsWrap = document.querySelector('.hero-dots');
    const slides = heroTrack.querySelectorAll('.hero-slide');
    let idx = 0;
    if (dotsWrap) {
      HERO_SLIDES.forEach((_, i) => {
        const b = document.createElement('button');
        if (i === 0) b.classList.add('active');
        b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        b.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(b);
      });
    }
    function goTo(i) {
      slides[idx].classList.remove('active');
      dotsWrap && dotsWrap.children[idx].classList.remove('active');
      idx = i;
      slides[idx].classList.add('active');
      dotsWrap && dotsWrap.children[idx].classList.add('active');
    }
    setInterval(() => goTo((idx + 1) % slides.length), 5500);
  }

  /* ---------- Testimonial carousel ---------- */
  const testiTrack = document.querySelector('.testi-track');
  if (testiTrack && typeof CMS !== 'undefined') {
    const TESTIMONIALS = CMS.getTestimonials();
    TESTIMONIALS.forEach(t => {
      const slide = document.createElement('div');
      slide.className = 'testi-slide';
      slide.innerHTML = `
        <div class="card testi-card">
          <div class="testi-avatar">${t.name.charAt(0)}</div>
          <div class="testi-stars" aria-label="${t.rating} out of 5 stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
          <p class="testi-quote">"${t.review}"</p>
          <p class="testi-name">${t.name}</p>
          <p class="testi-city">${t.city}</p>
        </div>`;
      testiTrack.appendChild(slide);
    });
    const dotsWrap = document.querySelector('.testi-dots');
    let ti = 0;
    const total = TESTIMONIALS.length;
    TESTIMONIALS.forEach((_, i) => {
      const b = document.createElement('button');
      if (i === 0) b.classList.add('active');
      b.setAttribute('aria-label', 'Show testimonial ' + (i + 1));
      b.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(b);
    });
    function goTo(i) {
      ti = (i + total) % total;
      testiTrack.style.transform = `translateX(-${ti * 100}%)`;
      [...dotsWrap.children].forEach((d, di) => d.classList.toggle('active', di === ti));
    }
    document.querySelector('.testi-arrow.prev')?.addEventListener('click', () => goTo(ti - 1));
    document.querySelector('.testi-arrow.next')?.addEventListener('click', () => goTo(ti + 1));
    let autoTesti = setInterval(() => goTo(ti + 1), 6000);
    testiTrack.closest('.testi-wrap')?.addEventListener('mouseenter', () => clearInterval(autoTesti));
  }

  /* ---------- Contact form validation (client-side demo) ---------- */
  const form = document.getElementById('contact-form');
  if (form) {
    const status = document.getElementById('form-status');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      const fields = {
        name: { el: form.name, test: v => v.trim().length > 1 },
        email: { el: form.email, test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
        phone: { el: form.phone, test: v => v.trim().length >= 7 },
        subject: { el: form.subject, test: v => v.trim().length > 2 },
        message: { el: form.message, test: v => v.trim().length > 8 },
      };
      Object.values(fields).forEach(({ el, test }) => {
        const wrap = el.closest('.field');
        const ok = test(el.value);
        wrap.classList.toggle('invalid', !ok);
        if (!ok) valid = false;
      });
      if (!valid) {
        status.className = 'form-status error';
        status.textContent = 'Please check the highlighted fields and try again.';
        return;
      }
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        if (typeof CMS !== 'undefined') {
          CMS.addMessage({
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            subject: form.subject.value.trim(),
            message: form.message.value.trim()
          });
        }
        status.className = 'form-status success';
        status.textContent = "Thank you — your message has been received. We'll get back to you shortly.";
        btn.textContent = original;
        btn.disabled = false;
        form.reset();
      }, 900);
    });
  }

  /* ---------- Active nav link ---------- */
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
