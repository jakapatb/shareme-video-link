import { ShortLinksTable, db } from "@/lib/drizzle";
import { revalidatePath } from "next/cache";
import React from "react";

export const ShareLinksForm = () => {
  async function createLink(formData: FormData) {
    "use server";
    const vdo = formData.get("vdo");
    const url = formData.get("url");

    if (typeof vdo !== "string" || typeof url !== "string") {
      return;
    }
    // add to database
    await db
      .insert(ShortLinksTable)
      .values([
        {
          vdo,
          url,
        },
      ])
      .returning();
    revalidatePath("/");
  }
  return (
    <form action={createLink}>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Sign in to your account</h1>
        <div className="mb-8">
          <label className="block mb-2" htmlFor="vdo">
            short vdo link
          </label>
          <input
            className="w-80 p-4 border-2 border-gray-300 rounded-md"
            type="text"
            id="vdo"
            name="vdo"
            required
          />
        </div>
        <div className="mb-8">
          <label className="block mb-2" htmlFor="url">
            url
          </label>
          <input
            className="w-80 p-4 border-2 border-gray-300 rounded-md"
            type="text"
            id="url"
            name="url"
            required
          />
        </div>
        <button
          className="w-80 p-4 bg-blue-500 text-white font-bold rounded-md"
          type="submit"
        >
          Create Link
        </button>
      </div>
    </form>
  );
};
