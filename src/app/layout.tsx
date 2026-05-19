import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Afriwood Studios | Africa First Superhero Universe",
  description: "Discover Africa's first superhero universe — comics, movies, merch, and more.",
  keywords: ["Afriwood", "African superhero", "comics", "Shutter-Bird", "AfriCity"],
  openGraph: {
    title: "Afriwood Studios",
    description: "Africa First Superhero Universe",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} h-full scroll-smooth overflow-x-clip`}>
      <body className="flex min-h-full flex-col overflow-x-clip bg-[var(--color-bg-primary)] text-white antialiased">
        <Navbar />
        <main className="flex min-w-0 flex-1 flex-col w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}