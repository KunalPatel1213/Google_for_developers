"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Next.js Web Application",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", projectType: "Next.js Web Application", message: "" });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="border-b border-[#1C1C1C] py-16 md:py-24 bg-[#F5F3E7]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-12 mb-12 pb-4 border-b border-[#1C1C1C]">
          <div className="col-span-12 md:col-span-4 flex items-center gap-3 font-mono text-xs">
            <span className="text-[#FF6B35] font-bold text-sm">04</span>
            <span className="font-bold tracking-widest text-[#1C1C1C]">COMMUNICATION & INQUIRIES</span>
          </div>
          <div className="hidden md:block md:col-span-8 text-right font-mono text-xs text-[#1C1C1C]/60 uppercase">
            [DIRECT RESPONSE SYSTEM]
          </div>
        </div>

        {/* 12-Column Main Contact Grid */}
        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Direct Email */}
          <div className="col-span-12 lg:col-span-5 space-y-8 font-mono">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1C1C] uppercase font-sans mb-4">
                INITIATE A CONVERSATION.
              </h2>
              <p className="text-sm font-sans text-[#1C1C1C]/80 leading-relaxed">
                Available for Senior Frontend consulting, custom Next.js web application builds, agency partnerships, and AI billing integration projects.
              </p>
            </div>

            {/* Direct Contact Table */}
            <div className="border border-[#1C1C1C] p-6 bg-[#F5F3E7] space-y-4 text-xs">
              <div className="flex justify-between items-center border-b border-[#1C1C1C]/20 pb-3">
                <span className="text-[#1C1C1C]/60">PRIMARY EMAIL</span>
                <button
                  onClick={handleCopyEmail}
                  className="font-bold underline text-[#1C1C1C] hover:text-[#FF6B35] transition-colors"
                >
                  {copiedEmail ? "[COPIED TO CLIPBOARD]" : PERSONAL_INFO.email}
                </button>
              </div>

              <div className="flex justify-between items-center border-b border-[#1C1C1C]/20 pb-3">
                <span className="text-[#1C1C1C]/60">TELEPHONE</span>
                <span className="font-bold">{PERSONAL_INFO.phone}</span>
              </div>

              <div className="flex justify-between items-center border-b border-[#1C1C1C]/20 pb-3">
                <span className="text-[#1C1C1C]/60">LOCATION</span>
                <span className="font-bold">{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex justify-between items-center border-b border-[#1C1C1C]/20 pb-3">
                <span className="text-[#1C1C1C]/60">GITHUB</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-[#FF6B35]"
                >
                  {PERSONAL_INFO.githubHandle}
                </a>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#1C1C1C]/60">LINKEDIN</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-[#FF6B35]"
                >
                  {PERSONAL_INFO.linkedinHandle}
                </a>
              </div>
            </div>

            <div className="p-4 border border-[#1C1C1C] bg-[#1C1C1C] text-[#F5F3E7] text-xs">
              <span className="text-[#FF6B35] font-bold block mb-1">
                RESPONSE GUARANTEE
              </span>
              <span>Inquiries answered within 24 business hours. IST (UTC+05:30).</span>
            </div>
          </div>

          {/* Right Column: Minimalist Swiss Form */}
          <div className="col-span-12 lg:col-span-7 border border-[#1C1C1C] p-6 sm:p-8 bg-[#F5F3E7]">
            <h3 className="font-mono text-xs font-bold text-[#FF6B35] tracking-widest uppercase mb-6">
              [TRANSMISSION FORM // INQUIRY ENTRY]
            </h3>

            {submitted ? (
              <div className="p-8 border border-[#1C1C1C] bg-[#1C1C1C] text-[#F5F3E7] font-mono text-center space-y-4">
                <div className="text-xl font-bold text-[#FF6B35]">
                  TRANSMISSION ACKNOWLEDGED
                </div>
                <p className="text-xs text-[#F5F3E7]/80">
                  Thank you, {formData.name || "sender"}. Your inquiry regarding {formData.projectType} has been recorded.
                </p>
                <div className="text-[10px] text-[#F5F3E7]/50 pt-2">
                  DISPATCH LOGGED // IST TIMESTAMP
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                <div>
                  <label className="block text-[#1C1C1C]/70 uppercase mb-2 font-bold">
                    01 // YOUR NAME / ORGANIZATION *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova / Acme Corp"
                    className="w-full p-3 border border-[#1C1C1C] bg-[#F5F3E7] text-[#1C1C1C] focus:outline-none focus:bg-white text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[#1C1C1C]/70 uppercase mb-2 font-bold">
                    02 // EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. elena@acme.com"
                    className="w-full p-3 border border-[#1C1C1C] bg-[#F5F3E7] text-[#1C1C1C] focus:outline-none focus:bg-white text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[#1C1C1C]/70 uppercase mb-2 font-bold">
                    03 // INQUIRY CATEGORY
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full p-3 border border-[#1C1C1C] bg-[#F5F3E7] text-[#1C1C1C] focus:outline-none text-sm font-sans"
                  >
                    <option value="Next.js Web Application">Next.js Web Application Build</option>
                    <option value="AI Billing / SaaS System">AI Billing & Accounting System</option>
                    <option value="Ornix Agency Partnership">Ornix Agency Partnership</option>
                    <option value="Frontend Architecture Refactor">Frontend Architecture Refactor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#1C1C1C]/70 uppercase mb-2 font-bold">
                    04 // PROJECT DETAILS / SPECIFICATIONS *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requirements, timeline, and scope..."
                    className="w-full p-3 border border-[#1C1C1C] bg-[#F5F3E7] text-[#1C1C1C] focus:outline-none focus:bg-white text-sm font-sans"
                  ></textarea>
                </div>

                {/* ACCENT 3 OF 3: ROYAL BLUE (#2A5FFF) */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#2A5FFF] border border-[#1C1C1C] text-white font-mono text-sm font-bold uppercase tracking-wider hover:opacity-95 transition-opacity"
                >
                  SEND INQUIRY → [TRANSMIT]
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
