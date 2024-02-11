import { getShortLinkById } from "@/services/getShortLinkById";
import { db } from "@vercel/postgres";
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = params;
  const shortLink = await getShortLinkById(
    isNaN(parseInt(id)) ? 1 : parseInt(id)
  );
  return {
    title: "test",
    twitter: {
      card: "player",
      players: [
        {
          streamUrl: shortLink.vdo,
          width: 1280,
          height: 720,
          playerUrl: shortLink.vdo,
        },
      ],
    },
    openGraph: {
      videos: [shortLink.vdo],
    },
  };
}

const ShareLinkPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const shortLink = await getShortLinkById(
    isNaN(parseInt(id)) ? 1 : parseInt(id)
  );
  if (!shortLink) return <div>Link not found</div>;

  redirect(shortLink.url);

  return null;
};

export default ShareLinkPage;
