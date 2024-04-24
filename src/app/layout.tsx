import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "asasigure",
  description: "asasigureのポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSerifJP.className}>{children}</body>
    </html>
  );
}
