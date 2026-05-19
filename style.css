/* ============================================================
   Marcela Silva — Portfolio
   Cursor, glitch, scroll reveal, countUp, nav hide/show
   ============================================================ */

(function () {
  /* ---------- Custom cursor with inertia ---------- */
  const ring = document.getElementById('cursor-ring');
  const dot = document.getElementById('cursor-dot');
  const isTouch = matchMedia('(hover: none)').matches || window.innerWidth < 640;

  if (ring && dot && !isTouch) {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let seen = false;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      if (!seen) { seen = true; ring.classList.remove('hidden'); dot.classList.remove('hidden'); }
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    document.addEventListener('mouseleave', () => { ring.classList.add('hidden'); dot.classList.add('hidden'); });
    document.addEventListener('mouseenter', () => { ring.classList.remove('hidden'); dot.classList.remove('hidden'); });

    function tick() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    }
    tick();

    const expandSelector = 'a, button, .stack-pill, .badge, [data-cursor-expand]';
    document.body.addEventListener('mouseover', (e) => {
      if (e.target.closest && e.target.closest(expandSelector)) {
        ring.classList.add('expanded');
      }
    });
    document.body.addEventListener('mouseout', (e) => {
      if (e.target.closest && e.target.closest(expandSelector)) {
        ring.classList.remove('expanded');
      }
    });
  } else if (ring && dot) {
    ring.style.display = 'none';
    dot.style.display = 'none';
  }

  /* ---------- Glitch on name (CSS-driven, continuous) ---------- */
  // Animation is now infinite via CSS; no JS trigger needed.

  /* ---------- Scroll reveal ---------- */
  const reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  /* ---------- CountUp ---------- */
  const counters = document.querySelectorAll('[data-count]');
  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const dur = 1500;
    const t0 = performance.now();
    function step(now) {
      const t = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const v = Math.round(target * eased);
      el.textContent = v + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCount(e.target);
          cio.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cio.observe(c));
  } else {
    counters.forEach(c => animateCount(c));
  }

  /* ---------- Nav hide/show on scroll ---------- */
  const nav = document.querySelector('nav.topnav');
  let lastY = window.scrollY;
  let ticking = false;
  if (nav) {
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y > lastY && y > 200) {
            nav.classList.add('hidden');
          } else {
            nav.classList.remove('hidden');
          }
          lastY = y;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---------- Active section in nav ---------- */
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = [...navLinks].map(a => {
    const id = a.getAttribute('href').slice(1);
    return { a, el: document.getElementById(id) };
  }).filter(o => o.el);
  if (sections.length && 'IntersectionObserver' in window) {
    const sio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('active'));
          const match = sections.find(s => s.el === e.target);
          if (match) match.a.classList.add('active');
        }
      });
    }, { threshold: 0.35, rootMargin: '-20% 0px -50% 0px' });
    sections.forEach(s => sio.observe(s.el));
  }

  /* ---------- Smooth anchor (extra easing) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - 60;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  /* ---------- Year ---------- */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
