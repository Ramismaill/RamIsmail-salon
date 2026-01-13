const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'database.sqlite');
const db = new Database(dbPath);

function checkSchema() {
    try {
        // Get table schema for 'services'
        const schema = db.prepare(`PRAGMA table_info(services)`).all();
        console.log("Table Schema for 'services':");
        console.table(schema);

        // Check if we have data
        const count = db.prepare('SELECT count(*) as count FROM services').get();
        console.log("Current row count:", count.count);

        // Show first few services
        const services = db.prepare('SELECT * FROM services LIMIT 5').all();
        console.log("\nFirst 5 services:");
        console.table(services);

    } catch (err) {
        console.error("Error checking schema:", err);
    } finally {
        db.close();
    }
}

checkSchema();
