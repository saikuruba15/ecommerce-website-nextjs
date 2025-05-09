import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { AOSInit } from "@/components/aos";
import Head from "next/head";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eCommerce Marketing & Support Solution - Reacho",
  description:
    "Maximize customer engagement with Reacho's all-in-one eCommerce suite: email, SMS, chat, and helpdesk tools, streamlining interactions across channels.",
  openGraph: {
    title: "eCommerce Marketing & Support Solution - Reacho",
    description:
      "Maximize customer engagement with Reacho's all-in-one eCommerce suite: email, SMS, chat, and helpdesk tools, streamlining interactions across channels.",
    url: "https://www.reacho.com",
    images: [
      {
        url: "https://www.reacho.com/assets/images/reacho-og.png",
        alt: "Reacho's Marketing & Support Solution",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
