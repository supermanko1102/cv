import { CVData } from "@/data/cv.types";

export const cvZhHant: CVData = {
  languageTag: "zh-hant",
  languageName: "繁體中文",
  name: "Jamie Chen",
  role: "前端工程師",
  summary:
    "專注於打造可維護且可擴展的 SaaS 產品。具備設計系統、前端架構與效能優化經驗，並能與產品、設計與後端團隊協作，交付以使用者為中心的功能。",
  contact: {
    email: "hello@example.com",
    phone: "+1 (555) 010-1234",
    location: "美國，舊金山",
    website: "https://example.dev",
    github: "https://github.com/example",
    linkedin: "https://www.linkedin.com/in/example/",
  },
  labels: {
    experience: "工作經歷",
    education: "學歷",
    projects: "專案",
    sideProjects: "個人專案",
    skills: "技能",
    techStack: "技術堆疊",
  },
  experience: [
    {
      role: "前端工程師",
      company: "Northstar Labs",
      period: "2022 - 至今",
      location: "遠端",
      tech: ["React", "Next.js", "TypeScript", "GraphQL"],
      highlights: [
        "主導前端元件系統重整，降低重複程式碼並縮短新成員上手時間。",
        "建立跨站台可重用的設計 token 與主題規範，提升介面一致性。",
        "與後端協作重構核心 API 流程，降低前端錯誤率並提升可預測性。",
        "透過程式切分、快取策略與圖片優化改善 Core Web Vitals 表現。",
      ],
    },
    {
      role: "前端開發工程師",
      company: "BrightCart",
      period: "2020 - 2022",
      location: "美國，奧斯汀",
      tech: ["Vue", "TypeScript", "Node.js", "REST API"],
      highlights: [
        "開發電商平台結帳與帳號管理功能，支援中小型客戶日常營運。",
        "建置轉換率與留存分析儀表板，提供產品決策所需的可視化資料。",
        "導入型別安全 API client 與前端測試，提升高流量頁面穩定度。",
        "與設計協作統一互動模式與無障礙細節，提升整體體驗一致性。",
      ],
    },
  ],
  education: [
    {
      school: "State University",
      degree: "資訊工程學士",
      period: "2016 - 2020",
      details: [],
    },
  ],
  projects: [
    {
      name: "訂閱後台改版專案",
      summary:
        "重新設計升降級、帳單歷史與付款流程，改善使用理解成本並降低客服工單。",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    },
    {
      name: "營運監控儀表板",
      summary:
        "建置內部監控平台，整合事件告警、部署狀態與關鍵指標追蹤。",
      tech: ["React", "TypeScript", "Node.js", "Chart.js"],
    },
  ],
  sideProjects: [
    {
      name: "TaskFlow",
      summary:
        "輕量個人規劃工具，提供行事曆檢視、提醒機制與鍵盤導向操作。",
      tech: ["React", "TypeScript", "Supabase"],
      link: "https://github.com/example/taskflow",
    },
    {
      name: "UI Patterns Playground",
      summary:
        "整理可重用 UI 模式與無障礙範例，支援團隊快速原型與知識共享。",
      tech: ["Next.js", "Tailwind CSS", "Storybook"],
      link: "https://github.com/example/ui-patterns-playground",
    },
  ],
  skills: [
    {
      category: "前端",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "無障礙設計"],
    },
    {
      category: "產品與架構",
      items: ["設計系統", "前端架構", "效能優化"],
    },
    {
      category: "平台與工具",
      items: ["Node.js", "GraphQL", "PostgreSQL", "CI/CD"],
    },
  ],
};
