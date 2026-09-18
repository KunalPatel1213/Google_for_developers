"use client";

import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GridOverlay from "./components/GridOverlay";

export default function Home() {
  const [showGrid, setShowGrid] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-[#F5F3E7] text-[#1C1C1C] flex flex-col font-sans">
      {/* Swiss Grid visual overlay indicator when turned ON */}
      <GridOverlay show={showGrid} />

      {/* Header Navigation */}
      <Header showGrid={showGrid} setShowGrid={setShowGrid} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
