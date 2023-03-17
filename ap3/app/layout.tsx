import "./globals.css";

export const metadata = {
  title: "NextJS Lesson3 🍃",
  description: "SnifferBoy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
