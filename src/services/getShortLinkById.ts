import { ShortLinksTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";

export const getShortLinkById = async (id: number) => {
  const shortLink = await db
    .select()
    .from(ShortLinksTable)
    .where(eq(ShortLinksTable.id, id)); // Convert id to number using parseInt
  return shortLink[0];
};
