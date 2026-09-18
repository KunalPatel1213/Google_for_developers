"use client";

import { useEffect, useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface HeaderProps {
  showGrid: boolean;
  setShowGrid: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export default function Header({ showGrid, setShowGrid }: HeaderProps) {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTimeStr(formatted + " IST");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#F5F3E7]/95 backdrop-blur-none border-b border-[#1C1C1C] select-none">
      {/* Main navigation header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 grid grid-cols-12 items-center min-h-[72px]">
        {/* Brand Logo & Name */}
        <div className="col-span-8 md:col-span-4 flex items-center gap-3 py-3 border-r border-[#1C1C1C]/20 pr-4">
          <div className="w-8 h-8 border border-[#1C1C1C] bg-[#1C1C1C] text-[#F5F3E7] flex items-center justify-center font-mono font-bold text-sm">
            KP
          </div>
          <a href="#" className="flex flex-col group">
            <span className="font-bold text-base sm:text-lg tracking-tight text-[#1C1C1C] font-mono group-hover:text-[#FF6B35] transition-colors uppercase">
              KUNAL PATEL
            </span>
            <span className="font-mono text-[10px] text-[#1C1C1C]/60 tracking-wider uppercase">
              SENIOR FRONTEND DEVELOPER
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex md:col-span-5 items-center justify-center gap-6 font-mono text-xs tracking-wider">
          <a
            href="#about"
            className="hover:text-[#FF6B35] transition-colors py-2 border-b-2 border-transparent hover:border-[#FF6B35]"
          >
            ABOUT
          </a>
          <a
            href="#skills"
            className="hover:text-[#FF6B35] transition-colors py-2 border-b-2 border-transparent hover:border-[#FF6B35]"
          >
            SKILLS
          </a>
          <a
            href="#projects"
            className="hover:text-[#FF6B35] transition-colors py-2 border-b-2 border-transparent hover:border-[#FF6B35]"
          >
            WORK
          </a>
          <a
            href="#contact"
            className="hover:text-[#FF6B35] transition-colors py-2 border-b-2 border-transparent hover:border-[#FF6B35]"
          >
            CONTACT
          </a>
        </nav>

        {/* Right CTA & Grid Toggle */}
        <div className="col-span-4 md:col-span-3 flex items-center justify-end gap-3 font-mono text-xs pl-4 border-l border-[#1C1C1C]/20">
          <button
            onClick={() => setShowGrid((prev) => !prev)}
            className={`px-2.5 py-1.5 border border-[#1C1C1C] text-[10px] font-bold uppercase transition-colors hidden sm:block ${
              showGrid
                ? "bg-[#1C1C1C] text-[#F5F3E7]"
                : "bg-transparent text-[#1C1C1C] hover:bg-[#1C1C1C]/10"
            }`}
          >
            {showGrid ? "GRID: ON" : "GRID: OFF"}
          </button>

          <a
            href="#contact"
            className="px-4 py-2 border border-[#1C1C1C] bg-[#1C1C1C] text-[#F5F3E7] font-bold uppercase tracking-wider text-xs hover:bg-transparent hover:text-[#1C1C1C] transition-colors"
          >
            LET'S TALK →
          </a>
        </div>
      </div>
    </header>
  );
}
