import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sunandsandrealtor.com"),
  title: {
    default: "Sun & Sand Realtor",
    template: "%s | Sun & Sand Realtor",
  },
  description:
    "Sun & Sand Realtor helps buyers and sellers across coastal Southern California with local market expertise and personalized guidance.",
  openGraph: {
    title: "Sun & Sand Realtor",
    description:
      "Explore featured homes and connect with Sun & Sand Realtor for buying and selling support.",
    url: "https://www.sunandsandrealtor.com",
    siteName: "Sun & Sand Realtor",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex-1">{children}</div>
        <footer className="bg-slate-950 px-6 pb-8">
          <div className="mx-auto w-full max-w-[240px]">
            <Image
              src="/ryker-flint-division.png"
              alt="A division of Ryker Flint Real Estate"
              width={1024}
              height={542}
              className="h-auto w-full rounded-md opacity-90"
            />
          </div>
        </footer>
      </body>
    </html>
  );
}
