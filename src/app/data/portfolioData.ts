export interface Project {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: string;
  featured?: boolean;
  year: string;
  description: string;
  keyFeatures: string[];
  impact: string;
  techStack: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface SkillCategory {
  index: string;
  title: string;
  skills: { name: string; level: string; coreTech?: boolean }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Kunal Patel",
  role: "Senior Frontend Developer",
  subRole: "Co-Founder @ Ornix Agency",
  education: "BCA 3rd Year (MUIT 2024–2027)",
  location: "Lucknow, UP, India",
  timezone: "UTC+05:30",
  email: "kunno1751@gmail.com",
  phone: "+91 7755858808",
  github: "https://github.com/KunalPatel1213",
  githubHandle: "KunalPatel1213",
  linkedin: "https://linkedin.com/in/kunal-patel-b1bb0431a",
  linkedinHandle: "kunal-patel-b1bb0431a",
  heroHeadline: "Hi, I’m Kunal Patel — Senior Frontend Developer crafting clean, responsive web apps.",
  bio: "BCA 3rd year student with 2+ years of production Next.js experience. Co-founder of Ornix Agency, specialized in engineering AI-powered billing systems, logistics management applications, and ultra-crisp frontend architectures with strict modular order.",
  stats: [
    { label: "YEARS NEXT.JS", value: "02+" },
    { label: "AGENCY FOUNDED", value: "ORNIX" },
    { label: "CORE PROJECTS", value: "05+" },
    { label: "HACKATHONS", value: "RUNNER-UP" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    index: "01",
    title: "FRONTEND ARCHITECTURE",
    skills: [
      { name: "Next.js (App Router)", level: "ADVANCED", coreTech: true },
      { name: "React.js", level: "ADVANCED", coreTech: true },
      { name: "TypeScript", level: "INTERMEDIATE" },
      { name: "JavaScript (ES6+)", level: "ADVANCED" },
      { name: "HTML5 & Vanilla CSS", level: "EXPERT" },
      { name: "Tailwind CSS", level: "ADVANCED" },
    ],
  },
  {
    index: "02",
    title: "UI/UX & ANIMATION",
    skills: [
      { name: "Swiss Grid Systems", level: "EXPERT", coreTech: true },
      { name: "Responsive Layouts", level: "EXPERT" },
      { name: "GSAP Animation", level: "INTERMEDIATE" },
      { name: "Framer Motion", level: "INTERMEDIATE" },
      { name: "Design System Tokens", level: "ADVANCED" },
    ],
  },
  {
    index: "03",
    title: "BACKEND & DATA",
    skills: [
      { name: "Django REST Framework", level: "INTERMEDIATE", coreTech: true },
      { name: "Python", level: "INTERMEDIATE" },
      { name: "FastAPI", level: "INTERMEDIATE" },
      { name: "MySQL Database", level: "INTERMEDIATE" },
      { name: "RESTful API Integration", level: "ADVANCED" },
    ],
  },
  {
    index: "04",
    title: "WORKFLOW & AI TOOLS",
    skills: [
      { name: "Git & GitHub Workflows", level: "ADVANCED", coreTech: true },
      { name: "AI Tools (Gemini, ChatGPT, Copilot)", level: "EXPERT" },
      { name: "Agile & Team Collaboration", level: "ADVANCED" },
      { name: "Technical Documentation", level: "ADVANCED" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "billingkitaab",
    code: "PRJ-01",
    title: "BillingKitaab",
    subtitle: "Smart Billing & Accounting for Small Businesses",
    category: "AI BILLING SYSTEM",
    featured: true,
    year: "2024",
    description: "Replaced manual paper-based invoicing for shopkeepers with a high-efficiency digital accounting engine. Enables instant PDF invoice generation, smart credit/overdue tracking, and automated inventory sync.",
    keyFeatures: [
      "Instant PDF invoice creation & direct customer sharing",
      "Smart credit, debit, and overdue payment tracking",
      "Automated inventory management with low-stock alerts",
      "Clean, high-contrast dashboard tailored for rapid entry",
    ],
    impact: "Delivered faster billing, improved ledger accuracy, and enhanced retail customer experience.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Django REST"],
    image: "/billingkitaab.jpg",
    github: "https://github.com/KunalPatel1213",
  },
  {
    id: "aquamind",
    code: "PRJ-02",
    title: "SpaceFree (AquaMind)",
    subtitle: "Smart Transport & Delivery Logistics Platform",
    category: "LOGISTICS ARCHITECTURE",
    featured: false,
    year: "2024",
    description: "Pioneered a space-sharing logistics platform that monetizes unused transport capacity across bikes, cars, and commercial trucks with real-time shipment monitoring.",
    keyFeatures: [
      "Provider route registration & available space listing",
      "Capacity booking & secure payment settlement",
      "Real-time shipment GPS tracking & status timeline",
      "Multi-vehicle support (Bikes, Cars, Fleet Trucks)",
    ],
    impact: "Provided affordable delivery for shippers while enabling transport providers to monetize spare cargo space.",
    techStack: ["React.js", "Next.js", "REST APIs", "GSAP", "Tailwind CSS"],
    image: "/aquamind.jpg",
    github: "https://github.com/KunalPatel1213",
  },
  {
    id: "studyhive",
    code: "PRJ-03",
    title: "StudyHive",
    subtitle: "AI-Powered Competitive Exam & Mock Analysis Platform",
    category: "EDTECH PLATFORM",
    featured: false,
    year: "2023",
    description: "EdTech platform offering AI-driven personalized test analysis and real-time 1:1 peer competition modes simulating actual examination environments.",
    keyFeatures: [
      "1:1 Real-time peer battle exam mode",
      "AI-driven weakness breakdown & target practice",
      "Automated performance metrics & speed analytics",
    ],
    impact: "Boosted student retention and test accuracy through direct competitive peer challenges.",
    techStack: ["React.js", "Django REST", "MySQL", "Tailwind"],
    image: "/billingkitaab.jpg",
    github: "https://github.com/KunalPatel1213",
  },
  {
    id: "awazgram",
    code: "PRJ-04",
    title: "AwazGram",
    subtitle: "Civic Issue Reporting & API Verification Engine",
    category: "CIVIC TECH",
    featured: false,
    year: "2023",
    description: "Real-time complaint platform empowering citizens to report local municipal issues with photo evidence verified for authenticity and location timestamps.",
    keyFeatures: [
      "Photo timestamp & EXIF authenticity verification",
      "Open-source API integration for municipal tagging",
      "Real-time complaint status dashboard",
    ],
    impact: "Ensured reliable community feedback and improved municipal response transparency.",
    techStack: ["React.js", "Python APIs", "Tailwind", "JavaScript"],
    image: "/aquamind.jpg",
    github: "https://github.com/KunalPatel1213",
  },
  {
    id: "ornix-ecommerce",
    code: "PRJ-05",
    title: "Ornix Agency Solutions",
    subtitle: "High-Performance E-Commerce & Agency Frontend Architecture",
    category: "FRONTEND AGENCY",
    featured: false,
    year: "2023–PRESENT",
    description: "Client solutions developed under Ornix Agency focused on conversion rate optimization, responsive speed, and visual presentation.",
    keyFeatures: [
      "Modular design system components",
      "Optimized load times and high web vitals scores",
      "Simplified checkout workflows boosting conversions by +10%",
    ],
    impact: "Elevated product clarity, enhanced brand trust, and drove direct sales growth.",
    techStack: ["Next.js", "React.js", "Tailwind", "Framer Motion"],
    image: "/billingkitaab.jpg",
    github: "https://github.com/KunalPatel1213",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2023 — PRESENT",
    role: "Co-Founder & Senior Frontend Developer",
    organization: "Ornix Agency",
    location: "Lucknow, India",
    highlights: [
      "Architected responsive Next.js frontend applications for e-commerce and SaaS clients.",
      "Delivered customer experience refactors that increased client conversion rates by 10%.",
      "Engineered reusable Swiss component libraries and strict design tokens.",
    ],
  },
  {
    period: "2024 — 2027",
    role: "BCA Undergraduate (3rd Year)",
    organization: "Maharishi University of Information Technology",
    location: "Lucknow, India",
    highlights: [
      "Specializing in Software Engineering, Web Technologies, and Data Structures.",
      "Runner-up at Samosav Hackathon; active participant across 3 national hackathons.",
      "Spearheaded collaborative student software engineering projects.",
    ],
  },
];
