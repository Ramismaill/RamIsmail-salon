const Database = require('better-sqlite3');
const path = require('path');

// Create/open the database
const dbPath = path.join(__dirname, '..', 'database.sqlite');
const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

const createTablesQuery = `
CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    name_tr TEXT,
    name_ar TEXT,
    price_euro TEXT
);

CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    guest_type TEXT,
    full_name TEXT,
    email TEXT,
    room_number TEXT,
    phone_number TEXT,
    appointment_date TEXT,
    appointment_time TEXT,
    services TEXT,
    total_price_euro REAL,
    status TEXT DEFAULT 'pending',
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
`;

const servicesData = [
    // HAIR STYLE
    { name: "Hair Cut", name_tr: "Saç Kesim", name_ar: "قص الشعر", price: "135" },
    { name: "Owner Hair Cut", name_tr: "İşletmeci Saç Kesim", name_ar: "قص شعر الرئيس", price: "180" },
    { name: "Root Coloring (Ammonia)", name_tr: "Dip Boya (Amonyaklı)", name_ar: "صبغ الجذور (آمونيا)", price: "135-180" },
    { name: "Root Coloring (Ammonia Free)", name_tr: "Dip Boya (Amonyaksız)", name_ar: "صبغ الجذور (بدون آمونيا)", price: "160-200" },
    { name: "Full Head Coloring (Ammonia)", name_tr: "Tüm Saç Boya (Amonyaklı)", name_ar: "صبغ كامل (آمونيا)", price: "240-280" },
    { name: "Full Head Coloring (Ammonia Free)", name_tr: "Tüm Saç Boya (Amonyaksız)", name_ar: "صبغ كامل (بدون آمونيا)", price: "250-290" },
    { name: "Full Head Decoloration", name_tr: "Tüm Saç Renk Değişimi", name_ar: "تغيير لون الشعر بالكامل", price: "440-530" },
    { name: "Root Decoloration & Colouring", name_tr: "Dip Açma & Boyama", name_ar: "تفتيح وصبغ الجذور", price: "370-440" },
    { name: "Foils Balayage", name_tr: "Balyaj / Röfle", name_ar: "بالاياج / رقائق", price: "430-590" },
    { name: "Free Light", name_tr: "Free Light", name_ar: "فري لايت", price: "450-590" },
    { name: "Balayage", name_tr: "Balyaj", name_ar: "بالاياج", price: "450-590" },
    { name: "Pigmentation", name_tr: "Pigmentasyon", name_ar: "تصبغ", price: "160-230" },
    { name: "Olaplex Addition", name_tr: "Olaplex İlavesi", name_ar: "إضافة أولابليكس", price: "190-230" },

    // STYLING
    { name: "Blow-Dry", name_tr: "Fön", name_ar: "تجفيف", price: "70" },
    { name: "Curling Iron", name_tr: "Maşa", name_ar: "مكواة تجعيد", price: "110" },
    { name: "Bun", name_tr: "Topuz", name_ar: "كعكة", price: "110-140" },
    { name: "Bride's Hair In Salon", name_tr: "Gelin Saçı (Salonda)", name_ar: "شعر العروس (بالصالون)", price: "550" },
    { name: "Micro Welding (Pieces)", name_tr: "Mikro Kaynak (Adet)", name_ar: "لحام دقيق (قطع)", price: "10-12" },

    // HAIR CARE
    { name: "Keratin Straightener", name_tr: "Keratin Düzleştirici", name_ar: "تمليس الكيراتين", price: "410-500" },
    { name: "Collagen Treatment", name_tr: "Kolajen Bakımı", name_ar: "علاج الكولاجين", price: "270-320" },
    { name: "Keratin Treatment", name_tr: "Keratin Bakımı", name_ar: "علاج الكيراتين", price: "230-270" },
    { name: "Botox Treatment", name_tr: "Botox Bakımı", name_ar: "علاج البوتوكس", price: "250-300" },
    { name: "Olaplex Treatment", name_tr: "Olaplex Bakımı", name_ar: "علاج أولابليكس", price: "180-200" },
    { name: "Daily Hair Care & Mask", name_tr: "Günlük Saç Bakımı & Maske", name_ar: "عناية يومية وقناع", price: "180-200" },

    // NAILS
    { name: "Manicure", name_tr: "Manikür", name_ar: "مانيكير", price: "70" },
    { name: "Pedicure", name_tr: "Pedikür", name_ar: "باديكير", price: "80" },
    { name: "Gel Polish (Hand)", name_tr: "El Kalıcı Oje", name_ar: "طلاء جل (يد)", price: "90" },
    { name: "Gel Polish (Foot)", name_tr: "Ayak Kalıcı Oje", name_ar: "طلاء جل (قدم)", price: "110" },
    { name: "Gel Polish Removing", name_tr: "Kalıcı Oje Çıkarma", name_ar: "إزالة طلاء الجل", price: "70" },
    { name: "Nail Extension", name_tr: "Protez Tırnak", name_ar: "تطويل الأظافر", price: "270-360" },
    { name: "Nail Extension Removing", name_tr: "Protez Tırnak Çıkarma", name_ar: "إزالة تطويل الأظافر", price: "210-250" },
    { name: "Hand or Foot Peeling", name_tr: "El veya Ayak Peeling", name_ar: "تقشير اليد أو القدم", price: "70-80" },

    // BEAUTY
    { name: "Eyebrow Shaping", name_tr: "Kaş Şekillendirme", name_ar: "تشكيل الحواجب", price: "35" },
    { name: "Lip Waxing / String", name_tr: "Dudak Üstü Ağda/İp", name_ar: "إزالة شعر الشفة", price: "25" },
    { name: "Eyebrow Feeding", name_tr: "Kaş Vitamini", name_ar: "تغذية الحواجب", price: "90-110" },
    { name: "Eyelash Lifting", name_tr: "Kirpik Lifting", name_ar: "رفع الرموش", price: "230" },
    { name: "Eyebrow Lifting", name_tr: "Kaş Lifting", name_ar: "رفع الحواجب", price: "230" },
    { name: "Eyelash Extensions", name_tr: "Kirpik Uzatma", name_ar: "وصلات الرموش", price: "140-160" },
    { name: "Eyebrow Colouring", name_tr: "Kaş Renklendirme", name_ar: "صبغ الحواجب", price: "70" },
    { name: "Eyelash Colouring", name_tr: "Kirpik Renklendirme", name_ar: "صبغ الرموش", price: "45" },
    { name: "Eyelash Removal", name_tr: "Kirpik Çıkarma", name_ar: "إزالة الرموش", price: "40" },
    { name: "Eye Make-Up", name_tr: "Göz Makyajı", name_ar: "مكياج العيون", price: "70" },
    { name: "Daily Make Up", name_tr: "Günlük Makyaj", name_ar: "مكياج يومي", price: "110" },
    { name: "Night Out / Party Make-Up", name_tr: "Gece/Parti Makyajı", name_ar: "مكياج سهرة", price: "180" },
    { name: "Bridal Make-Up (In Salon)", name_tr: "Gelin Makyajı (Salonda)", name_ar: "مكياج عروس (بالصالون)", price: "410" },
    { name: "Bridal Make-Up (Out)", name_tr: "Gelin Makyajı (Dışarıda)", name_ar: "مكياج عروس (خارجي)", price: "510" },
    { name: "Lash Repairing", name_tr: "Kaş Onarma", name_ar: "إصلاح الرموش", price: "50" },
    { name: "Lip Conturing", name_tr: "Dudak Çevresi Kontür", name_ar: "تحديد الشفاه", price: "230-270" },
    { name: "Permanent Lip Colouring", name_tr: "Kalıcı Dudak Renklendirme", name_ar: "تلوين الشفاه الدائم", price: "230-270" },
    { name: "Eyebrow Lamination", name_tr: "Kaş Laminasyonu", name_ar: "تغليف الحواجب", price: "170" }
];

function initDB() {
    try {
        console.log("Creating tables...");
        db.exec(createTablesQuery);
        console.log("Tables created successfully.");

        console.log("Seeding services...");

        // Clear existing services to prevent duplicates
        db.exec('DELETE FROM services');

        const insertStmt = db.prepare(`
            INSERT INTO services (name, name_tr, name_ar, price_euro) 
            VALUES (?, ?, ?, ?)
        `);

        const insertMany = db.transaction((services) => {
            for (const service of services) {
                insertStmt.run(service.name, service.name_tr, service.name_ar, service.price);
            }
        });

        insertMany(servicesData);

        console.log(`Seeded ${servicesData.length} services.`);
        console.log("Database initialization complete!");

    } catch (err) {
        console.error("Database initialization failed:", err);
    } finally {
        db.close();
    }
}

initDB();

module.exports = initDB;
