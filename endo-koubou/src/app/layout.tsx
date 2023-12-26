import "./globals.scss";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Footer, Header } from "@/app/components/organisms";
import Template from "./template";
import styles from "./layout.module.scss";
import { Toaster } from "react-hot-toast";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const siteName = "ENDO工房";
const description =
  "関西を中心に舞台美術の制作活動を行なっている、ENDO工房の公式Webサイトです。";
const url = "https://endo-koubou.com";
const imageUrl = "https://endo-koubou.com/images/og/opengraph-image.jpg";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: "ENDO工房｜%s",
  },
  description: description,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: {
    index: false,
    googleBot: {
      index: false,
    },
  },
  openGraph: {
    title: siteName,
    images: {
      url: imageUrl,
    },
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    images: [imageUrl],
    description,
    site: "@elton_0914",
    creator: "@elton_0914",
  },
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
        {children} <Toaster />
        <Footer />
      </body>
    </html>
  );
}
