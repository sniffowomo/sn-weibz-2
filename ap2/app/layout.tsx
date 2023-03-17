import "./globals.css";

// This is importing the font
import { Play } from "next/font/google";

export const metadata = {
  title: "💓:👅:👃",
  description: "WomanSuck",
};

// Font which was imported from line 4

const plFo = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plFo.className}>
      <body>{children}</body>
    </html>
  );
}
