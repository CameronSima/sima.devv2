import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sima.dev"),
  title: {
    default: "Cam Sima — Software Engineer",
    template: "%s — Cam Sima",
  },
  description:
    "Full-stack software engineer and creator of Warbirds.io, a browser-based multiplayer air combat game. Building games, real-time systems, and polished web experiences.",
  openGraph: {
    title: "Cam Sima — Software Engineer",
    description:
      "Full-stack software engineer and creator of Warbirds.io — blocky team dogfights over the Brick Sea.",
    url: "https://sima.dev",
    siteName: "sima.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="scroll-progress" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
