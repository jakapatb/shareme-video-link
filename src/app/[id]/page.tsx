import { getShortLinkById } from "@/services/getShortLinkById";
import { Metadata, ResolvingMetadata } from "next/types";
import React from "react";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<any> {
  const { id } = params;
  const shortLink = await getShortLinkById(
    isNaN(parseInt(id)) ? 1 : parseInt(id)
  );
  return {
    title: "test" + shortLink.id,
    twitter: {
      card: "summary_large_image",
      title: "test" + shortLink.id,
      site: "@test",
      images: [
        {
          url: shortLink.vdo,
          width: 720,
          height: 480,
        },
      ],
    },
    openGraph: {
      title: "test" + shortLink.id,
      type: "video.other",
      url: shortLink.url,
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
