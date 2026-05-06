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

export const metadata: Metadata = {
  title: "SETROUNDLY Official",
  description: "SETROUNDLYオフィシャルサイト。ライブ情報、SNS、BASE SHOPの最新情報を掲載。",
  openGraph: {
    title: "SETROUNDLY Official",
    description: "SETROUNDLYオフィシャルサイト。ライブ情報、SNS、BASE SHOPの最新情報を掲載。",
    images: ["/ogp.png"],
    type: "website",
    locale: "ja_JP"
  },
  twitter: {
    card: "summary_large_image",
    title: "SETROUNDLY Official",
    description: "SETROUNDLYオフィシャルサイト。ライブ情報、SNS、BASE SHOPの最新情報を掲載。",
    images: ["/ogp.png"]
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png"
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
