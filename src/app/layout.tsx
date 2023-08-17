import "./globals.css";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Films+",
  description: "Find your favorite movies and series",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-blueSkyDarker ${oswald.style}`}>{children}</body>
    </html>
  );
}
