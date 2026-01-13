// services-data.js
// Shared data for Booking and Price List pages

const servicesData = [
    {
        category: "HAIR STYLE - SAC KESIM & BOYAMA",
        items: [
            { name: "Hair Cut (Saç Kesim)", price: "135 €" },
            { name: "Owner Hair Cut (İşletmeci Saç Kesim)", price: "180 €" },
            { name: "Root Coloring - Ammonia (Dip Boya - Amonyaklı)", price: "135 ~ 180 €" },
            { name: "Root Coloring - Ammonia Free (Dip Boya - Amonyaksız)", price: "160 ~ 200 €" },
            { name: "Full Head Coloring - Ammonia (Tüm Saç Boya - Amonyaklı)", price: "240 ~ 280 €" },
            { name: "Full Head Coloring - Ammonia Free (Tüm Saç Boya - Amonyaksız)", price: "250 ~ 290 €" },
            { name: "Full Head Decoloration (Tüm Saç Renk Değişimi)", price: "440 ~ 530 €" },
            { name: "Root Decoloration & Colouring (Dip Açma & Boyama)", price: "370 ~ 440 €" },
            { name: "Foils Balayage - Refle (Balyaj - Röfle)", price: "430 ~ 590 €" },
            { name: "Free Light", price: "450 ~ 590 €" },
            { name: "Balayage", price: "450 ~ 590 €" },
            { name: "Pigmentation", price: "160 ~ 230 €" },
            { name: "Olaplex Addition (Olaplex İlavesi)", price: "190 ~ 230 €" }
        ]
    },
    {
        category: "STYLING - SEKILLENDIRME",
        items: [
            { name: "Blow-Dry (Fön)", price: "70 €" },
            { name: "Curling Iron (Maşa)", price: "110 €" },
            { name: "Bun (Topuz)", price: "110 ~ 140 €" },
            { name: "Bride's Hair In Salon (Gelin Saçı - Salonda)", price: "550 €" }
        ]
    },
    {
        category: "HAIR CARE - SAC BAKIMI",
        items: [
            { name: "Keratin Straightener (Keratin Düzleştirici)", price: "410 ~ 500 €" },
            { name: "Collagen Treatment (Kolajen Bakımı)", price: "270 ~ 320 €" },
            { name: "Keratin Treatment (Keratin Bakımı)", price: "230 ~ 270 €" },
            { name: "Botox Treatment (Botox Bakımı)", price: "250 ~ 300 €" },
            { name: "Olaplex Treatment (Olaplex Bakımı)", price: "180 ~ 200 €" },
            { name: "Daily Hair Care & Mask (Günlük Saç Bakımı)", price: "180 ~ 200 €" },
            { name: "Micro Welding - Pieces (Mikro Kaynak - Adet)", price: "10 ~ 12 €" }
        ]
    },
    {
        category: "NAIL SERVICES - TIRNAK SERVISLERI",
        items: [
            { name: "Manicure (Manikür)", price: "70 €" },
            { name: "Pedicure (Pedikür)", price: "80 €" },
            { name: "Gel Polish - Hand (El Kalıcı Oje)", price: "90 €" },
            { name: "Gel Polish - Foot (Ayak Kalıcı Oje)", price: "110 €" },
            { name: "Gel Polish Removing (Kalıcı Oje Çıkarma)", price: "70 €" },
            { name: "Nail Extension (Protez Tırnak)", price: "270 ~ 360 €" },
            { name: "Nail Extension Removing (Protez Tırnak Çıkarma)", price: "210 ~ 250 €" },
            { name: "Hand or Foot Peeling (El veya Ayak Peeling)", price: "70 ~ 80 €" }
        ]
    },
    {
        category: "BEAUTY SERVICES - GUZELLIK SERVISLERI",
        items: [
            { name: "Eyebrow Shaping (Kaş Şekillendirme)", price: "35 €" },
            { name: "Lip Waxing / String (Dudak Üstü Ağda/İp)", price: "25 €" },
            { name: "Eyebrow Feeding (Kaş Vitamini)", price: "90 ~ 110 €" },
            { name: "Eyelash Lifting (Kirpik Lifting)", price: "230 €" },
            { name: "Eyebrow Lifting (Kaş Lifting)", price: "230 €" },
            { name: "Eyelash Extensions (Kirpik Uzatma)", price: "140 ~ 160 €" },
            { name: "Eyebrow Colouring (Kaş Renklendirme)", price: "70 €" },
            { name: "Eyelash Colouring (Kirpik Renklendirme)", price: "45 €" },
            { name: "Eyelash Removal (Kirpik Çıkarma)", price: "40 €" },
            { name: "Eye Make-Up (Göz Makyajı)", price: "70 €" },
            { name: "Daily Make Up (Günlük Makyaj)", price: "110 €" },
            { name: "Night Out / Party Make-Up (Gece/Parti Makyajı)", price: "180 €" },
            { name: "Bridal Make-Up In Salon (Gelin Makyajı - Salonda)", price: "410 €" },
            { name: "Bridal Make-Up Out (Gelin Makyajı - Dışarıda)", price: "510 €" },
            { name: "Lash Repairing (Kaş Onarma)", price: "50 €" },
            { name: "Lip Conturing (Dudak Çevresi Kontür)", price: "230 ~ 270 €" },
            { name: "Permanent Lip Colouring (Kalıcı Dudak Renklendirme)", price: "230 ~ 270 €" },
            { name: "Eyebrow Lamination (Kaş Laminasyonu)", price: "170 €" }
        ]
    }
];

// Export logic if used in Node.js environment (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = servicesData;
}
