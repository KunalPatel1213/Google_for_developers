"use client";

import { EXPERIENCES, PERSONAL_INFO } from "../data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-[#1C1C1C] py-16 md:py-24 bg-[#F5F3E7]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-12 mb-12 pb-4 border-b border-[#1C1C1C]">
          <div className="col-span-12 md:col-span-4 flex items-center gap-3 font-mono text-xs">
            <span className="text-[#FF6B35] font-bold text-sm">01</span>
            <span className="font-bold tracking-widest text-[#1C1C1C]">ABOUT & BACKGROUND</span>
          </div>
          <div className="hidden md:block md:col-span-8 text-right font-mono text-xs text-[#1C1C1C]/60 uppercase">
            [SWISS EDITORIAL LAYOUT — SYSTEMATIC ARCHITECTURE]
          </div>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Key Details Spec Card (No Image) */}
          <div className="col-span-12 lg:col-span-5 border border-[#1C1C1C] p-6 sm:p-8 bg-[#F5F3E7]">
            <div className="border-b border-[#1C1C1C] pb-4 mb-6 font-mono">
              <span className="text-[10px] text-[#FF6B35] font-bold block uppercase tracking-widest">
                [SYS // SPECIFICATION CARD]
              </span>
              <h3 className="text-xl font-bold uppercase text-[#1C1C1C] tracking-tight mt-1">
                DEVELOPER PROFILE
              </h3>
            </div>

            <div className="font-mono text-xs space-y-4">
              <div className="flex justify-between items-center border-b border-[#1C1C1C]/20 pb-3">
                <span className="text-[#1C1C1C]/60">FULL NAME</span>
                <span className="font-bold text-[#1C1C1C]">{PERSONAL_INFO.name}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1C1C1C]/20 pb-3">
                <span className="text-[#1C1C1C]/60">CURRENT DEGREE</span>
                <span className="font-bold text-right text-[#1C1C1C]">{PERSONAL_INFO.education}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1C1C1C]/20 pb-3">
                <span className="text-[#1C1C1C]/60">AGENCY</span>
                <span className="font-bold text-[#FF6B35]">{PERSONAL_INFO.subRole}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1C1C1C]/20 pb-3">
                <span className="text-[#1C1C1C]/60">LOCATION</span>
                <span className="font-bold text-[#1C1C1C]">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1C1C1C]/20 pb-3">
                <span className="text-[#1C1C1C]/60">SPECIALIZATION</span>
                <span className="font-bold text-[#1C1C1C]">Next.js & AI Billing Systems</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#1C1C1C]/60">PRIMARY TECH</span>
                <span className="font-bold text-[#FF6B35]">NEXT.JS • REACT • DJANGO</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1C1C1C] bg-[#1C1C1C] text-[#F5F3E7] p-4 font-mono text-xs">
              <span className="text-[#FF6B35] font-bold block mb-1">
                ENGINEERING DISCIPLINE
              </span>
              <p className="text-[#F5F3E7]/80 text-[11px] font-sans leading-relaxed">
                Order. Everything lines up. The text does the work, not the decoration. Pure 12-column modular rhythm.
              </p>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Timeline */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1C1C1C] uppercase font-sans leading-tight mb-6">
                ORDER. EVERYTHING LINES UP. THE TEXT DOES THE WORK, NOT THE DECORATION.
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-[#1C1C1C]/90 font-sans mb-4">
                I am a <strong>Bachelor of Computer Applications (BCA) 3rd year student</strong> at Maharishi University of Information Technology, with over <strong>2+ years of intensive Next.js production experience</strong>.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-[#1C1C1C]/90 font-sans mb-6">
                As the <strong>co-founder of Ornix Agency</strong>, I engineer robust frontend solutions, scalable web application architectures, and AI-powered billing systems such as <strong>BillingKitaab</strong>. My engineering discipline centers on strict grid alignment, performance optimization, and responsive design systems that empower businesses.
              </p>
            </div>

            {/* Experience & Education Timeline Grid */}
            <div className="border-t border-[#1C1C1C] pt-6">
              <h3 className="font-mono text-xs text-[#FF6B35] font-bold tracking-widest uppercase mb-4">
                [TIMELINE & MILESTONES]
              </h3>

              <div className="space-y-6 font-mono text-xs">
                {EXPERIENCES.map((exp, idx) => (
                  <div
                    key={idx}
                    className="border-l-2 border-[#1C1C1C] pl-4 py-1"
                  >
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                      <span className="font-bold text-sm text-[#1C1C1C]">{exp.role}</span>
                      <span className="text-[#FF6B35] font-bold">{exp.period}</span>
                    </div>
                    <div className="text-[#1C1C1C]/70 mb-2">{exp.organization} — {exp.location}</div>
                    <ul className="list-disc list-inside space-y-1 text-[#1C1C1C]/80 font-sans text-xs">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
