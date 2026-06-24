"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieConsent from "@/components/CookieConsent";
import CustomCursor from "@/components/CustomCursor";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLeadsPage = pathname === "/leads";

  return (
    <>
      <CustomCursor />
      {!isLeadsPage && <Navbar />}
      {children}
      {!isLeadsPage && <Footer />}
      {!isLeadsPage && <CookieConsent />}
    </>
  );
}
