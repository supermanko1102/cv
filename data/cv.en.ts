import { CVData } from "@/data/cv.types";

export const cvEn: CVData = {
  languageTag: "en",
  languageName: "English",
  name: "Alex Tsao",
  role: "Frontend Engineer",
  summary:
    "Frontend engineer building production SaaS applications. Experienced in subscription-based systems (Stripe), scalable UI architecture, and performance optimization. Strong product mindset with hands-on experience collaborating with PM and design to deliver user-centric features.",
  contact: {
    email: "caowenjieko@gmail.com",
    phone: "+886983112189",
    location: "New Taipei City, Taiwan",
    website: "https://alextsao.com",
    github: "https://github.com/supermanko1102",
    linkedin: "https://www.linkedin.com/in/supermanko1102/",
  },
  labels: {
    language: "Language",
    contact: "Contact",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    skills: "Skills",
    techStack: "Tech stack",
  },
  experience: [
    {
      role: "Frontend Engineer",
      company: "Aetheras",
      period: "2024 - Present",
      location: "Taiwan",
      tech: ["React", "Next.js", "TypeScript", "React Native / Expo"],
      highlights: [
        "Refactored legacy component architecture and rebuilt the design system using Tailwind CSS and shadcn/ui, improving scalability and long-term maintainability.",
        "Established reusable UI patterns and standardized design tokens to keep consistency across rapidly evolving features.",
        "Designed and implemented a subscription state machine to manage the full Stripe payment lifecycle, including plan changes, renewals, and webhook handling.",
        "Optimized authentication flow with Firebase to ensure secure token persistence and seamless session refresh across protected routes.",
        "Reduced initial load time by 38% by optimizing bundle size and implementing dynamic imports with lazy loading.",
        "Worked with PM and backend engineers on technical trade-offs to balance feature scope, performance impact, and implementation complexity.",
      ],
    },
    {
      role: "Frontend Engineer",
      company: "Pst",
      period: "2024",
      location: "Taiwan",
      tech: ["JavaScript", "React Native", "jQuery", "Node.js"],
      highlights: [
        "Developed a real-time environmental monitoring platform for tracking factory emissions and regulatory enforcement.",
        "Integrated TGOS GIS and JavaScript-based map components to implement dynamic layer switching, zooming, annotations, and interactive info windows.",
        "Built data visualization dashboards to present historical trends with filtering by location and time range.",
        "Collaborated closely with backend engineers to integrate REST APIs and real-time data streams while maintaining consistency and performance.",
      ],
    },
  ],
  education: [
    {
      school: "Ming Chuan University",
      degree: "Bachelor's Degree in Computer Science and Information Engineering",
      period: "2016 - 2020",
      details: [],
    },
  ],
  projects: [
    {
      name: "365 Coffee Deals",
      summary:
        "AI-driven promotion aggregation app that crawls news platforms daily to detect coffee discounts, extracts structured promotion data, and pushes timely notifications.",
      tech: ["TypeScript", "Expo", "React Native", "Supabase", "AI"],
    },
    {
      name: "Mono AI",
      summary:
        "A minimal demo project to learn the interaction model between an AI agent and a website, from frontend requests to backend AI responses.",
      tech: [
        "TypeScript",
        "Node.js",
        "Express",
        "Genkit",
        "Next.js",
        "React",
        "pnpm",
        "SQLite",
      ],
    },
    {
      name: "Oflow",
      summary:
        "A LINE-integrated order management system that helps merchants manage customer orders directly through LINE messages.",
      tech: [
        "TypeScript",
        "Expo",
        "React Native",
        "Supabase",
        "AI",
        "Next.js",
        "Vercel",
      ],
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Product & Architecture",
      items: ["Design Systems", "Performance Optimization", "SaaS Architecture"],
    },
    {
      category: "Platform",
      items: ["Node.js", "Stripe", "Firebase", "Supabase"],
    },
  ],
};
