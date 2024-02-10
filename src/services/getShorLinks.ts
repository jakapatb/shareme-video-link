import { ShortLink, ShortLinksTable, db } from "@/lib/drizzle";
import { seed } from "@/lib/seed";

export const getShortLinks = async () => {
  let shortLinks: ShortLink[] = [];

  try {
    shortLinks = await db.select().from(ShortLinksTable);
  } catch (e: any) {
    if (e.message === `relation "links" does not exist`) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );
      await seed();
    } else {
      throw e;
    }
  }
  return shortLinks;
};
