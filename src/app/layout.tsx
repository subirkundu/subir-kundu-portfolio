import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://subirkundu.dev"),
  title: {
    default: "Subir Kundu | Software QA Engineer",
    template: "%s | Subir Kundu",
  },
  description:
    "Software QA Engineer portfolio for Subir Kundu - manual testing, automation, API testing, ERP testing, and release validation.",
  openGraph: {
    title: "Subir Kundu | Software QA Engineer",
    description: "Quality engineering portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="top"
        className={`${geist.variable} ${mono.variable}`}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}