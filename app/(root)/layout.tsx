import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import EmailInput from "@/components/EmailInput";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loris Media",
  description: "Loris Media porfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <main>
        <Navbar/>
        <MobileNav/>
        {children}
        <Footer/>
        </main>
    
  );
}
