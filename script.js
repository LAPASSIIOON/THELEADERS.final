/* ============================================================
   THE LEADERS — Main Script (V3 Luxury Motion System)
   ------------------------------------------------------------
   نظام الحركة المعتمد:
   · المنحنى: cubic-bezier(0.16, 1, 0.3, 1) — "Luxe Ease"
   · المدة القياسية: 0.6–0.8 ثانية
   · كل الحركات تحترم prefers-reduced-motion
   · تسريع عتادي: translateZ(0) + will-change على المتحرك فقط
   ============================================================ */

function initScript() {
  // ===== PRELOADER =====
  var preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(function () { preloader.classList.add('hidden'); }, 1200);
  }

  // ===== NAVBAR SCROLL (الزجاج يزداد كثافة عند التمرير) =====
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }, { passive: true });
  }

  // ===== HAMBURGER =====
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // ===== SCROLL REVEAL (كشف ناعم 0.8s بمنحنى Luxe) =====
  var revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  // ===== 3D TILT + إضاءة محيطية تتبع المؤشر =====
  // ميلان مخفَّف بمعامل استيفاء (lerp) عبر rAF لنعومة 60fps،
  // ويُفعَّل فقط على أجهزة المؤشر الدقيق (لا يعمل على اللمس).
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var reducedTilt = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (finePointer && !reducedTilt) {
    document.querySelectorAll('.service-card, .trainer-card, .accreditation-card').forEach(function (card) {
      var targetRX = 0, targetRY = 0, curRX = 0, curRY = 0, hovering = false, raf = null;

      function tick() {
        // استيفاء خطي بمعامل 0.12 = تباطؤ حريري بلا اهتزاز
        curRX += (targetRX - curRX) * 0.12;
        curRY += (targetRY - curRY) * 0.12;
        card.style.transform =
          'perspective(1000px) translateY(' + (hovering ? -10 : 0) + 'px) scale(' + (hovering ? 1.02 : 1) + ') translateZ(0)' +
          ' rotateX(' + curRX.toFixed(2) + 'deg) rotateY(' + curRY.toFixed(2) + 'deg)';
        if (hovering || Math.abs(curRX) > 0.05 || Math.abs(curRY) > 0.05) {
          raf = requestAnimationFrame(tick);
        } else {
          card.style.transform = ''; raf = null;
        }
      }

      card.addEventListener('mouseenter', function () {
        hovering = true;
        if (!raf) raf = requestAnimationFrame(tick);
      });
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = e.clientX - r.left, y = e.clientY - r.top;
        // زوايا مقيدة ±5° = عمق راقٍ بلا مبالغة
        targetRX = ((y - r.height / 2) / (r.height / 2)) * -5;
        targetRY = ((x - r.width / 2) / (r.width / 2)) * 5;
        // إحداثيات الإضاءة المحيطية (radial-gradient في CSS)
        card.style.setProperty('--mx', (x / r.width * 100).toFixed(1) + '%');
        card.style.setProperty('--my', (y / r.height * 100).toFixed(1) + '%');
      });
      card.addEventListener('mouseleave', function () {
        hovering = false; targetRX = 0; targetRY = 0;
      });
    });
  }
}

/* ============================================================
   HERO FX — جسيمات ذهبية + بارالاكس + أضواء محيطية
   ============================================================ */
function initHeroFX() {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePtr = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // ===== الماركي السينمائي: سرعة قراءة ثابتة مهما كان عرض المحتوى =====
  // المشكلة الجذرية: المدة الثابتة تجعل السرعة تتضاعف مع طول المحتوى.
  // الحل: مدة = (نصف عرض المحتوى ÷ 24px/ثانية) — سرعة مريحة للعين دائمًا.
  document.querySelectorAll('.marquee-content').forEach(function (mc) {
    var applySpeed = function () {
      var half = mc.scrollWidth / 2;
      if (half > 0) mc.style.animationDuration = Math.max(45, Math.round(half / 24)) + 's';
    };
    applySpeed();
    window.addEventListener('resize', applySpeed);
  });

  // ===== بارالاكس المؤشر بقصور ذاتي (الألواح الزجاجية في الهيرو) =====
  // يكتب متغيري --px/--py على الهيرو فقط؛ CSS يوزعها على الألواح حسب --d.
  var heroEl = document.querySelector('.hero');
  if (heroEl && finePtr && !reduced && document.querySelector('.hero-slates')) {
    var tx = 0, ty = 0, cx = 0, cy = 0, pRaf = null;
    function pTick() {
      // معامل 0.06 = قصور ذاتي سائل (تتبع متأخر حريري)
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      heroEl.style.setProperty('--px', cx.toFixed(1) + 'px');
      heroEl.style.setProperty('--py', cy.toFixed(1) + 'px');
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) pRaf = requestAnimationFrame(pTick);
      else pRaf = null;
    }
    heroEl.addEventListener('mousemove', function (e) {
      var r = heroEl.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 46;   // مدى ±23px
      ty = ((e.clientY - r.top) / r.height - 0.5) * 34;   // مدى ±17px
      if (!pRaf) pRaf = requestAnimationFrame(pTick);
    });
    heroEl.addEventListener('mouseleave', function () {
      tx = 0; ty = 0;
      if (!pRaf) pRaf = requestAnimationFrame(pTick);
    });
  }

  // ===== أضواء محيطية ضبابية (عمق فراغي عبر كل الصفحات) =====
  if (!reduced && !document.querySelector('.ambient-orb')) {
    ['o1', 'o2', 'o3'].forEach(function (cls) {
      var orb = document.createElement('div');
      orb.className = 'ambient-orb ' + cls;
      orb.setAttribute('aria-hidden', 'true');
      document.body.appendChild(orb);
    });
  }

  // ===== جسيمات ذهبية تتصاعد بهدوء (canvas خفيف) =====
  var canvas = document.getElementById('heroParticles');
  if (canvas && !reduced) {
    var ctx = canvas.getContext('2d');
    var hero = canvas.parentElement;
    var particles = [];
    var COUNT = window.innerWidth < 768 ? 22 : 50;
    function resize() { canvas.width = hero.offsetWidth; canvas.height = hero.offsetHeight; }
    resize();
    window.addEventListener('resize', resize);
    for (var i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.6,
        s: Math.random() * 0.3 + 0.08,
        o: Math.random() * 0.45 + 0.12,
        drift: (Math.random() - 0.5) * 0.12
      });
    }
    (function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(232,196,104,' + p.o + ')';
        ctx.fill();
        p.y -= p.s; p.x += p.drift;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
      }
      requestAnimationFrame(draw);
    })();
  }

  // ===== بارالاكس هادئ على وترمارك الشعار (إزاحة فقط، بلا دوران) =====
  var wm = document.querySelector('.hero-watermark');
  if (wm && !reduced) {
    window.addEventListener('scroll', function () {
      wm.style.transform = 'translateZ(0) translateY(' + (window.scrollY * 0.16) + 'px)';
    }, { passive: true });
  }
}

if (document.readyState !== 'loading') { initHeroFX(); }
document.addEventListener('DOMContentLoaded', initHeroFX);

// Auto-init if DOM already loaded
if (document.readyState !== 'loading') {
  initScript();
}
