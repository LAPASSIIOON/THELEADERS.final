// ===== المكونات المشتركة =====

function getNavbar(activePage) {
  const pages = [
    { id: 'home', label: 'الرئيسية', href: 'index.html' },
    { id: 'about', label: 'عن المعهد', href: 'about.html' },
    { id: 'courses', label: 'الدورات', href: 'courses.html' },
    { id: 'trainers', label: 'المدربون', href: 'trainers.html' },
    { id: 'chairman', label: 'كلمة رئيس مجلس الإدارة', href: 'chairman.html' },
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
            <li><a href="chairman.html">كلمة رئيس مجلس الإدارة</a></li>
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

/* ============================================================
   1) اللقاءات والتغطيات الإعلامية — Media Coverage
   ------------------------------------------------------------
   لإضافة لقاء حقيقي: ضع عنصرًا في MEDIA_ITEMS بالشكل التالي
   (يكفي معرّف فيديو يوتيوب — الصورة المصغّرة تُجلب تلقائيًا):

   { badge: 'تلفزيون الكويت',
     title: 'عنوان اللقاء',
     desc:  'وصف مختصر للقاء أو التغطية.',
     youtubeId: 'XXXXXXXXXXX' }

   وإن كانت التغطية صحفية بلا فيديو، استخدم link بدل youtubeId:
   { badge: 'تغطية صحفية', title: '...', desc: '...',
     link: 'https://...', thumb: 'media/cover1.jpg' }

   ما دامت المصفوفة فارغة تُعرض بطاقات "قريبًا" — بلا أي ادعاء غير موثّق.
   ============================================================ */
const MEDIA_ITEMS = [
  { badge: 'من قاعات المعهد',
    title: 'جانب من إحدى الجلسات التدريبية',
    desc:  'لقطة من قاعة التدريب أثناء انعقاد إحدى الجلسات بحضور المشاركين.',
    image: 'media/training-hall.jpg' },

  { badge: 'صورة جماعية',
    title: 'المشاركون والقائمون على البرنامج',
    desc:  'صورة تجمع المشاركين وفريق المعهد على هامش أحد البرامج التدريبية.',
    image: 'media/group-photo.jpg' },

  { badge: 'ورشة تدريبية',
    title: 'لحظة من ورشة تفاعلية',
    desc:  'المدرّب أثناء تقديم إحدى الورش التدريبية التفاعلية داخل المعهد.',
    image: 'media/session-speaker.jpg' }
];

function getMediaSection() {
  var cards;

  if (MEDIA_ITEMS.length) {
    cards = MEDIA_ITEMS.map(function (m) {
      var thumb = m.image || m.thumb || (m.youtubeId
        ? 'https://img.youtube.com/vi/' + m.youtubeId + '/maxresdefault.jpg'
        : '');
      var esc = function (s) { return String(s || '').replace(/'/g, "\\'"); };
      var action = m.youtubeId
        ? 'onclick="openMediaModal(\'' + m.youtubeId + '\')"'
        : (m.image ? 'onclick="openMediaImage(\'' + esc(m.image) + '\',\'' + esc(m.title) + '\')"' : '');
      var media = m.youtubeId
        ? '<button class="media-play" type="button" ' + action + ' aria-label="تشغيل: ' + m.title + '">' +
            '<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M8 5v14l11-7z"/></svg>' +
          '</button>'
        : m.image
        ? '<button class="media-play" type="button" ' + action + ' aria-label="تكبير الصورة: ' + m.title + '">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="21" height="21"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>' +
          '</button>'
        : '<a class="media-play" href="' + (m.link || '#') + '" target="_blank" rel="noopener" aria-label="قراءة: ' + m.title + '">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
          '</a>';

      return '' +
      '<article class="media-card reveal">' +
        '<div class="media-thumb"' + (thumb ? ' style="background-image:url(\'' + thumb + '\')"' : '') + '>' +
          '<span class="media-badge">' + m.badge + '</span>' +
          '<div class="media-overlay">' + media + '</div>' +
        '</div>' +
        '<div class="media-body">' +
          '<h3 class="media-title">' + m.title + '</h3>' +
          '<p class="media-desc">' + m.desc + '</p>' +
          (m.youtubeId || m.image
            ? '<button class="media-link" type="button" ' + action + '>' + (m.youtubeId ? 'مشاهدة اللقاء' : 'عرض الصورة') +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><polyline points="15 18 9 12 15 6"/></svg></button>'
            : '<a class="media-link" href="' + (m.link || '#') + '" target="_blank" rel="noopener">فتح المصدر' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><polyline points="15 18 9 12 15 6"/></svg></a>') +
        '</div>' +
      '</article>';
    }).join('');
  } else {
    // حالة "قريبًا" — ثلاث بطاقات هيكلية بنفس التصميم دون محتوى مُفترض
    cards = [1, 2, 3].map(function () {
      return '' +
      '<article class="media-card media-card--empty reveal">' +
        '<div class="media-thumb">' +
          '<span class="media-badge">قريبًا</span>' +
          '<div class="media-overlay">' +
            '<span class="media-play media-play--idle" aria-hidden="true">' +
              '<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M8 5v14l11-7z"/></svg>' +
            '</span>' +
          '</div>' +
        '</div>' +
        '<div class="media-body">' +
          '<h3 class="media-title">يُضاف قريبًا</h3>' +
          '<p class="media-desc">تُنشر هنا لقاءات المعهد وقياداته وتغطياته الإعلامية فور توفّرها.</p>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  return `
  <section class="section media-section" id="media">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-tag">الإعلام</span>
        <h2 class="section-title">اللقاءات والتغطيات <span class="gold">الإعلامية</span></h2>
        <div class="section-line"></div>
        <p class="section-desc">مقتطفات من ظهور المعهد وقياداته في الوسائل الإعلامية والتلفزيونية</p>
      </div>
      <div class="media-grid">${cards}</div>
    </div>

    <!-- نافذة تشغيل الفيديو -->
    <div class="media-modal" id="mediaModal" role="dialog" aria-modal="true" aria-label="مشغّل الفيديو" onclick="if(event.target===this)closeMediaModal()">
      <div class="media-modal-inner">
        <button class="media-modal-close" type="button" onclick="closeMediaModal()" aria-label="إغلاق">&times;</button>
        <div class="media-modal-frame" id="mediaModalVideo">
          <iframe id="mediaModalFrame" src="" title="فيديو" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>
        <img class="media-modal-image" id="mediaModalImage" src="" alt="" />
      </div>
    </div>
  </section>`;
}

/* فتح/إغلاق نافذة الفيديو (youtube-nocookie لحماية الخصوصية) */
function openMediaModal(videoId) {
  var m = document.getElementById('mediaModal');
  var f = document.getElementById('mediaModalFrame');
  var v = document.getElementById('mediaModalVideo');
  var img = document.getElementById('mediaModalImage');
  if (!m || !f) return;
  if (img) { img.style.display = 'none'; img.src = ''; }
  if (v) v.style.display = '';
  f.src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0';
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* عرض صورة بالحجم الكامل داخل النافذة نفسها */
function openMediaImage(src, alt) {
  var m = document.getElementById('mediaModal');
  var v = document.getElementById('mediaModalVideo');
  var img = document.getElementById('mediaModalImage');
  if (!m || !img) return;
  if (v) v.style.display = 'none';
  img.src = src;
  img.alt = alt || '';
  img.style.display = 'block';
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMediaModal() {
  var m = document.getElementById('mediaModal');
  var f = document.getElementById('mediaModalFrame');
  if (!m) return;
  var img = document.getElementById('mediaModalImage');
  m.classList.remove('open');
  if (f) f.src = '';
  if (img) { img.src = ''; img.style.display = 'none'; }
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeMediaModal();
});

/* ============================================================
   2) الموقع والوصول — خريطة جوجل + رمز QR
   الإحداثيات ومعرّف المكان مأخوذان من رابط الخريطة الرسمي للمعهد
   ============================================================ */
const LOCATION = {
  lat: 29.3415005,
  lng: 48.0259086,
  shareUrl: 'https://maps.app.goo.gl/37E4Ru8BX2apz1dv7',
  get embedUrl() {
    return 'https://maps.google.com/maps?q=' + this.lat + ',' + this.lng +
           '&z=17&hl=ar&output=embed';
  },
  get qrUrl() {
    return 'https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=6' +
           '&color=141E36&bgcolor=F8F6EF&data=' + encodeURIComponent(this.shareUrl);
  }
};

function getLocationSuite() {
  return `
  <section class="section location-section" id="location">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-tag">الموقع</span>
        <h2 class="section-title">مقر <span class="gold">المعهد</span></h2>
        <div class="section-line"></div>
        <p class="section-desc">${SITE.contact.addressFull}</p>
      </div>

      <div class="location-grid">
        <!-- الخريطة -->
        <div class="location-map reveal">
          <div class="location-map-frame">
            <iframe src="${LOCATION.embedUrl}" title="موقع معهد القادة الدولية على خرائط جوجل"
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    allowfullscreen></iframe>
          </div>
          <a href="${LOCATION.shareUrl}" target="_blank" rel="noopener" class="btn-primary location-cta">
            افتح الموقع في خرائط جوجل
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

        <!-- بطاقة رمز QR -->
        <aside class="location-qr reveal">
          <div class="qr-frame">
            <img src="${LOCATION.qrUrl}" alt="رمز QR لموقع المعهد على خرائط جوجل" width="240" height="240" loading="lazy" />
          </div>
          <h3 class="qr-title">الوصول السريع</h3>
          <p class="qr-note">امسح الكود للوصول السريع إلى مقر المعهد عبر هاتفك</p>
          <div class="qr-address">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${SITE.contact.address}</span>
          </div>
        </aside>
      </div>
    </div>
  </section>`;
}
