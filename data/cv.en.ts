import { CVData } from "@/data/cv.types";

export const cvEn: CVData = {
  languageTag: "en",
  languageName: "English",
  name: "Jamie Chen",
  role: "Frontend Engineer",
  summary:
    "Frontend engineer focused on building maintainable SaaS products. Experienced in design systems, frontend architecture, and performance optimization. Comfortable collaborating across product, design, and backend teams to deliver user-centered features.",
  contact: {
    email: "hello@example.com",
    phone: "+1 (555) 010-1234",
    location: "San Francisco, CA, USA",
    website: "https://example.dev",
    github: "https://github.com/example",
    linkedin: "https://www.linkedin.com/in/example/",
  },
  labels: {
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    sideProjects: "Side Projects",
    skills: "Skills",
    techStack: "Tech stack",
  },
  experience: [
    {
      role: "Frontend Engineer",
      company: "Northstar Labs",
      period: "2022 - Present",
      location: "Remote",
      tech: ["React", "Next.js", "TypeScript", "GraphQL"],
      highlights: [
        "Led migration from a legacy UI layer to a reusable component system, reducing duplicated code and onboarding time.",
        "Implemented a shared token and theming strategy across web surfaces to improve visual consistency.",
        "Partnered with backend engineers to redesign key API workflows and reduce frontend error rates.",
        "Improved Core Web Vitals through bundle splitting, route-level caching, and image optimization.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "BrightCart",
      period: "2020 - 2022",
      location: "Austin, TX, USA",
      tech: ["Vue", "TypeScript", "Node.js", "REST API"],
      highlights: [
        "Built checkout and account features for an ecommerce platform used by SMB customers.",
        "Created analytics dashboards for conversion and retention reporting used by product managers.",
        "Introduced type-safe API clients and frontend test coverage for high-traffic pages.",
        "Worked closely with design to standardize interaction patterns and accessibility behavior.",
      ],
    },
  ],
  education: [
    {
      school: "State University",
      degree: "B.S. in Computer Science",
      period: "2016 - 2020",
      details: [],
    },
  ],
  projects: [
    {
      name: "Subscription Portal Revamp",
      summary:
        "Redesigned subscription management flows for upgrades, downgrades, and billing history with improved clarity and lower support volume.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    },
    {
      name: "Operations Dashboard",
      summary:
        "Built an internal dashboard for monitoring incidents, deployment status, and system KPIs across teams.",
      tech: ["React", "TypeScript", "Node.js", "Chart.js"],
    },
  ],
  sideProjects: [
    {
      name: "TaskFlow",
      summary:
        "A lightweight personal planning app with calendar views, reminders, and keyboard-first interactions.",
      tech: ["React", "TypeScript", "Supabase"],
      link: "https://github.com/example/taskflow",
    },
    {
      name: "UI Patterns Playground",
      summary:
        "A collection of reusable UI patterns and accessibility examples for rapid prototyping and team sharing.",
      tech: ["Next.js", "Tailwind CSS", "Storybook"],
      link: "https://github.com/example/ui-patterns-playground",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Accessibility"],
    },
    {
      category: "Product & Architecture",
      items: ["Design Systems", "Frontend Architecture", "Performance Optimization"],
    },
    {
      category: "Platform & Tools",
      items: ["Node.js", "GraphQL", "PostgreSQL", "CI/CD"],
    },
  ],
};
