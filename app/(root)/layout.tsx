import type { Metadata } from "next";
import "../globals.css";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
