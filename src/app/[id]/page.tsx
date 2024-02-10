import { getShortLinkById } from "@/services/getShortLinkById";
import { db } from "@vercel/postgres";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const {id} = params;
  const shortLink = await getShortLinkById(
    isNaN(parseInt(id)) ? 1 : parseInt(id)
  );
  return {
    title:'test',
    openGraph:{
      videos:[shortLink.vdo]
    }
  }
}

const ShareLinkPage = async ({ id }: { id: string }) => {
  const shortLink = await getShortLinkById(
    isNaN(parseInt(id)) ? 1 : parseInt(id)
  );
  return <div>ShareLinkPage {shortLink.url}</div>;
};

export default ShareLinkPage;
