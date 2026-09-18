"use client";

import Image from "next/image";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function HeroSection() {
  return (
    <section className="relative border-b border-[#1C1C1C] py-12 md:py-20 bg-[#F5F3E7] overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* 12-Column Hero Grid */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12 items-center">
          
          {/* Left Column (Typographic Hero Content - Spans 7 cols on desktop) */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-between">
            {/* Top Subtitle Label */}
            <div className="flex items-center gap-2 font-mono text-xs text-[#1C1C1C]/70 mb-6 uppercase tracking-widest">
              <span className="w-2.5 h-2.5 bg-[#FF6B35]"></span>
              <span>FRONTEND ARCHITECTURE & AI SYSTEMS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1C1C1C] leading-[1.08] uppercase font-sans mb-6">
              Hi, I’m Kunal Patel — Senior Frontend Developer crafting clean, responsive web apps.
            </h1>

            {/* Paragraph Description */}
            <p className="text-base sm:text-lg text-[#1C1C1C]/85 font-sans leading-relaxed mb-8 max-w-2xl">
              BCA 3rd year student (MUIT), 2+ years of Next.js projects, co-founder of Ornix Agency, building AI-powered billing systems and modern frontend solutions.
            </p>

            {/* Action Buttons matching reference layout */}
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
              <a
                href="#projects"
                className="px-6 py-4 border border-[#1C1C1C] bg-[#1C1C1C] text-[#F5F3E7] font-bold uppercase tracking-wider hover:bg-transparent hover:text-[#1C1C1C] transition-colors"
              >
                VIEW MY WORK →
              </a>
              <a
                href="#contact"
                className="px-6 py-4 border border-[#1C1C1C] bg-transparent text-[#1C1C1C] font-bold uppercase tracking-wider hover:bg-[#1C1C1C] hover:text-[#F5F3E7] transition-colors"
              >
                LET'S WORK TOGETHER →
              </a>
            </div>

            {/* Bottom Left Micro Indicator */}
            <div className="mt-12 pt-6 border-t border-[#1C1C1C]/20 flex items-center justify-between font-mono text-[11px] text-[#1C1C1C]/60">
              <div className="flex items-center gap-2">
                <span className="text-[#FF6B35] font-bold">01 //</span>
                <span>BASED IN LUCKNOW, INDIA [UTC+05:30]</span>
              </div>
              <div className="hidden sm:block">
                <span>SCROLL TO EXPLORE ↓</span>
              </div>
            </div>
          </div>

          {/* Right Column (Hero Portrait & Technical Annotation - Spans 5 cols on desktop) */}
          <div className="col-span-12 lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background Soft Circle Backdrop */}
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-[#1C1C1C]/20 bg-[#EAE7D6]/60 -z-0"></div>

            {/* ACCENT 1 OF 3: ROYAL BLUE (#2A5FFF) AVAILABILITY BADGE */}
            <div className="absolute top-0 right-0 z-20 px-3 py-1.5 bg-[#2A5FFF] text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-[#1C1C1C]">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block mr-1.5 animate-pulse"></span>
              AVAILABLE FOR SELECT PROJECTS
            </div>

            {/* Technical Wireframe Callout Box (Top Left) */}
            <div className="absolute top-8 left-0 z-20 hidden sm:block p-2.5 bg-[#F5F3E7] border border-[#1C1C1C] font-mono text-[10px] text-[#1C1C1C]">
              <span className="text-[#FF6B35] font-bold block">01 // ROLE</span>
              <span>CO-FOUNDER @ ORNIX</span>
            </div>

            {/* Technical Wireframe Callout Box (Bottom Right) */}
            <div className="absolute bottom-6 right-0 z-20 hidden sm:block p-2.5 bg-[#F5F3E7] border border-[#1C1C1C] font-mono text-[10px] text-[#1C1C1C]">
              <span className="text-[#FF6B35] font-bold block">02 // TECH</span>
              <span>NEXT.JS • REACT • DJANGO</span>
            </div>

            {/* Portrait Image Card */}
            <div className="relative z-10 w-full max-w-[420px] aspect-[4/5] border border-[#1C1C1C] overflow-hidden bg-[#F5F3E7]">
              <Image
                src="/kunal-hero.jpg"
                alt="Kunal Patel — Senior Frontend Developer"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>

        {/* 12-Column Statistics & Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#1C1C1C] mt-16 pt-8 gap-6 font-mono">
          <div className="border-r border-[#1C1C1C]/20 pr-4">
            <span className="text-[10px] text-[#1C1C1C]/60 uppercase block mb-1">
              [STAT 01] EXPERIENCE
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] block">
              2+ YEARS
            </span>
            <span className="text-[11px] text-[#FF6B35] font-bold block mt-1">
              NEXT.JS PRODUCTION
            </span>
          </div>

          <div className="border-r border-[#1C1C1C]/20 pr-4">
            <span className="text-[10px] text-[#1C1C1C]/60 uppercase block mb-1">
              [STAT 02] LEADERSHIP
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] block">
              CO-FOUNDER
            </span>
            <span className="text-[11px] text-[#1C1C1C]/80 block mt-1">
              ORNIX AGENCY
            </span>
          </div>

          <div className="border-r border-[#1C1C1C]/20 pr-4">
            <span className="text-[10px] text-[#1C1C1C]/60 uppercase block mb-1">
              [STAT 03] CORE PRODUCTS
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] block">
              BILLINGKITAAB
            </span>
            <span className="text-[11px] text-[#1C1C1C]/80 block mt-1">
              AI BILLING SYSTEM
            </span>
          </div>

          <div>
            <span className="text-[10px] text-[#1C1C1C]/60 uppercase block mb-1">
              [STAT 04] EDUCATION
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] block">
              BCA 3RD YR
            </span>
            <span className="text-[11px] text-[#FF6B35] font-bold block mt-1">
              MUIT (2024–2027)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
