"use client";

import { SKILL_CATEGORIES } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <section id="skills" className="border-b border-[#1C1C1C] py-16 md:py-24 bg-[#F5F3E7]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-12 mb-12 pb-4 border-b border-[#1C1C1C]">
          <div className="col-span-12 md:col-span-4 flex items-center gap-3 font-mono text-xs">
            <span className="text-[#FF6B35] font-bold text-sm">02</span>
            <span className="font-bold tracking-widest text-[#1C1C1C]">TECHNICAL COMPETENCIES</span>
          </div>
          <div className="hidden md:block md:col-span-8 text-right font-mono text-xs text-[#1C1C1C]/60 uppercase">
            [MODULAR MATRIX — 12-COLUMN CAPABILITIES]
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1C1C] uppercase font-sans mb-12 max-w-3xl">
          PRECISION ENGINEERING WITH MODERN FRONTEND & BACKEND ARCHITECTURES.
        </h2>

        {/* 4-Column Skill Categories Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.index}
              className="border border-[#1C1C1C] p-6 bg-[#F5F3E7] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center border-b border-[#1C1C1C] pb-3 mb-4">
                  <span className="text-xs font-bold text-[#FF6B35]">
                    [{cat.index}]
                  </span>
                  <span className="text-[10px] uppercase text-[#1C1C1C]/60 tracking-wider">
                    CATEGORY
                  </span>
                </div>

                <h3 className="font-bold text-sm text-[#1C1C1C] tracking-wide mb-6 uppercase">
                  {cat.title}
                </h3>

                <ul className="space-y-3 font-sans text-xs">
                  {cat.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex justify-between items-center border-b border-[#1C1C1C]/15 pb-2"
                    >
                      <span className="font-medium text-[#1C1C1C]">
                        {skill.name}
                      </span>
                      {skill.coreTech ? (
                        <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 border border-[#1C1C1C] bg-[#1C1C1C] text-[#F5F3E7]">
                          CORE
                        </span>
                      ) : (
                        <span className="font-mono text-[10px] text-[#1C1C1C]/60">
                          {skill.level}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-3 border-t border-[#1C1C1C]/20 text-[10px] text-[#1C1C1C]/50 uppercase font-mono">
                STATUS: VERIFIED PROFICIENCY
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
