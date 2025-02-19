import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Michael Walker's Portfolio",
  description: "Michael Walker's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center">
          <div className="container mx-auto max-w-3xl p-4">
            <div className="prose dark:prose-invert md:prose-md lg:prose-lg max-w-none">{children}</div>
            </div>
        </div>
      </body>
    </html>
  );
}
