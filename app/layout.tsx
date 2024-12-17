import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Challenges from "@/components/Challenges";
import Countdown from "@/components/Countdown";
import JoinUs from "@/components/JoinUs";

export const metadata: Metadata = {
  title: "Prof.Bamiro Engineering Expo (P.B.E.E.X)",
  description:
    "This is the official website of the Prof. Bamiro Engineering Expo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Header />
        <Hero />
        <Challenges />
        <Countdown />
        <JoinUs />
      </body>
    </html>
  );
}
