# Google for Developers — Swiss International Portfolio System

> **Architected by Kunal Patel** (Senior Fullstack Developer & Co-Founder @ Ornix Agency)  
> *Engineered using Google Antigravity IDE, Gemini 3.6 Flash Agentic Workflows, and Stitch MCP.*

---

## 📌 Executive Summary

This repository contains the production source code for the **Swiss / International Typographic Style Portfolio** of **Kunal Patel**. Built for the **Google for Developers Showcase**, the application embodies grid order, typographic precision, and high-density content presentation without unnecessary visual fluff.

Every pixel, column boundary, font token, and interaction has been crafted using **Google's Antigravity Agentic AI Suite** (powered by **Gemini 3.6 Flash**), incorporating **Stitch MCP UI generation** and Next.js Turbopack.

---

## 🎨 Swiss Design System Specifications

| Principle | Technical Execution |
| :--- | :--- |
| **Grid System** | **Strict 12-Column Baseline Grid** with full column alignment across all sections |
| **Background Surface** | Soft Beige (`#F5F3E7`) |
| **Text & Borders** | Deep Charcoal (`#1C1C1C`) with 1px solid structural grid borders |
| **Accent Rule** | **Royal Blue (`#2A5FFF`) used strictly 3 times total across the layout**: <br> 1. Hero Availability Pill <br> 2. BillingKitaab Featured Badge <br> 3. Contact Form Submit Button |
| **Secondary Highlight** | Warm Orange (`#FF6B35`) for section index numbers (`01`, `02`, `03`, `04`) and key metrics |
| **Corners & Effects** | `0px border-radius` (Sharp corners), `0 box-shadows`, `0 background-gradients` |
| **Typography** | `Inter` & `Space Grotesk` (Google Fonts) with crisp tabular numbers and micro uppercase labels |

---

## 🤖 Google Developer & Gemini Step-by-Step Architecture

### Step 1: Agentic Intent Analysis & Design Token Definition
Using Google DeepMind's **Gemini 3.6 Flash** model in Planning Mode, the architecture was designed to honor pure **Müller-Brockmann International Typographic Style**. Custom tokens were defined in `globals.css` alongside global resets enforcing `border-radius: 0 !important`.

### Step 2: Stitch MCP UI Generation & Component Modularization
Component trees were assembled in modular, high-performance Next.js Server & Client components:
- `Header.tsx`: Minimalist top bar with live Lucknow IST clock (`UTC+05:30`) and interactive grid toggle.
- `HeroSection.tsx`: Dual-column layout matching reference screenshot with developer portrait, technical annotations, and **Royal Blue Accent #1**.
- `AboutSection.tsx`: Structured Developer Profile Specification Card detailing BCA 3rd Year studies at Maharishi University of Information Technology and Ornix Agency co-founding experience.
- `SkillsSection.tsx`: 4-Column modular capabilities matrix.
- `ProjectsSection.tsx`: Catalog cards featuring **BillingKitaab** (**Royal Blue Accent #2**) and interactive detail drawer modal.
- `ContactSection.tsx`: Transmission entry form with **Royal Blue Accent #3** on the submit button.
- `GridOverlay.tsx`: Toggleable 12-column visual red grid inspection overlay.

### Step 3: Production Build & Asset Pipeline Optimization
Assets and project previews were processed and served via Next.js `next/image` with static page pre-rendering powered by Turbopack.

---

## 🚀 Showcased Systems & Products

1. **BillingKitaab** *(Featured System)* — Smart AI billing & accounting engine for small businesses. Replaced paper billing with instant digital invoicing, smart credit/overdue tracking, and automated inventory sync.
2. **SpaceFree (AquaMind)** — Logistics transport capacity platform monetizing spare cargo space in bikes, cars, and commercial trucks with real-time GPS tracking.
3. **StudyHive** — EdTech platform featuring 1:1 real-time peer battle exam modes and AI-driven mock test analytics.
4. **AwazGram** — Civic complaint reporting platform integrated with open-source APIs for photo authenticity verification and location timestamping.
5. **Ornix Agency Solutions** — High-performance e-commerce & agency frontend architectures delivering +10% conversion boosts.

---

## 💻 Tech Stack

- **Framework**: Next.js 16 (App Router & Turbopack)
- **UI Engine**: React 19, TypeScript 5
- **Styling**: Tailwind CSS v4, Vanilla CSS Design Tokens
- **Fonts**: `Inter` & `Space Grotesk` (Google Fonts)
- **Agentic AI Tools**: Google Antigravity IDE, Gemini 3.6 Flash (High), Stitch MCP

---

## ⚙️ Quick Start & Installation

### 1. Clone Repository
```bash
git clone https://github.com/KunalPatel1213/Google_for_developers.git
cd Google_for_developers
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🎯 Verification & Inspection Features

- **12-Column Red Grid Overlay**: Click **`GRID: OFF / ON`** in the top-right header to activate the visible red 12-column baseline grid overlay for layout inspection.
- **Project Detail Drawer**: Click on any project card (e.g., BillingKitaab) to open the interactive system architecture modal.

---

## 📄 License & Attribution

Developed by **Kunal Patel** for the **Google for Developers** Showcase. All rights reserved.
