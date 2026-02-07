// translations.js - Shared Translation System
// This file provides multi-language support across all pages

const translations = {
    en: {
        // Navigation
        menu: 'Menu',
        home: 'Home',
        about: 'About Us',
        services: 'Our Services',
        gallery: 'Gallery',
        contact: 'Contact',
        backHome: 'Back Home',

        // Buttons
        book: 'Book Appointment',
        bookNow: 'Book Now',
        bookOnline: 'BOOK ONLINE NOW',
        viewPrices: 'View Price List',
        seeMore: 'See More',
        readMore: 'Read More',
        moreDetails: 'More Details',

        // Index Page
        heroTitle: 'Where Beauty Meets Elegance',
        heroSubtitle: 'Curated design solutions for healthy, natural, and timeless style.',
        aboutTitle: 'About Us',
        aboutText: 'At Derviş Taş Hair Dresser, we believe every woman deserves to feel beautiful, confident, and unique. Our expert stylists blend creativity and precision to deliver elegant, natural results tailored to your personal style.',
        servicesTitle: 'Our Services',
        galleryTitle: 'Gallery',
        contactTitle: 'Contact Us',
        contactText: 'Visit us at <strong>Derviş Taş Hair Dresser</strong><br>or message us directly for appointments.',
        chatWhatsapp: 'Chat on WhatsApp',

        // About Page Detailed
        aboutFullTitle: 'A Legacy of Elegance',
        aboutFullText: 'Founded by the visionary stylist Derviş Taş, our salon has become a sanctuary for those seeking a blend of classic sophistication and modern artistry. Located within the prestigious Peninsula Istanbul Hotel, we offer an experience that transcends traditional hair styling.',
        expertiseTitle: 'Our World-Class Expertise',
        expertiseText: 'From signature balayage techniques to precision cutting, our team stays at the forefront of global hair trends. We exclusive use premium products to ensure your hair remains healthy, vibrant, and timeless.',
        philosophyTitle: 'The Art of Natural Beauty',
        philosophyText: 'We believe that true beauty lies in individuality. Our philosophy is rooted in enhancing your natural features, creating looks that are not only stunning but also effortlessly wearable.',

        // Gallery Page
        galleryPageTitle: 'Our Gallery',
        galleryPageSubtitle: 'Discover the artistry and elegance of our hair transformations',
        filterAll: 'All',
        filterStyling: 'Hair Styling',
        filterColor: 'Color',
        filterVideos: 'Videos',
        readyTransform: 'Ready for Your Transformation?',
        readyTransformText: 'Book your appointment today and let our expert stylists create your perfect look.',

        // Booking Page
        bookingTitle: 'Request Your Perfect Appointment',
        bookingSubtitle: "Tell us what you're looking for, and we'll confirm your preferred time via phone or email",
        guestInfo: 'Guest Information',
        guestQuestion: 'Are you currently a hotel guest?',
        yes: 'Yes',
        no: 'No',
        nameLabel: 'Name & Surname (English)',
        emailLabel: 'Email Address',
        roomLabel: 'Room Number (4 Digits)',
        phoneLabel: 'Phone Number',
        dateTime: 'Date & Time',
        preferredDate: 'Preferred Date',
        preferredTime: 'Preferred Time',
        selectServices: 'Select Services',
        browseServices: 'Browse Services',
        searchServices: 'Search (e.g. Balayage, Manicure...)',
        requestAppointment: 'Request Appointment',

        // Status
        openStatus: '● WE ARE OPEN UNTIL 20:00',
        closedStatus: '○ CLOSED - OPENS AT 09:00',

        // Footer
        copyright: '© 2026 Derviş Taş Hair Dresser. All rights reserved.'
    },
    tr: {
        // Navigation
        menu: 'Menü',
        home: 'Anasayfa',
        about: 'Hakkımızda',
        services: 'Hizmetlerimiz',
        gallery: 'Galeri',
        contact: 'İletişim',
        backHome: 'Geri Dön',

        // Buttons
        book: 'Randevu Al',
        bookNow: 'Randevu Al',
        bookOnline: 'ÇEVRİMİÇİ RANDEVU AL',
        viewPrices: 'Fiyat Listesi',
        seeMore: 'Daha Fazla',
        readMore: 'Devamını Oku',
        moreDetails: 'Daha Fazla Bilgi',

        // Index Page
        heroTitle: 'Güzellik ile Zarafet Buluşur',
        heroSubtitle: 'Sağlıklı, doğal ve zamansız stil için özel tasarım çözümleri.',
        aboutTitle: 'Hakkımızda',
        aboutText: "Derviş Taş Hair Dresser'da, her kadının güzel, özgüvenli ve benzersiz hissetmesi gerektiğine inanıyoruz. Uzman stilistlerimiz yaratıcılık ve hassasiyeti birleştirerek kişisel stilinize göre uyarlanmış zarif, doğal sonuçlar sunuyoruz.",
        servicesTitle: 'Hizmetlerimiz',
        galleryTitle: 'Galeri',
        contactTitle: 'İletişim',
        contactText: '<strong>Derviş Taş Hair Dresser</strong>\'de bizi ziyaret edin<br>veya randevu için doğrudan mesaj atın.',
        chatWhatsapp: "WhatsApp'ta Sohbet Et",

        // About Page Detailed
        aboutFullTitle: 'Zarafetin Mirası',
        aboutFullText: 'Vizyoner stilist Derviş Taş tarafından kurulan salonumuz, klasik sofistikasyon ile modern sanatın birleşimini arayanlar için bir sığınak haline gelmiştir. Prestijli The Peninsula Istanbul Hotel bünyesinde, geleneksel saç tasarımının ötesinde bir deneyim sunuyoruz.',
        expertiseTitle: 'Dünya Standartlarında Uzmanlığımız',
        expertiseText: 'İmza balayage tekniklerinden hassas kesimlere kadar ekibimiz, küresel saç trendlerinin ön saflarında yer almaktadır. Saçınızın sağlıklı, canlı ve zamansız kalmasını sağlamak için yalnızca seçkin premium ürünler kullanıyoruz.',
        philosophyTitle: 'Doğal Güzellik Sanatı',
        philosophyText: 'Gerçek güzelliğin bireysellikte yattığına inanıyoruz. Felsefemiz, doğal hatlarınızı vurgulayarak hem göz alıcı hem de zahmetsizce taşınabilir görünümler yaratmaya dayanmaktadır.',

        // Gallery Page
        galleryPageTitle: 'Galerimiz',
        galleryPageSubtitle: 'Saç dönüşümlerimizin sanatını ve zarafetini keşfedin',
        filterAll: 'Tümü',
        filterStyling: 'Saç Şekillendirme',
        filterColor: 'Renk',
        filterVideos: 'Videolar',
        readyTransform: 'Dönüşümünüz İçin Hazır mısınız?',
        readyTransformText: 'Bugün randevu alın ve uzman stilistlerimizin mükemmel görünümünüzü yaratmasına izin verin.',

        // Booking Page
        bookingTitle: 'Mükemmel Randevunuzu Talep Edin',
        bookingSubtitle: 'Ne aradığınızı bize söyleyin, tercih ettiğiniz zamanı telefon veya e-posta ile onaylayalım',
        guestInfo: 'Misafir Bilgileri',
        guestQuestion: 'Şu anda otel misafiri misiniz?',
        yes: 'Evet',
        no: 'Hayır',
        nameLabel: 'Ad & Soyad (İngilizce)',
        emailLabel: 'E-posta Adresi',
        roomLabel: 'Oda Numarası (4 Hane)',
        phoneLabel: 'Telefon Numarası',
        dateTime: 'Tarih & Saat',
        preferredDate: 'Tercih Edilen Tarih',
        preferredTime: 'Tercih Edilen Saat',
        selectServices: 'Hizmet Seçin',
        browseServices: 'Hizmetlere Göz At',
        searchServices: 'Ara (örn. Balayage, Manikür...)',
        requestAppointment: 'Randevu Talep Et',

        // Status
        openStatus: '● 20:00 KADAR AÇIK',
        closedStatus: '○ KAPALI - 09:00 AÇILIR',

        // Footer
        copyright: '© 2026 Derviş Taş Hair Dresser. Tüm hakları saklıdır.'
    },
    ar: {
        // Navigation
        menu: 'القائمة',
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        gallery: 'معرض الصور',
        contact: 'اتصل بنا',
        backHome: 'العودة',

        // Buttons
        book: 'احجز موعد',
        bookNow: 'احجز الآن',
        bookOnline: 'احجز اون لاين الآن',
        viewPrices: 'قائمة الأسعار',
        seeMore: 'المزيد',
        readMore: 'اقرأ المزيد',
        moreDetails: 'مزيد من التفاصيل',

        // Index Page
        heroTitle: 'حيث يلتقي الجمال بالأناقة',
        heroSubtitle: 'حلول تصميم مخصصة للأسلوب الصحي والطبيعي والخالد.',
        aboutTitle: 'من نحن',
        aboutText: 'في Derviş Taş Hair Dresser، نؤمن بأن كل امرأة تستحق أن تشعر بالجمال والثقة والتفرد. يجمع خبرائنا من مصممي الشعر بين الإبداع والدقة لتقديم نتائج أنيقة وطبيعية مخصصة لأسلوبك الشخصي.',
        servicesTitle: 'خدماتنا',
        galleryTitle: 'معرض الصور',
        contactTitle: 'اتصل بنا',
        contactText: 'زرنا في <strong>Derviş Taş Hair Dresser</strong><br>أو تواصل معنا مباشرة لحجز موعد.',
        chatWhatsapp: 'دردشة على WhatsApp',

        // About Page Detailed
        aboutFullTitle: 'إرث من الأناقة',
        aboutFullText: 'تأسس صالوننا على يد خبير التجميل درويش تاش، وأصبح ملاذاً للباحثين عن مزيج من الرقي الكلاسيكي والفن الحديث. يقع الصالون في فندق ذا بنينسولا إسطنبول المرموق، ونقدم تجربة تتجاوز تصفيف الشعر التقليدي.',
        expertiseTitle: 'خبرتنا العالمية',
        expertiseText: 'من تقنيات البالاج المميزة إلى القص الدقيق، يظل فريقنا في طليعة اتجاهات الشعر العالمية. نستخدم حصرياً منتجات فاخرة لضمان بقاء شعرك صحياً وحيوياً وخالداً.',
        philosophyTitle: 'فن الجمال الطبيعي',
        philosophyText: 'نؤمن بأن الجمال الحقيقي يكمن في التفرد. تتجذر فلسفتنا في تعزيز ميزاتك الطبيعية، وخلق إطلالات ليست مذهلة فحسب، بل سهلة التألق بها أيضاً.',

        // Gallery Page
        galleryPageTitle: 'معرض الصور',
        galleryPageSubtitle: 'اكتشف فن وأناقة تحولات الشعر لدينا',
        filterAll: 'الكل',
        filterStyling: 'تصفيف الشعر',
        filterColor: 'الألوان',
        filterVideos: 'فيديوهات',
        readyTransform: 'هل أنت مستعد للتحول؟',
        readyTransformText: 'احجز موعدك اليوم ودع خبراء التصفيف لدينا يخلقون مظهرك المثالي.',

        // Booking Page
        bookingTitle: 'اطلب موعدك المثالي',
        bookingSubtitle: 'أخبرنا بما تبحث عنه، وسنؤكد وقتك المفضل عبر الهاتف أو البريد الإلكتروني',
        guestInfo: 'معلومات الضيف',
        guestQuestion: 'هل أنت حاليًا ضيف في الفندق؟',
        yes: 'نعم',
        no: 'لا',
        nameLabel: 'الاسم واللقب (بالإنجليزية)',
        emailLabel: 'عنوان البريد الإلكتروني',
        roomLabel: 'رقم الغرفة (4 أرقام)',
        phoneLabel: 'رقم الهاتف',
        dateTime: 'التاريخ والوقت',
        preferredDate: 'التاريخ المفضل',
        preferredTime: 'الوقت المفضل',
        selectServices: 'اختر الخدمات',
        browseServices: 'تصفح الخدمات',
        searchServices: 'بحث (مثل: بالاياج، مانيكير...)',
        requestAppointment: 'طلب موعد',

        // Status
        openStatus: '● مفتوح حتى 20:00',
        closedStatus: '○ مغلق - يفتح في 09:00',

        // Footer
        copyright: '© 2026 Derviş Taş Hair Dresser. جميع الحقوق محفوظة.'
    }
};

// Get saved language or default to English
let currentLanguage = localStorage.getItem('salonLanguage') || 'en';

// Translation function
function t(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

// Change language and save preference
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('salonLanguage', lang);

    // Set RTL for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }

    // Update language toggle active state
    document.querySelectorAll('.lang-toggle span').forEach(span => {
        span.classList.remove('active');
        if (span.textContent === lang.toUpperCase()) {
            span.classList.add('active');
        }
    });

    // Dispatch event for page-specific updates
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Apply translations to common elements found on all pages
function applyCommonTranslations() {
    // Back Home button
    const backBtn = document.querySelector('.return-text');
    if (backBtn) backBtn.textContent = t('backHome');

    // Footer links
    const footerLinks = document.querySelectorAll('.footer-links a');
    const footerKeys = ['home', 'about', 'services', 'gallery', 'contact'];
    footerLinks.forEach((link, idx) => {
        if (footerKeys[idx]) link.textContent = t(footerKeys[idx]);
    });

    // Footer copyright
    const copyright = document.querySelector('.site-footer > p');
    if (copyright) copyright.textContent = t('copyright');
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved language
    changeLanguage(currentLanguage);
    applyCommonTranslations();

    // Add click handlers for language toggles
    document.querySelectorAll('.lang-toggle span').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const lang = toggle.textContent.toLowerCase();
            changeLanguage(lang);
            applyCommonTranslations();
        });
    });
});
