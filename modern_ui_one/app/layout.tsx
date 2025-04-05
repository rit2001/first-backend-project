import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/componets/Navbar";
import Footer from "@/componets/Footer";



export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI?UX App for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
         <main className="relative">
         {children}
         </main>
        <Footer/>
      </body>
    </html>
  );
}
