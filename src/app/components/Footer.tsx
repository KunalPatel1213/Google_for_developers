"use client";

import { PERSONAL_INFO } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-b border-[#1C1C1C] bg-[#1C1C1C] text-[#F5F3E7] py-12 select-none font-mono text-xs">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6 flex flex-col justify-between space-y-4">
          <div>
            <span className="text-[#FF6B35] font-bold block mb-1">
              KUNAL PATEL — SENIOR FRONTEND DEVELOPER
            </span>
            <p className="text-xs text-[#F5F3E7]/70 font-sans max-w-md">
              Order. Everything lines up. The text does the work, not the decoration. High-density Swiss grid layout crafted with Next.js and pure CSS precision.
            </p>
          </div>
          <div className="text-[10px] text-[#F5F3E7]/40">
            © {new Date().getFullYear()} KUNAL PATEL. ALL RIGHTS RESERVED.
          </div>
        </div>

        <div className="col-span-6 md:col-span-3 space-y-2">
          <span className="text-[#FF6B35] font-bold block mb-3">
            SYSTEM INDEX
          </span>
          <ul className="space-y-1 text-[#F5F3E7]/80">
            <li><a href="#about" className="hover:text-white">01 // ABOUT</a></li>
            <li><a href="#skills" className="hover:text-white">02 // SKILLS</a></li>
            <li><a href="#projects" className="hover:text-white">03 // WORK</a></li>
            <li><a href="#contact" className="hover:text-white">04 // CONTACT</a></li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-3 space-y-2">
          <span className="text-[#FF6B35] font-bold block mb-3">
            NETWORKS
          </span>
          <ul className="space-y-1 text-[#F5F3E7]/80">
            <li>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                GITHUB // {PERSONAL_INFO.githubHandle}
              </a>
            </li>
            <li>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                LINKEDIN // {PERSONAL_INFO.linkedinHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white">
                EMAIL // {PERSONAL_INFO.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
