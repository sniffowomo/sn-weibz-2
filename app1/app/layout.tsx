import "./globals.css";
import { Dancing_Script } from "next/font/google";

// Header fpr sweet smelly woman armpit juice
<head>
  <link
    rel="apple-touch-icon"
    sizes="57x57"
    href="/apple-icon-57x57.png"
  ></link>
  <link
    rel="apple-touch-icon"
    sizes="60x60"
    href="/apple-icon-60x60.png"
  ></link>
  <link
    rel="apple-touch-icon"
    sizes="72x72"
    href="/apple-icon-72x72.png"
  ></link>
  <link
    rel="apple-touch-icon"
    sizes="76x76"
    href="/apple-icon-76x76.png"
  ></link>
  <link
    rel="apple-touch-icon"
    sizes="114x114"
    href="/apple-icon-114x114.png"
  ></link>
  <link
    rel="apple-touch-icon"
    sizes="120x120"
    href="/apple-icon-120x120.png"
  ></link>
  <link
    rel="apple-touch-icon"
    sizes="144x144"
    href="/apple-icon-144x144.png"
  ></link>
  <link
    rel="apple-touch-icon"
    sizes="152x152"
    href="/apple-icon-152x152.png"
  ></link>
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/apple-icon-180x180.png"
  ></link>
  <link
    rel="icon"
    type="image/png"
    sizes="192x192"
    href="/android-icon-192x192.png"
  ></link>
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/favicon-32x32.png"
  ></link>
  <link
    rel="icon"
    type="image/png"
    sizes="96x96"
    href="/favicon-96x96.png"
  ></link>
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="/favicon-16x16.png"
  ></link>
  <link rel="manifest" href="/manifest.json"></link>
  <meta name="msapplication-TileColor" content="#ffffff"></meta>
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"></meta>
  <meta name="theme-color" content="#ffffff"></meta>
</head>;

//fetish metadata

export const metadata = {
  title: "WomanStink",
  description: "GeneratedFemalSweatDrink",
  colorScheme: "dark",
  creator: "womanadditct",
  type: "MakeLoverBeyouShitqueen",
  bookmarks: "Smellyherstink",
  category: "WomanJuices",
};

// Font Selection

const danc = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={danc.className}>
      <body>{children}</body>
    </html>
  );
}
