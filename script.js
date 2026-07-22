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

// Auto-init if DOM already loaded
if (document.readyState !== 'loading') {
  initScript();
}
