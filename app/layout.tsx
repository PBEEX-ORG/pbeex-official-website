import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

//Bebas Neue Font
const bebasNeue = localFont({
  src: "./fonts/BebasNeue-Regular.woff", // Adjust path as necessary
  variable: "--font-bebas-neue",
  weight: "400", // Default weight for Bebas Neue
  style: "normal",
});

// Existing Fonts
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PBEEX",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
