// ===== THE LEADERS. Main Script =====

function initScript() {
  // ===== PRELOADER =====
  var preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(function() { preloader.classList.add('hidden'); }, 1200);
  }

  // ===== NAVBAR SCROLL =====
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ===== HAMBURGER =====
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // ===== SCROLL REVEAL =====
  var revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function(el) { observer.observe(el); });
  }

  // ===== 3D TILT ON SERVICE CARDS =====
  document.querySelectorAll('.service-card').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var rotateX = (y - centerY) / 20;
      var rotateY = (centerX - x) / 20;
      card.style.transform = 'translateY(-8px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
    });
  });
}

// ===== HERO FX: جسيمات ذهبية + بارالاكس (تحترم تقليل الحركة) =====
function initHeroFX() {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canvas = document.getElementById('heroParticles');
  if (canvas && !reduced) {
    var ctx = canvas.getContext('2d');
    var hero = canvas.parentElement;
    var particles = [];
    var COUNT = window.innerWidth < 768 ? 25 : 55;
    function resize() { canvas.width = hero.offsetWidth; canvas.height = hero.offsetHeight; }
    resize();
    window.addEventListener('resize', resize);
    for (var i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.6,
        s: Math.random() * 0.35 + 0.1,
        o: Math.random() * 0.5 + 0.15,
        drift: (Math.random() - 0.5) * 0.15
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
  // بارالاكس خفيف على الوترمارك والأيقونة ثلاثية الأبعاد
  var wm = document.querySelector('.hero-watermark');
  if (wm && !reduced) {
    window.addEventListener('scroll', function() {
      wm.style.transform = 'translateY(' + (window.scrollY * 0.18) + 'px) rotate(' + (window.scrollY * 0.01) + 'deg)';
    }, { passive: true });
  }
}
if (document.readyState !== 'loading') { initHeroFX(); }
document.addEventListener('DOMContentLoaded', initHeroFX);

// Auto-init if DOM already loaded
if (document.readyState !== 'loading') {
  initScript();
}
