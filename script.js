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
      // 20px/ثانية = زحف مريح للعين؛ المتغير يعمل حتى مع تفعيل "تقليل الحركة" في النظام
      if (half > 0) mc.style.setProperty('--mdur', Math.max(60, Math.round(half / 20)) + 's');
    };
    applySpeed();
    window.addEventListener('load', applySpeed);   // إعادة القياس بعد تحميل الخطوط
    window.addEventListener('resize', applySpeed);
  });


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

  initHeroGem();     // المجسّم الرئيسي (Three.js)
  initCursorRing();  // المؤشر الذهبي المخصّص
}

/* ============================================================
   HERO GEM — جوهرة القيادة ثلاثية الأبعاد (Three.js r128)
   ------------------------------------------------------------
   · مجسّم إيكوساهيدرون ذهبي مُوجّه الأوجه (facets) + شبكة سلكية
   · فيزياء تتبّع المؤشر بتخميد lerp ناعم (rotation.x / rotation.y)
   · طفو خمولي بطيء على المحور Y (يُعطّل مع تقليل الحركة)
   · ديسكتوب + WebGL فقط؛ يتجاوز نفسه بأمان على الجوال/اللمس
   · سقف pixelRatio = 2، وإيقاف الحلقة عند إخفاء التبويب → 60fps
   ============================================================ */
function initHeroGem() {
  var canvas = document.getElementById('heroGem');
  if (!canvas || typeof THREE === 'undefined') return;
  if (window.innerWidth <= 1024 || window.matchMedia('(hover: none)').matches) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W = canvas.clientWidth || 380, H = canvas.clientHeight || 420;

  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  } catch (e) { return; } // بيئة بلا WebGL → تجاوز بأمان
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(W, H, false);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
  camera.position.set(0, 0, 5.2);

  // ===== منحوتة الشعار (Brand Emblem Sculpture) =====
  // مستوحاة مباشرة من المونوغرام الدائري: قوس ذهبي سفلي + حلقة زجاج
  // كحلية + ميدالية تحمل علامة AG الفعلية (نسيج من logo-icon.png)
  var gem = new THREE.Group();

  // 1) القوس الذهبي السفلي — توقيع الشعار (ذهب سائل بتدرج فاتح/غامق)
  var arcGeo = new THREE.TorusGeometry(1.42, 0.17, 28, 72, Math.PI);
  var goldMat = new THREE.MeshPhongMaterial({
    color: 0xE8C468, specular: 0xFFF2CC, shininess: 100,
    emissive: 0x2a1f08, emissiveIntensity: 0.5
  });
  var arc = new THREE.Mesh(arcGeo, goldMat);
  arc.rotation.z = Math.PI; // الفتحة للأعلى كما في الشعار
  gem.add(arc);

  // 2) حلقة زجاج كحلية كاملة خلف القوس (عمق أوبسيديان شفاف)
  var ringGeo = new THREE.TorusGeometry(1.42, 0.07, 20, 80);
  var navyGlass = new THREE.MeshPhongMaterial({
    color: 0x141E36, specular: 0x6C8CFF, shininess: 70,
    transparent: true, opacity: 0.55
  });
  var ring = new THREE.Mesh(ringGeo, navyGlass);
  ring.position.z = -0.12;
  gem.add(ring);

  // 3) الميدالية: علامة AG الحقيقية كنسيج على قرص عائم داخل الحلقة
  var texLoader = new THREE.TextureLoader();
  texLoader.load('logo-icon.png', function (tex) {
    var plane = new THREE.Mesh(
      new THREE.PlaneGeometry(1.9, 1.74), // نسبة 180:165 الأصلية
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide })
    );
    plane.position.z = 0.05;
    gem.add(plane);
  });

  // 4) لمسة معدنية: قوس ذهبي غامق رفيع داخلي (Gold Dark #A17827)
  var innerArc = new THREE.Mesh(
    new THREE.TorusGeometry(1.18, 0.045, 16, 60, Math.PI),
    new THREE.MeshPhongMaterial({ color: 0xA17827, specular: 0xE8C468, shininess: 80 })
  );
  innerArc.rotation.z = Math.PI;
  innerArc.position.z = -0.06;
  gem.add(innerArc);

  scene.add(gem);

  // إضاءة: محيط كحلي بارد + مفتاح ذهبي دافئ + حافة زرقاء
  scene.add(new THREE.AmbientLight(0x223055, 0.9));
  var key = new THREE.PointLight(0xFFE6A8, 1.5); key.position.set(3, 3, 4); scene.add(key);
  var rim = new THREE.PointLight(0x6C8CFF, 0.5); rim.position.set(-4, -2, 2); scene.add(rim);

  // تتبّع المؤشر → زوايا هدف مخمّدة
  var targetRX = 0, targetRY = 0;
  window.addEventListener('mousemove', function (e) {
    targetRY = (e.clientX / window.innerWidth - 0.5) * 1.2;   // ±0.6 راديان
    targetRX = (e.clientY / window.innerHeight - 0.5) * 1.2;
  }, { passive: true });

  function resize() {
    W = canvas.clientWidth || 380; H = canvas.clientHeight || 420;
    renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);

  var running = true;
  document.addEventListener('visibilitychange', function () {
    running = !document.hidden; if (running) loop();
  });

  var t = 0;
  function loop() {
    if (!running) return;
    requestAnimationFrame(loop);
    t += 0.016;
    // تخميد lerp نحو زاوية المؤشر (استجابة سائلة)
    gem.rotation.x += (targetRX - gem.rotation.x) * 0.05;
    gem.rotation.y += (targetRY - gem.rotation.y) * 0.05;
    if (!reduced) {
      gem.rotation.y += 0.0016;            // دوران خمولي لطيف
      gem.position.y = Math.sin(t * 0.6) * 0.12; // طفو صعودًا وهبوطًا
    }
    renderer.render(scene, camera);
  }
  loop();
}

/* ============================================================
   CUSTOM CURSOR — حلقة ذهبية تتبع المؤشر وتكبر عند التفاعل
   · مؤشر النظام يبقى ظاهرًا (سلامة الاستخدام)؛ الحلقة تُضاف فوقه
   · تتبّع بتخميد lerp، وتكبير عند المرور على العناصر التفاعلية
   · مُعطّلة كليًا على اللمس (عبر CSS + حارس finePointer)
   ============================================================ */
function initCursorRing() {
  var ring = document.querySelector('.cursor-ring');
  if (!ring) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  var mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my, raf = null;
  function tick() {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18; // تتبّع متأخر حريري
    ring.style.transform = 'translate(' + rx.toFixed(1) + 'px,' + ry.toFixed(1) + 'px) translate(-50%,-50%)';
    if (Math.abs(mx - rx) > 0.1 || Math.abs(my - ry) > 0.1) raf = requestAnimationFrame(tick);
    else raf = null;
  }
  window.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    ring.classList.add('visible');
    if (!raf) raf = requestAnimationFrame(tick);
  }, { passive: true });
  document.addEventListener('mouseleave', function () { ring.classList.remove('visible'); });

  // تكبير الحلقة فوق كل عنصر تفاعلي
  var sel = 'a, button, .btn-primary, .btn-secondary, .service-card, .trainer-card, .whatsapp-float, .hamburger';
  document.querySelectorAll(sel).forEach(function (el) {
    el.addEventListener('mouseenter', function () { ring.classList.add('grow'); });
    el.addEventListener('mouseleave', function () { ring.classList.remove('grow'); });
  });
}

if (document.readyState !== 'loading') { initHeroFX(); }
document.addEventListener('DOMContentLoaded', initHeroFX);

// Auto-init if DOM already loaded
if (document.readyState !== 'loading') {
  initScript();
}
