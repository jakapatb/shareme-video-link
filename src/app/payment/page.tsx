import type { Metadata } from "next/types";
import React from "react";

export const metadata: Metadata = {
  title: "Payment",
  description: "Payment page",
  openGraph: {
    ttl: 600,
    title: "Payment",
    description: "Payment page",
    type: "image" as any,
    images: [
      "https://preview.redd.it/inal9o589jhc1.jpeg?auto=webp&s=f549fd0d1d33655c82aba8b8e34da226ab085660",
    ],
  },
  twitter: {
    title: "Payment",
    description: "Payment page",
    card: "summary",
    images: [
      "https://preview.redd.it/inal9o589jhc1.jpeg?auto=webp&s=f549fd0d1d33655c82aba8b8e34da226ab085660",
    ],
  },
};

const PaymentPage = () => {
  return <div>PaymentPage</div>;
};

export default PaymentPage;
