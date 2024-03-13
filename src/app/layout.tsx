import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cookie from "./components/Cookie";

export const metadata: Metadata = {
  title: "My Marketing Agency",
  description:
    "We are a marketing agency that specializes in helping businesses grow their online presence. We offer a variety of services including SEO, social media marketing, and content creation. Contact us today to learn more about how we can help you grow your business!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg">
        <Cookie/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
