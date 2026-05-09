import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "INFO（ライブ予約フォーム）",
  description:
    "SETROUNDLYのライブ予約・お問い合わせフォーム。公演日・お名前・チケット枚数を選んで送信できます。",
  alternates: { canonical: "/info" },
  openGraph: {
    title: "INFO | SETROUNDLY Official",
    description:
      "SETROUNDLYのライブ予約・お問い合わせフォーム。公演日・お名前・チケット枚数を選んで送信できます。",
    url: "/info",
    type: "website",
    locale: "ja_JP"
  }
};

export default function InfoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
