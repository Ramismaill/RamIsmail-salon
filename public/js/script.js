document.addEventListener('DOMContentLoaded', () => {

  /* --- 1. HEADER SCROLL EFFECT --- */
  const header = document.querySelector('.main-header');
  const handleScroll = () => {
    if (window.scrollY > 100) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Check on load

  /* --- 2. REVEAL ANIMATIONS --- */
  const revealTargets = document.querySelectorAll(
    '#hero .hero-content, .padded-section, .gallery-item, .service-item, #contact .section-title, .site-footer'
  );

  const obsOptions = {
    root: null,
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.06,
  };

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('data-reveal', '');
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, obsOptions);

  revealTargets.forEach(el => {
    el.setAttribute('data-reveal', '');
    revealObserver.observe(el);
  });

  /* Hero intro animation delay */
  const heroTitle = document.querySelector('#hero h2');
  const heroPara = document.querySelector('#hero p');
  if (heroTitle) setTimeout(() => heroTitle.classList.add('revealed'), 220);
  if (heroPara) setTimeout(() => heroPara.classList.add('revealed'), 420);

  /* --- 3. FLY MENU LOGIC --- */
  const flyToggle = document.getElementById('flyToggle');
  const flyMenu = document.getElementById('flyMenu');
  const flyOverlay = document.getElementById('flyOverlay');

  function toggleFlyMenu() {
    if (flyToggle && flyMenu && flyOverlay) {
      flyToggle.classList.toggle('active');
      flyMenu.classList.toggle('active');
      flyOverlay.classList.toggle('active');

      // Prevent scrolling when menu is open
      if (flyMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }

  // Global function to close menu (used by links)
  window.closeMenu = function () {
    if (flyMenu && flyMenu.classList.contains('active')) {
      toggleFlyMenu();
    }
  };

  if (flyToggle) flyToggle.addEventListener('click', toggleFlyMenu);
  if (flyOverlay) flyOverlay.addEventListener('click', toggleFlyMenu);


  // Status Logic
  function updateSalonStatus() {
    const now = new Date();
    const hour = now.getHours();
    const statusEl = document.getElementById('flyStatus');

    if (statusEl) {
      if (hour >= 9 && hour < 20) {
        statusEl.innerHTML = '<span style="color: #bfa37a">●</span> WE ARE OPEN UNTIL 20:00';
      } else {
        statusEl.innerHTML = '<span style="color: #666">○</span> CLOSED - OPENS AT 09:00';
      }
    }
  }
  updateSalonStatus();

  /* --- 4. LANGUAGE SWITCHING --- */
  const translations = {
    en: {
      menu: 'Menu',
      home: 'Home',
      about: 'About Us',
      services: 'Our Services',
      gallery: 'Gallery',
      contact: 'Contact',
      book: 'Book Appointment',
      aboutTitle: 'About Us',
      aboutText: 'At The Peninsula Hair Salon, we believe every woman deserves to feel beautiful, confident, and unique. Our expert stylists blend creativity and precision to deliver elegant, natural results tailored to your personal style.',
      servicesTitle: 'Our Services',
      galleryTitle: 'Gallery',
      contactTitle: 'Contact Us',
      contactText: 'Visit us at <strong>The Peninsula Istanbul Hotel</strong><br>or message us directly for appointments.',
      chatWhatsapp: 'Chat on WhatsApp',
      bookNow: 'BOOK ONLINE NOW',
      heroTitle: 'Where Beauty Meets Elegance',
      heroSubtitle: 'Curated design solutions for healthy, natural, and timeless style.',
      openStatus: '● WE ARE OPEN UNTIL 20:00',
      closedStatus: '○ CLOSED - OPENS AT 09:00',
      copyright: '© 2026 Derviş Taş Hair Dresser. All rights reserved.',
      moreDetails: 'More Details'
    },
    tr: {
      menu: 'Menü',
      home: 'Anasayfa',
      about: 'Hakkımızda',
      services: 'Hizmetlerimiz',
      gallery: 'Galeri',
      contact: 'İletişim',
      book: 'Randevu Al',
      aboutTitle: 'Hakkımızda',
      aboutText: 'The Peninsula Hair Salon\'da, her kadının güzel, özgüvenli ve benzersiz hissetmesi gerektiğine inanıyoruz. Uzman stilistlerimiz yaratıcılık ve hassasiyeti birleştirerek kişisel stilinize göre uyarlanmış zarif, doğal sonuçlar sunuyoruz.',
      servicesTitle: 'Hizmetlerimiz',
      galleryTitle: 'Galeri',
      contactTitle: 'İletişim',
      contactText: '<strong>The Peninsula Istanbul Hotel</strong>\'de bizi ziyaret edin<br>veya randevu için doğrudan mesaj atın.',
      chatWhatsapp: 'WhatsApp\'ta Sohbet Et',
      bookNow: 'ÇEVRİMÇİ RANDEVU AL',
      heroTitle: 'Güzellik ile Zarafet Buluşur',
      heroSubtitle: 'Sağlıklı, doğal ve zamansız stil için özel tasarım çözümleri.',
      openStatus: '● 20:00 KADAR AÇIK',
      closedStatus: '○ KAPALI - 09:00 AÇILIR',
      copyright: '© 2026 Derviş Taş Hair Dresser. Tüm hakları saklıdır.',
      moreDetails: 'Daha Fazla Bilgi'
    },
    ar: {
      menu: 'القائمة',
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      gallery: 'معرض الصور',
      contact: 'اتصل بنا',
      book: 'احجز موعد',
      aboutTitle: 'من نحن',
      aboutText: 'في The Peninsula Hair Salon، نؤمن بأن كل امرأة تستحق أن تشعر بالجمال والثقة والتفرد. يجمع خبرائنا من مصممي الشعر بين الإبداع والدقة لتقديم نتائج أنيقة وطبيعية مخصصة لأسلوبك الشخصي.',
      servicesTitle: 'خدماتنا',
      galleryTitle: 'معرض الصور',
      contactTitle: 'اتصل بنا',
      contactText: 'زرنا في <strong>فندق The Peninsula Istanbul</strong><br>أو تواصل معنا مباشرة لحجز موعد.',
      chatWhatsapp: 'دردشة على WhatsApp',
      bookNow: 'احجز اون لاين الآن',
      heroTitle: 'حيث يلتقي الجمال بالأناقة',
      heroSubtitle: 'حلول تصميم مخصصة للأسلوب الصحي والطبيعي والخالد.',
      openStatus: '● مفتوح حتى 20:00',
      closedStatus: '○ مغلق - يفتح في 09:00',
      copyright: '© 2026 Derviş Taş Hair Dresser. جميع الحقوق محفوظة.',
      moreDetails: 'مزيد من التفاصيل'
    }
  };

  // Use saved language from localStorage (set by translations.js)
  let currentLanguage = localStorage.getItem('salonLanguage') || 'en';

  function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('salonLanguage', lang);

    // Update nav trigger label
    const navLabel = document.querySelector('.nav-label');
    if (navLabel) navLabel.textContent = translations[lang]['menu'];

    // Update nav links
    const navLinks = document.querySelectorAll('.fly-nav-links a');
    const navLinkKeys = ['home', 'about', 'services', 'gallery', 'contact'];
    navLinks.forEach((link, idx) => {
      if (translations[lang][navLinkKeys[idx]]) {
        link.textContent = translations[lang][navLinkKeys[idx]];
      }
    });

    // Update buttons
    const bookBtn = document.querySelector('.fly-btn.gold');
    if (bookBtn) bookBtn.textContent = translations[lang]['book'];

    // Update page content
    const heroTitle = document.querySelector('#hero h2');
    if (heroTitle) heroTitle.textContent = translations[lang]['heroTitle'];

    const heroSubtitle = document.querySelector('#hero p');
    if (heroSubtitle) heroSubtitle.textContent = translations[lang]['heroSubtitle'];

    const heroBtn = document.querySelector('#hero .cta-button');
    if (heroBtn) heroBtn.textContent = translations[lang]['bookNow'];

    const aboutTitle = document.querySelector('#about .section-title');
    if (aboutTitle) aboutTitle.textContent = translations[lang]['aboutTitle'];

    const aboutText = document.querySelector('.about-text');
    if (aboutText) aboutText.textContent = translations[lang]['aboutText'];

    const servicesTitle = document.querySelector('#services .section-title');
    if (servicesTitle) servicesTitle.textContent = translations[lang]['servicesTitle'];

    const galleryTitle = document.querySelector('#gallery .section-title');
    if (galleryTitle) galleryTitle.textContent = translations[lang]['galleryTitle'];

    const contactTitle = document.querySelector('#contact .section-title');
    if (contactTitle) contactTitle.textContent = translations[lang]['contactTitle'];

    const contactText = document.querySelector('.contact-text');
    if (contactText) contactText.innerHTML = translations[lang]['contactText'];

    const readMoreBtn = document.querySelector('.about-cta a');
    if (readMoreBtn) readMoreBtn.textContent = translations[lang]['moreDetails'];

    const contactBtn = document.querySelector('.whatsapp-button');
    if (contactBtn) contactBtn.textContent = translations[lang]['chatWhatsapp'];

    // Update footer links
    const footerLinks = document.querySelectorAll('.footer-links a');
    const footerLinkKeys = ['home', 'about', 'services', 'gallery', 'contact'];
    footerLinks.forEach((link, idx) => {
      if (translations[lang][footerLinkKeys[idx]]) {
        link.textContent = translations[lang][footerLinkKeys[idx]];
      }
    });

    const footerCopyright = document.querySelector('.site-footer p');
    if (footerCopyright) footerCopyright.textContent = translations[lang]['copyright'];

    // Update See More button
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    if (seeMoreBtn) {
      const seeMoreText = lang === 'en' ? 'See More' : lang === 'tr' ? 'Daha Fazla' : 'المزيد';
      seeMoreBtn.innerHTML = `${seeMoreText} <span class="btn-arrow">→</span>`;
    }

    // Update View All Prices button
    const viewAllBtn = document.querySelector('.services-view-all-btn a');
    if (viewAllBtn) {
      const btnText = lang === 'en' ? 'View All Prices' : lang === 'tr' ? 'Tüm Fiyatları Gör' : 'عرض جميع الأسعار';
      viewAllBtn.textContent = btnText;
    }

    // Update status
    updateSalonStatus();

    // Update language toggle active state
    const langToggles = document.querySelectorAll('.lang-toggle span');
    langToggles.forEach(span => {
      span.classList.remove('active');
      if (span.textContent === lang.toUpperCase()) {
        span.classList.add('active');
      }
    });
  }

  // Language toggle click handlers
  const langToggles = document.querySelectorAll('.lang-toggle span');
  langToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const lang = toggle.textContent.toLowerCase();
      changeLanguage(lang);
    });
  });

  // Set initial language (use saved preference)
  changeLanguage(currentLanguage);

  /* --- 5. LOAD SERVICES --- */
  const loadServices = async () => {
    const servicesList = document.querySelector('.services-list');
    if (!servicesList) return;

    // Remove any existing "View All Prices" button to prevent duplicates
    const existingBtn = servicesList.parentElement.querySelector('.services-view-all-btn');
    if (existingBtn) existingBtn.remove();

    function displayServices(lang) {
      // Hardcoded specific services as requested
      const specificServices = [
        { name_en: 'Hair Cut', name_tr: 'Saç Kesim', name_ar: 'قص الشعر', price_euro: 135 },
        { name_en: 'Blow-Dry', name_tr: 'Fön', name_ar: 'تجفيف بالهواء الساخن', price_euro: 70 },
        { name_en: 'Manicure', name_tr: 'Manikür', name_ar: 'مانيكير', price_euro: 70 },
        { name_en: 'Nail Extension', name_tr: 'Protez Tırnak', name_ar: 'تركيب أظافر', price_euro: 300 },
        { name_en: 'Daily Make Up', name_tr: 'Günlük Makyaj', name_ar: 'مكياج يومي', price_euro: 110 },
        { name_en: 'Collagen Treatment', name_tr: 'Kolajen Bakımı', name_ar: 'علاج بالكولاجين', price_euro: 300 }
      ];

      servicesList.innerHTML = '';
      specificServices.forEach(service => {
        const nameKey = `name_${lang}`;
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        // Use english name as fallback
        const serviceName = service[nameKey] || service.name_en;

        serviceItem.innerHTML = `<h3>${serviceName}</h3><span class="price-tag">€${service.price_euro}</span>`;
        serviceItem.setAttribute('data-reveal', '');
        servicesList.appendChild(serviceItem);
      });

      // Add "View All Prices" button
      const viewAllBtn = document.createElement('div');
      viewAllBtn.className = 'services-view-all-btn';
      viewAllBtn.style.textAlign = 'center';
      viewAllBtn.style.marginTop = '40px';
      const btnText = lang === 'en' ? 'View All Prices' : lang === 'tr' ? 'Tüm Fiyatları Gör' : 'عرض جميع الأسعار';
      viewAllBtn.innerHTML = `<a href="prices.html" class="cta-button" style="display: inline-block;">${btnText}</a>`;
      servicesList.parentElement.appendChild(viewAllBtn);
    }

    // Call display services immediately with current language
    displayServices(currentLanguage);

    // We no longer fetch from API for the main page display to ensure exactly these 4 are shown
    /*
    try {
      const response = await fetch('/api/services?featured=true');
      ...
    } catch (error) { ... }
    */
  };
  loadServices();
});