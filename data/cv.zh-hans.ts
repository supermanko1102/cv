import { CVDataZhHans } from "@/data/cv.types";

export const cvZhHans: CVDataZhHans = {
  languageTag: "zh-hans",
  name: "Jamie Chen",
  role: "前端工程师",
  summary:
    "专注于打造可维护且可扩展的 SaaS 产品。具备设计系统、前端架构与性能优化经验，能够与产品、设计和后端团队协作，交付以用户为中心的功能。",
  contact: {
    email: "hello@example.com",
    phone: "+1 (555) 010-1234",
    location: "美国，旧金山",
    website: "https://example.dev",
    github: "https://github.com/example",
    linkedin: "https://www.linkedin.com/in/example/",
  },
  labels: {
    experience: "工作经历",
    education: "学历",
    sideProjects: "个人项目",
    skills: "技能",
  },
  experience: [
    {
      role: "前端工程师",
      company: "Northstar Labs",
      period: "2022 - 至今",
      location: "远程",
      highlights: [
        "主导前端组件系统重整，减少重复代码并缩短新成员上手时间。",
        "建立跨站点可复用的设计 token 与主题规范，提升界面一致性。",
        "与后端协作重构核心 API 流程，降低前端错误率并提升可预测性。",
        "通过代码切分、缓存策略和图片优化改进 Core Web Vitals 指标。",
      ],
    },
    {
      role: "前端开发工程师",
      company: "BrightCart",
      period: "2020 - 2022",
      location: "美国，奥斯汀",
      highlights: [
        "开发电商平台结账与账号管理功能，支持中小客户日常运营。",
        "搭建转化率与留存分析看板，为产品决策提供可视化数据支持。",
        "引入类型安全 API client 与前端测试，提升高流量页面稳定性。",
        "与设计协作统一交互模式和无障碍细节，提升整体体验一致性。",
      ],
    },
  ],
  education: [
    {
      school: "State University",
      degree: "计算机科学学士",
      period: "2016 - 2020",
    },
  ],
  projects: [
    {
      name: "订阅后台改版项目",
      summary:
        "重构升级降级、账单历史与支付流程，提升可理解性并降低客服工单量。",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    },
    {
      name: "运营监控仪表板",
      summary:
        "搭建内部监控平台，整合事件告警、部署状态与关键指标追踪。",
      tech: ["React", "TypeScript", "Node.js", "Chart.js"],
    },
  ],
  sideProjects: [
    {
      name: "TaskFlow",
      summary:
        "轻量个人规划工具，提供日历视图、提醒机制和键盘优先交互。",
      tech: ["React", "TypeScript", "Supabase"],
    },
    {
      name: "UI Patterns Playground",
      summary:
        "整理可复用 UI 模式和无障碍示例，支持团队快速原型与知识共享。",
      tech: ["Next.js", "Tailwind CSS", "Storybook"],
      link: "https://github.com/example/ui-patterns-playground",
    },
  ],
  skills: [
    {
      category: "前端",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "无障碍设计"],
    },
    {
      category: "产品与架构",
      items: ["设计系统", "前端架构", "性能优化"],
    },
    {
      category: "平台与工具",
      items: ["Node.js", "GraphQL", "PostgreSQL", "CI/CD"],
    },
  ],
};
