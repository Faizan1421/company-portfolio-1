"use client";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TechSection from "@/components/TechSection";
import HeroSection from "@/components/HeroSection";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechSection />
      {showBackToTop && (
        <button
          className="fixed bottom-16 right-4  cursor-pointer backToTop bg-gradient-to-r from-violet-900 to-primary-900 rounded-full shadow-md  hover:scale-125 transition-all duration-300"
          onClick={handleBackToTop}
        >
          <ChevronUp className="w-8 h-8 lg:h-10 lg:w-10 " />
        </button>
      )}
    </>
  );
}
