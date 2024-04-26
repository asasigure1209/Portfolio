import type { Metadata } from "next";
import Image from "next/image";
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
      <body className={notoSerifJP.className}>
        <div className="flex min-h-screen flex-col items-center justify-between md:p-24 p-4">
          <div className="z-10 w-full max-w-5xl items-center justify-between flex">
            <Image
              src="/asasigure.svg"
              alt="asasigure logo"
              width={159}
              height={42}
              priority
            />
            <nav className="flex items-center font-mono">
              <a
                className="pointer-events-auto mx-4"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                engineering
              </a>
              <a
                className="pointer-events-auto mx-4"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                photos/videos
              </a>
              <a
                className="pointer-events-auto mx-4"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                about
              </a>
            </nav>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
