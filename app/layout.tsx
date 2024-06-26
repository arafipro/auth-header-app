import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth Header App",
  description: "header with auth app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={noto_sans_jp.className}>
        <Header />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
