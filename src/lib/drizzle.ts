import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const ShortLinksTable = pgTable(
  "links",
  {
    id: serial("id").primaryKey(),
    vdo: text("vdo").notNull(),
    url: text("url").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.vdo, users.url),
    };
  }
);

export type ShortLink = InferSelectModel<typeof ShortLinksTable>;
export type NewShortLink = InferInsertModel<typeof ShortLinksTable>;

// Connect to Vercel Postgres
export const db = drizzle(sql);
