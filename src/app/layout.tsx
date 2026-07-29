import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import FollowButton from "@/components/follow-button";
import { siteDescription, siteName, siteUrl } from "@/lib/seo";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Southern California Real Estate`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${siteName} | Southern California Real Estate`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/realtors-photo.png",
        width: 1024,
        height: 683,
        alt: "Sun and Sand Realtor team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Southern California Real Estate`,
    description: siteDescription,
    images: ["/realtors-photo.png"],
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
        <footer className="bg-slate-950 px-6 pb-8 pt-4">
          <div className="mx-auto flex w-full max-w-[360px] flex-col items-center gap-5">
            <FollowButton
              label="Follow Us on Facebook"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#1877f2]/70 bg-[#1877f2] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#4e9af7] hover:bg-[#0f66d6]"
            />
            <Image
              src="/ryker-flint-division.png"
              alt="A division of Ryker Flint Real Estate"
              width={1024}
              height={542}
              className="h-auto w-full max-w-[240px] rounded-md opacity-90"
            />
          </div>
        </footer>
      </body>
    </html>
  );
}
