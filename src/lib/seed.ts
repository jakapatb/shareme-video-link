import { sql } from "@vercel/postgres";
import { ShortLinksTable, ShortLink, NewShortLink, db } from "./drizzle";

export async function seed() {
  // Create table with raw SQL
  const createTable = await sql.query(`
      CREATE TABLE IF NOT EXISTS links (
        id SERIAL PRIMARY KEY,
        vdo VARCHAR(255) NOT NULL,
        url VARCHAR(255) NOT NULL,
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
  `);
  console.log(`Created "links" table`);

  return {
    createTable,
  };
}
