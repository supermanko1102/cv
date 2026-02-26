import { CVData } from "@/data/cv.types";

export const cvZhHant: CVData = {
  languageTag: "zh-hant",
  languageName: "繁體中文",
  name: "Alex Tsao",
  role: "前端工程師",
  summary:
    "專注於打造可投入生產的 SaaS 產品。具備訂閱制系統（Stripe）、可擴展 UI 架構與效能優化經驗，並能與 PM、設計與後端團隊協作，交付以使用者為中心的功能。",
  contact: {
    email: "caowenjieko@gmail.com",
    phone: "+886983112189",
    location: "台灣，新北市",
    website: "https://alextsao.com",
    github: "https://github.com/supermanko1102",
    linkedin: "https://www.linkedin.com/in/supermanko1102/",
  },
  labels: {
    language: "語言",
    contact: "聯絡方式",
    experience: "工作經歷",
    education: "學歷",
    projects: "專案",
    sideProjects: "Side Project",
    skills: "技能",
    techStack: "技術堆疊",
  },
  experience: [
    {
      role: "前端工程師",
      company: "Aetheras",
      period: "2024 - 至今",
      location: "台灣",
      tech: ["React", "Next.js", "TypeScript", "React Native / Expo"],
      highlights: [
        "主導前端架構重構，並以 Tailwind CSS 與 shadcn/ui 重建設計系統，提升可擴展性與維護效率。",
        "設計並實作 Stripe 訂閱狀態機，完整覆蓋方案變更、續訂與 webhook 事件處理。",
        "透過 bundle 優化與 dynamic import + lazy loading，將首屏載入時間降低 38%。",
        "與 PM、設計與後端共同評估技術取捨，平衡交付速度、效能與可維護性。",
      ],
    },
    {
      role: "前端工程師",
      company: "Pst",
      period: "2024",
      location: "台灣",
      tech: ["JavaScript", "React Native", "jQuery", "Node.js"],
      highlights: [
        "開發即時環境監測平台，支援工廠排放追蹤與法規稽核流程。",
        "整合 TGOS GIS 與地圖互動元件，完成圖層切換、縮放、標註與資訊視窗功能。",
        "建置可篩選的資料視覺化儀表板並串接 REST API 與即時資料流，提升分析效率與穩定性。",
      ],
    },
  ],
  education: [
    {
      school: "銘傳大學",
      degree: "資訊工程學系學士",
      period: "2016 - 2020",
      details: [],
    },
  ],
  projects: [
    {
      name: "訂閱與付款生命週期系統",
      summary:
        "於 Aetheras 設計並落地 Stripe 訂閱狀態機，涵蓋方案變更、續訂、付款異常與 webhook 事件處理。",
      tech: ["React", "Next.js", "TypeScript", "Stripe", "Firebase"],
    },
    {
      name: "即時環境監測平台",
      summary:
        "於 Pst 開發環境監測與稽核平台，整合 TGOS GIS、地圖互動模組與可篩選的可視化儀表板。",
      tech: ["JavaScript", "TGOS GIS", "jQuery", "Node.js", "REST API"],
    },
  ],
  sideProjects: [
    {
      name: "365 Coffee Deals",
      summary:
        "AI 驅動的優惠彙整系統，每日爬取新聞平台以偵測咖啡折扣，並透過解析與 AI 過濾抽取結構化優惠資訊，即時推播給使用者。",
      tech: ["TypeScript", "Expo", "React Native", "Supabase", "AI"],
      link: "https://apps.apple.com/tw/app/%E5%92%96%E5%95%A1365-%E6%9C%80%E5%8D%B3%E6%99%82%E7%9A%84%E5%92%96%E5%95%A1%E5%84%AA%E6%83%A0%E8%88%87%E8%B2%B7%E4%B8%80%E9%80%81%E4%B8%80/id6756956010",
    },
    {
      name: "Mono AI",
      summary:
        "用來學習 AI Agent 與網站互動模型的極簡 demo，涵蓋前端請求到後端 AI 回應的完整流程。",
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
        "整合 LINE 的訂單管理系統，協助商家直接透過 LINE 訊息管理客戶訂單。",
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
      category: "JS",
      items: [
        "熟練使用 JavaScript ES6+ 新特性",
      ],
    },
    {
      category: "程式語言",
      items: [
        "熟練使用 React 與 深層Diff演算法設計思路",
      ],
    },
    {
      category: "跨平台應用",
      items: ["熟悉 React Native 雙平台開發以及上架流程"],
    },
    {
      category: "可視化",
      items: [
        "熟練使用 Reachart 以及Dashboard的介面搭建",
      ],
    },
    {
      category: "後端",
      items: [
        "熟悉 Node.js 與 Supabase、Firebase，具備基礎調優能力",
      ],
    },
    {
      category: "工程化",
      items: ["熟練掌握前端元件設計思想，具主導部門內部前端元件設計經驗"],
    },
    {
      category: "組織協作",
      items: ["具備跨團隊協作與推動能力，整合部門間的技術溝通與協作"],
    },
    {
      category: "排險",
      items: ["可針對生產環境問題進行排查與定位透過GCP監控Log"],
    },
  ],
};
