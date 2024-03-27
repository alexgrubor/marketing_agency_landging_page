import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ClerkProvider } from "@clerk/nextjs";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cookie from "./components/Cookie";

export const metadata: Metadata = {
  title: "My Marketing Agency",
  manifest: "/manifest.json",
  description:
    "We are a marketing agency that specializes in helping businesses grow their online presence. We offer a variety of services including SEO, social media marketing, and content creation. Contact us today to learn more about how we can help you grow your business!",
};

export const viewport: Viewport = {
  themeColor: '#8E44AD'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="bg-bg">
        <Cookie/>
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId={process.env.GA_ID ?? ''} />
        <Analytics  />
        <SpeedInsights />
      </body>
    </html>
    </ClerkProvider>
  );
}
