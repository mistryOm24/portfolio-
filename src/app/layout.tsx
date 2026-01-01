import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import StructuredData from "@/components/seo/StructuredData";


export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: {
    default: "Om Mistry | Frontend Developer",
    template: "%s | Om Mistry",
  },

  description:
    "Frontend Developer with 1.5+ years of experience building scalable, user-focused web applications using React, TypeScript, and modern frontend tools.",

  keywords: [
    "Om Mistry",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript",
    "Web Developer Ahmedabad",
  ],

  authors: [{ name: "Om Mistry" }],
  creator: "Om Mistry",

  openGraph: {
    title: "Om Mistry | Frontend Developer",
    description:
      "Frontend Developer with 1.5+ years of experience in React, TypeScript, and modern frontend development.",
    siteName: "Om Mistry Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Om Mistry Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Om Mistry | Frontend Developer",
    description:
      "Frontend Developer with 1.5+ years of experience building scalable React applications.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorBoundary>
          <Navbar />
          {children}
          <Footer />
          <StructuredData />

        </ErrorBoundary>
      </body>
    </html>
  );
}
