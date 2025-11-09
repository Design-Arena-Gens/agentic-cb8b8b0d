import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Verdura Steps | Conscious Footwear",
  description:
    "Verdura Steps crafts organic, plant-tanned sneakers that balance style, sustainability, and comfort.",
  metadataBase: new URL("https://agentic-cb8b8b0d.vercel.app"),
  openGraph: {
    title: "Verdura Steps | Conscious Footwear",
    description:
      "Verdura Steps crafts organic, plant-tanned sneakers that balance style, sustainability, and comfort.",
    url: "https://agentic-cb8b8b0d.vercel.app",
    siteName: "Verdura Steps",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Verdura Steps Organic Shoes"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body text-forest-900">{children}</body>
    </html>
  );
}
