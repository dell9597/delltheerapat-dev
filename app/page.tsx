"use client";

import { useState } from "react";
import { Lang } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <main className="min-h-screen">
      <Navbar lang={lang} onLangChange={setLang} />
      <HeroSection lang={lang} />
      <TrustBar lang={lang} />
      <ServicesSection lang={lang} />
      <WorkSection lang={lang} />
      <InsightsSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
