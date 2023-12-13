import "./globals.scss";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Footer, Header } from "@/app/components/organisms";
import Template from "./template";
import styles from "./layout.module.scss";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ENDO工房",
    template: "ENDO工房｜%s",
  },
  description:
    "関西を中心に舞台美術の制作活動を行なっている、ENDO工房の公式Webサイトです。",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} ${styles.layout}`}>
        <Template>
          <Header />
        </Template>
        {children}
        <Footer />
      </body>
    </html>
  );
}
