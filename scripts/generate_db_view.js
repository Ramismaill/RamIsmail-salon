const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const dbPath = path.join(__dirname, '..', 'database.sqlite');
const db = new Database(dbPath, { readonly: true });
const outputPath = path.join(__dirname, '..', 'database_report.html');

try {
    // 1. Get List of Tables
    const tables = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'`).all();

    let htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Database Report</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f9; padding: 40px; }
            h1 { color: #333; text-align: center; }
            h2 { color: #555; border-bottom: 2px solid #ddd; padding-bottom: 10px; margin-top: 40px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); background: white; }
            th, td { padding: 12px 15px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background-color: #009879; color: white; text-transform: uppercase; font-size: 0.85rem; }
            tr:hover { background-color: #f1f1f1; }
            .empty { color: #888; font-style: italic; padding: 20px; }
            .badge { background: #eee; padding: 2px 6px; border-radius: 4px; font-size: 0.8em; font-family: monospace; }
        </style>
    </head>
    <body>
        <h1>🗄️ Database Report</h1>
        <p style="text-align: center; color: #666;">Generated on ${new Date().toLocaleString()}</p>
    `;

    // 2. Loop through tables and get data
    for (const table of tables) {
        const tableName = table.name;
        htmlContent += `<h2>Table: ${tableName}</h2>`;

        const rows = db.prepare(`SELECT * FROM ${tableName}`).all();

        if (rows.length === 0) {
            htmlContent += `<div class="empty">No data in this table.</div>`;
        } else {
            // Get headers from first row
            const headers = Object.keys(rows[0]);

            htmlContent += `<table><thead><tr>`;
            headers.forEach(h => htmlContent += `<th>${h}</th>`);
            htmlContent += `</tr></thead><tbody>`;

            rows.forEach(row => {
                htmlContent += `<tr>`;
                headers.forEach(h => {
                    let val = row[h];
                    if (val === null) val = '<span class="badge">NULL</span>';
                    htmlContent += `<td>${val}</td>`;
                });
                htmlContent += `</tr>`;
            });

            htmlContent += `</tbody></table>`;
        }
    }

    htmlContent += `
        <div style="margin-top: 50px; text-align: center; font-size: 0.8em; color: #aaa;">
            End of Report
        </div>
    </body>
    </html>
    `;

    // 3. Write HTML file
    fs.writeFileSync(outputPath, htmlContent);
    console.log(`Successfully created report at: ${outputPath}`);

    // 4. Open in Browser (Windows specific)
    exec(`start "" "${outputPath}"`);

} catch (err) {
    console.error('Error generating report:', err);
} finally {
    db.close();
}
