import Database from 'better-sqlite3'
import { join } from 'path'

const dbPath = join(process.cwd(), 'database.sqlite');
const db = new Database(dbPath);

db.prepare(`
  CREATE TABLE IF NOT EXISTS expense_items(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT,
    amount REAL
  )
`).run();

export default db;