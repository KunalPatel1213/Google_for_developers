"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "../data/portfolioData";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="border-b border-[#1C1C1C] py-16 md:py-24 bg-[#F5F3E7]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-12 mb-12 pb-4 border-b border-[#1C1C1C]">
          <div className="col-span-12 md:col-span-4 flex items-center gap-3 font-mono text-xs">
            <span className="text-[#FF6B35] font-bold text-sm">03</span>
            <span className="font-bold tracking-widest text-[#1C1C1C]">FEATURED PROJECTS & SYSTEMS</span>
          </div>
          <div className="hidden md:block md:col-span-8 text-right font-mono text-xs text-[#1C1C1C]/60 uppercase">
            [PRODUCT & ARCHITECTURE CATALOG]
          </div>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1C1C] uppercase font-sans">
              PRODUCING IMPACTFUL DIGITAL PRODUCTS & LOGISTICS ARCHITECTURES.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#1C1C1C]/70">
            SHOWCASING 05 CORE SYSTEMS
          </div>
        </div>

        {/* Projects Grid Cards (12-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`border border-[#1C1C1C] bg-[#F5F3E7] p-6 flex flex-col justify-between cursor-pointer group hover:bg-[#1C1C1C]/5 transition-colors relative ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div>
                {/* Project Header Info */}
                <div className="flex justify-between items-center border-b border-[#1C1C1C] pb-3 mb-6 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#FF6B35]">{project.code}</span>
                    <span className="text-[#1C1C1C]/60">[{project.category}]</span>
                  </div>

                  {project.featured ? (
                    /* ACCENT 2 OF 3: ROYAL BLUE (#2A5FFF) */
                    <span className="px-2.5 py-1 bg-[#2A5FFF] text-white font-bold text-[10px] tracking-wider uppercase">
                      01 // FEATURED SYSTEM
                    </span>
                  ) : (
                    <span className="text-[#1C1C1C]/60">{project.year}</span>
                  )}
                </div>

                {/* Project Preview Image */}
                <div className="relative w-full aspect-[16/9] border border-[#1C1C1C] mb-6 overflow-hidden bg-[#EAE7D6]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] uppercase tracking-tight font-sans mb-2 group-hover:text-[#FF6B35] transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs font-bold text-[#1C1C1C]/80 uppercase mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans text-sm leading-relaxed text-[#1C1C1C]/90 mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack & Action Footer */}
              <div className="border-t border-[#1C1C1C] pt-4 font-mono text-xs flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 border border-[#1C1C1C]/30 text-[11px] text-[#1C1C1C]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 font-bold text-[#1C1C1C] group-hover:translate-x-1 transition-transform">
                  <span>INSPECT SYSTEM</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1C1C]/70 backdrop-blur-none">
          <div className="bg-[#F5F3E7] border-2 border-[#1C1C1C] w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-8 font-sans">
            <div className="flex justify-between items-start border-b border-[#1C1C1C] pb-4 mb-6 font-mono">
              <div>
                <span className="text-xs text-[#FF6B35] font-bold">
                  {selectedProject.code} // DETAILED SPECIFICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#1C1C1C] mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-3 py-1.5 border border-[#1C1C1C] bg-[#1C1C1C] text-[#F5F3E7] text-xs font-mono font-bold hover:bg-transparent hover:text-[#1C1C1C] transition-colors"
              >
                CLOSE [ESC]
              </button>
            </div>

            <div className="relative w-full aspect-[16/9] border border-[#1C1C1C] mb-6 overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-base text-[#1C1C1C] leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-6 border-t border-b border-[#1C1C1C] py-4">
              <h4 className="font-mono text-xs text-[#FF6B35] font-bold uppercase mb-3">
                [KEY ARCHITECTURAL FEATURES]
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-[#1C1C1C]/90 font-mono">
                {selectedProject.keyFeatures.map((feat, fIdx) => (
                  <li key={fIdx}>{feat}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6 font-mono text-xs">
              <span className="font-bold text-[#1C1C1C] uppercase block mb-1">
                SYSTEM IMPACT:
              </span>
              <p className="text-[#1C1C1C]/80">{selectedProject.impact}</p>
            </div>

            <div className="flex flex-wrap gap-3 font-mono text-xs pt-4 border-t border-[#1C1C1C]/20">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#1C1C1C] bg-[#1C1C1C] text-[#F5F3E7] font-bold hover:bg-transparent hover:text-[#1C1C1C] transition-colors"
                >
                  GITHUB REPOSITORY →
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 border border-[#1C1C1C] text-[#1C1C1C] font-bold hover:bg-[#1C1C1C] hover:text-[#F5F3E7] transition-colors"
              >
                RETURN TO SYSTEM CATALOG
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
