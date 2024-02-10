import { ShortLinksTable, db } from "@/lib/drizzle";
import { eq, sql } from "drizzle-orm";
import { cache } from "react";

export const getShortLinkById = cache(async (id: number) => {
  const shortLink = await db
    .select()
    .from(ShortLinksTable)
    .where(eq(ShortLinksTable.id, id)); // Convert id to number using parseInt
  return shortLink[0];
});
