import type { Metadata } from "next";
import { Orbitron, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron"
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://setroundly-site.vercel.app";
const siteName = "SETROUNDLY Official";
const siteDescription =
  "SETROUNDLY（セットラウンドリー）オフィシャルサイト。「人と人との間に起こること。」をテーマに島﨑が描く繊細な楽曲を発信。最新ライブ情報、SNS、BASE SHOPはこちら。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | SETROUNDLY"
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "SETROUNDLY",
    "セットラウンドリー",
    "Setroundly",
    "島﨑",
    "島崎",
    "シンガーソングライター",
    "ロック",
    "JAPAN JAM",
    "オフィシャルサイト",
    "公式サイト",
    "ライブ",
    "予約",
    "BASE SHOP"
  ],
  authors: [{ name: "SETROUNDLY" }],
  creator: "SETROUNDLY",
  publisher: "SETROUNDLY",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "SETROUNDLY"
      }
    ],
    type: "website",
    locale: "ja_JP"
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/ogp.png"],
    site: "@set_roundly",
    creator: "@set_roundly"
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${orbitron.variable} ${notoSansJp.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
