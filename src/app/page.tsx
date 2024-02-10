import Link from "next/link";
import { getShortLinks } from "@/services/getShorLinks";
import { ShareLinksForm } from "@/components/ShareLinksForm";

export default async function Home() {
  const shortLinks = await getShortLinks();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ShareLinksForm />
      <div>
        <h1 className="text-3xl font-bold mb-8">Your Links</h1>
        <ul>
          {shortLinks.map((link: any) => (
            <li key={link.id}>
              <Link href={`/${link.id}`}>
                {link.url}:{link.vdo}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/payment">Payment</Link>
    </main>
  );
}
