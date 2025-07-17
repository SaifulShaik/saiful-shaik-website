import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saiful Shaik | Portfolio",
  description: "Personal portfolio website for Saiful Shaik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body 
        className={`${inter.className} bg-background min-h-screen flex flex-col relative`}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(71 85 105 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      >
        <Navbar />
        <main className="flex-1 pt-28">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
} 