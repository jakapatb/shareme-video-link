import { getShortLinkById } from "@/services/getShortLinkById";
import { Metadata, ResolvingMetadata } from "next";
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
    title: "test" + shortLink.id,
    twitter: {
      card: "player",

      players: {
        streamUrl: shortLink.vdo,
        width: 1280,
        height: 720,
        playerUrl: shortLink.vdo,
      },
    },
    openGraph: {
      type: "video.other",
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

  return <p>Should linking to {shortLink.url}</p>;
};

export default ShareLinkPage;
