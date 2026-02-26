import { CVData } from "@/data/cv.types";

export const cvZhHans: CVData = {
  languageTag: "zh-hans",
  languageName: "简体中文",
  name: "Alex Tsao",
  role: "前端工程师",
  summary:
    "专注于打造可投入生产的 SaaS 产品。具备订阅制系统（Stripe）、可扩展 UI 架构与性能优化经验，并能与 PM、设计和后端团队协作，交付以用户为中心的功能。",
  contact: {
    email: "caowenjieko@gmail.com",
    phone: "+886983112189",
    location: "台湾，新北市",
    website: "https://alextsao.com",
    github: "https://github.com/supermanko1102",
    linkedin: "https://www.linkedin.com/in/supermanko1102/",
  },
  labels: {
    language: "语言",
    contact: "联系方式",
    experience: "工作经历",
    education: "学历",
    projects: "项目",
    sideProjects: "Side Project",
    skills: "技能",
    techStack: "技术栈",
  },
  experience: [
    {
      role: "前端工程师",
      company: "Aetheras",
      period: "2024 - 至今",
      location: "台湾",
      tech: ["React", "Next.js", "TypeScript", "React Native / Expo"],
      highlights: [
        "重构旧有组件架构，并使用 Tailwind CSS 与 shadcn/ui 重建设计系统，提升可扩展性与长期可维护性。",
        "建立可复用 UI 模式与设计 token，确保快速迭代下的界面一致性。",
        "设计并实现订阅状态机，完整管理 Stripe 支付生命周期（方案变更、续订与 webhook）。",
        "优化 Firebase 鉴权流程，保障 token 持久化安全并实现受保护路由下的平滑会话刷新。",
        "通过 bundle 优化与 dynamic import + lazy loading，将首屏加载时间降低 38%。",
        "与 PM 和后端工程师共同评估技术取舍，平衡需求、性能影响与实现复杂度。",
      ],
    },
    {
      role: "前端工程师",
      company: "Pst",
      period: "2024",
      location: "台湾",
      tech: ["JavaScript", "React Native", "jQuery", "Node.js"],
      highlights: [
        "开发实时环境监测平台，用于追踪工厂排放与监管执法。",
        "集成 TGOS GIS 与 JavaScript 地图组件，实现图层切换、缩放、标注与交互信息窗。",
        "设计并开发数据可视化看板，支持按地点与时间范围筛选历史趋势。",
        "与后端工程师紧密协作对接 REST API 与实时数据流，保证一致性与性能。",
      ],
    },
  ],
  education: [
    {
      school: "铭传大学",
      degree: "计算机科学与信息工程学士",
      period: "2016 - 2020",
      details: [],
    },
  ],
  projects: [
    {
      name: "订阅与支付生命周期系统",
      summary:
        "在 Aetheras 设计并落地 Stripe 订阅状态机，覆盖方案变更、续订、支付异常与 webhook 事件处理。",
      tech: ["React", "Next.js", "TypeScript", "Stripe", "Firebase"],
    },
    {
      name: "实时环境监测平台",
      summary:
        "在 Pst 开发环境监测与稽核平台，整合 TGOS GIS、地图交互模块与可筛选的数据可视化看板。",
      tech: ["JavaScript", "TGOS GIS", "jQuery", "Node.js", "REST API"],
    },
  ],
  sideProjects: [
    {
      name: "365 Coffee Deals",
      summary:
        "AI 驱动的优惠聚合系统，每日爬取新闻平台识别咖啡折扣，通过自动解析与 AI 过滤提取结构化优惠信息，并及时推送给用户。",
      tech: ["TypeScript", "Expo", "React Native", "Supabase", "AI"],
      link: "https://apps.apple.com/tw/app/%E5%92%96%E5%95%A1365-%E6%9C%80%E5%8D%B3%E6%99%82%E7%9A%84%E5%92%96%E5%95%A1%E5%84%AA%E6%83%A0%E8%88%87%E8%B2%B7%E4%B8%80%E9%80%81%E4%B8%80/id6756956010",
    },
    {
      name: "Mono AI",
      summary:
        "用于学习 AI Agent 与网站交互模型的极简 demo，覆盖从前端请求到后端 AI 响应的完整链路。",
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
      link: "https://github.com/supermanko1102/mono_ai",
    },
    {
      name: "Oflow",
      summary:
        "集成 LINE 的订单管理系统，帮助商家直接通过 LINE 消息管理客户订单。",
      tech: [
        "TypeScript",
        "Expo",
        "React Native",
        "Supabase",
        "AI",
        "Next.js",
        "Vercel",
      ],
      link: "https://oflow-website.vercel.app/login",
    },
  ],
  skills: [
    {
      category: "前端",
      items: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "产品与架构",
      items: ["Design Systems", "Performance Optimization", "SaaS Architecture"],
    },
    {
      category: "平台",
      items: ["Node.js", "Stripe", "Firebase", "Supabase"],
    },
  ],
};
