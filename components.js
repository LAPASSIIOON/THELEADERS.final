// ===== المكونات المشتركة =====

function getNavbar(activePage) {
  const pages = [
    { id: 'home', label: 'الرئيسية', href: 'index.html' },
    { id: 'about', label: 'عن المعهد', href: 'about.html' },
    { id: 'courses', label: 'الدورات', href: 'courses.html' },
    { id: 'trainers', label: 'المدربون', href: 'trainers.html' },
    { id: 'chairman', label: 'كلمة رئيس المجلس', href: 'chairman.html' },
    { id: 'contact', label: 'تواصل معنا', href: 'contact.html' }
  ];

  const linksHTML = pages.map(p => {
    const isActive = p.id === activePage ? ' active' : '';
    return `<li><a href="${p.href}" class="${isActive}">${p.label}</a></li>`;
  }).join('');

  return `
  <div class="preloader" id="preloader">
    <div class="preloader-logo">${SITE.nameEn}</div>
    <div class="preloader-tagline">${SITE.tagline}</div>
    <div class="preloader-bar"></div>
  </div>
  <nav class="navbar" id="navbar">
    <div class="container">
      <a href="index.html" class="nav-logo">
        <img src="${SITE.logo}" alt="${SITE.nameEn}" />
        <span class="nav-logo-text">
          <span class="en">THE LEADERS</span>
          <span class="ar">${SITE.nameAr}</span>
        </span>
      </a>
      <ul class="nav-links" id="navLinks">
        ${linksHTML}
      </ul>
      <div class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>`;
}

function getFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="${SITE.logo}" alt="${SITE.nameAr}" />
            <span class="nav-logo-text">
              <span class="en">THE LEADERS</span>
              <span class="ar">${SITE.nameAr}</span>
            </span>
          </div>
          <p>${SITE.nameAr} — ${SITE.tagline}</p>
          <div class="footer-accreditation">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>${SITE.accreditation.line}</span>
          </div>
        </div>
        <div class="footer-col">
          <h4>روابط سريعة</h4>
          <ul>
            <li><a href="index.html">الرئيسية</a></li>
            <li><a href="about.html">عن المعهد</a></li>
            <li><a href="courses.html">الدورات</a></li>
            <li><a href="trainers.html">المدربون</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>المسارات التدريبية</h4>
          <ul>
            ${TRACKS.map(t => '<li><a href="course-detail.html?id=' + t.id + '">' + t.title + '</a></li>').join('')}
            <li><a href="chairman.html">كلمة رئيس المجلس</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>تواصل معنا</h4>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${SITE.contact.address}</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>${SITE.contact.email}</span>
          </div>
          ${SITE.contact.phone ? `
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>${SITE.contact.phone}</span>
          </div>` : ''}
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} ${SITE.nameEn}. جميع الحقوق محفوظة.</p>
        <div class="footer-socials">
          ${SITE.social.instagram ? `<a href="${SITE.social.instagram}" aria-label="Instagram" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>` : ''}
          ${SITE.social.linkedin ? `<a href="${SITE.social.linkedin}" aria-label="LinkedIn" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>` : ''}
          ${SITE.social.twitter ? `<a href="${SITE.social.twitter}" aria-label="Twitter" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>` : ''}
        </div>
      </div>
    </div>
  </footer>`;
}

function getWhatsAppButton() {
  if (!SITE.contact.whatsapp) return '';
  return `
  <a href="https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(SITE.contact.whatsappMessage)}" class="whatsapp-float" id="whatsappFloat" target="_blank" rel="noopener" aria-label="تواصل عبر واتساب">
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>`;
}
