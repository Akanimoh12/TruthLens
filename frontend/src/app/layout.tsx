import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TruthLens — Decentralized Fact-Checking on Bittensor",
  description:
    "Real-time, decentralized verification of claims and information powered by Bittensor's distributed intelligence network. Eliminate bias. Scale truth.",
  keywords: [
    "fact-checking",
    "decentralized",
    "Bittensor",
    "misinformation",
    "AI verification",
    "TruthLens",
  ],
  openGraph: {
    title: "TruthLens — Decentralized Fact-Checking on Bittensor",
    description:
      "Real-time, decentralized verification powered by distributed AI intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
