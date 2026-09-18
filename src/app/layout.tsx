import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kunal Patel — Senior Frontend Developer | Swiss Portfolio",
  description: "Swiss / International style portfolio of Kunal Patel, Senior Frontend Developer & Co-founder of Ornix Agency. Crafting clean, responsive web applications.",
  keywords: ["Kunal Patel", "Senior Frontend Developer", "Next.js", "React", "Swiss Design", "UI/UX", "Ornix Agency", "BillingKitaab"],
  authors: [{ name: "Kunal Patel" }],
  openGraph: {
    title: "Kunal Patel — Senior Frontend Developer",
    description: "Swiss grid layout portfolio of Senior Frontend Developer Kunal Patel. Order. Everything lines up.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="bg-[#F5F3E7] text-[#1C1C1C] min-h-screen selection:bg-[#1C1C1C] selection:text-[#F5F3E7]">
        {children}
      </body>
    </html>
  );
}
