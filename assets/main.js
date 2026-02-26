const siteContent = {
  zh: {
    brand: "RoboIndex",
    navProposal: "Proposal",
    navFeatures: "核心功能",
    navRepos: "开源项目",
    navGuide: "投稿经验",
    navRoadmap: "路线图",
    navKpis: "KPI",
    heroEyebrow: "Agent Era Robotics Research Infrastructure",
    heroTitle: "机器人科研成果与投稿经验的结构化入口",
    heroSubtitle:
      "RoboIndex 聚焦论文、开源仓库与投稿经验协作，帮助科研者把分散信息沉淀为可复用的数据资产。",
    heroCtaPrimary: "阅读 Proposal",
    heroCtaSecondary: "查看 RA-L 经验摘要",
    heroStat1Title: "启动路径",
    heroStat1Text: "先用静态 GitHub Pages 快速上线展示与验证。",
    heroStat2Title: "核心差异",
    heroStat2Text: "论文索引 + 投稿经验 + 开源聚合 + 社区互动。",
    heroStat3Title: "长期价值",
    heroStat3Text: "形成可检索、可调用、可扩展的机器人科研数据资产。",
    proposalKicker: "Project Brief",
    proposalTitle: "项目定位与愿景",
    proposalIntro:
      "RoboIndex 定位为机器人科研开源与经验社区，目标是建立学术成果传播、工程实践与知识沉淀之间的高效桥梁。",
    proposalVisionTitle: "核心理念",
    proposalVisionText:
      "在 Agent 时代，写作能力是科研者的核心竞争力；数据资产与入口能力将决定长期影响力。",
    proposalQuote:
      "Writing is the distilled skill of human intelligence in the agent era; data is the asset, and the entrance is the power.",
    proposalUsersTitle: "核心用户",
    users: [
      "博士生 / 科研人员",
      "初级科研者（投稿经验匮乏）",
      "机器人领域工程师",
      "实验室研究团队"
    ],
    problemKicker: "Market Opportunity",
    problemTitle: "当前痛点与差异化",
    painPoints: [
      {
        title: "信息碎片化",
        text: "论文、代码、投稿经验分散在不同平台，检索链路断裂。"
      },
      {
        title: "经验难沉淀",
        text: "高价值投稿经验缺乏结构化记录，难以复用和传承。"
      },
      {
        title: "社区弱连接",
        text: "学术讨论与工程实践协同不足，贡献者激励机制不健全。"
      },
      {
        title: "数据资产缺失",
        text: "缺少统一数据层，后续 API 与 Agent 接口难以构建。"
      }
    ],
    tablePlatform: "平台",
    tablePaperIndex: "论文索引",
    tableSubmissionExp: "投稿经验",
    tableOpenSourceAgg: "开源聚合",
    tableCommunity: "社区互动",
    platforms: [
      {
        name: "Google Scholar",
        paperIndex: "yes",
        submissionExp: "no",
        openSourceAgg: "no",
        community: "no"
      },
      {
        name: "Academia.edu",
        paperIndex: "yes",
        submissionExp: "no",
        openSourceAgg: "no",
        community: "partial"
      },
      {
        name: "OpenReview",
        paperIndex: "yes",
        submissionExp: "no",
        openSourceAgg: "no",
        community: "no"
      },
      {
        name: "RoboIndex",
        paperIndex: "yes",
        submissionExp: "yes",
        openSourceAgg: "yes",
        community: "yes"
      }
    ],
    featuresKicker: "Product Design",
    featuresTitle: "首版页面展示的核心能力",
    featureCards: [
      {
        title: "结构化论文展示",
        text: "围绕题目、方向、代码、数据与贡献点组织机器人论文元信息。"
      },
      {
        title: "投稿经验卡片",
        text: "用结构化卡片沉淀审稿周期、rebuttal 策略和实操注意事项。"
      },
      {
        title: "开源仓库导航",
        text: "打通论文与代码，统一入口浏览 demo、仓库和关键实现细节。"
      },
      {
        title: "社区贡献机制",
        text: "通过 PR 与署名机制鼓励高质量内容贡献和协作编辑。"
      },
      {
        title: "内容可复用",
        text: "标准化字段设计，为后续检索、统计、推荐与 API 提供基础。"
      },
      {
        title: "伦理边界清晰",
        text: "坚持经验分享定位，不触及利益交换与付费投稿辅导。"
      }
    ],
    reposKicker: "Open Source Showcase",
    reposTitle: "开源项目展示（示例卡片）",
    reposIntro:
      "先做一个小红书风格的展示样式，卡片可直接跳转到项目文档或仓库，后续可替换为真实社区投稿内容。",
    repoCards: [
      {
        badge: "ROS",
        title: "ROS 2 Documentation",
        subtitle: "官方文档入口（Rolling）",
        tags: ["#RobotMiddleware", "#Docs", "#GettingStarted"],
        link: "https://docs.ros.org/en/rolling/"
      },
      {
        badge: "ROS",
        title: "ROS 2 GitHub",
        subtitle: "核心组织与仓库集合",
        tags: ["#OpenSource", "#Codebase", "#Ecosystem"],
        link: "https://github.com/ros2"
      },
      {
        badge: "Linux",
        title: "Linux Kernel Repository",
        subtitle: "Torvalds 主仓库",
        tags: ["#Kernel", "#SourceCode", "#Systems"],
        link: "https://github.com/torvalds/linux"
      },
      {
        badge: "Linux",
        title: "Kernel Official Docs",
        subtitle: "Linux 内核官方文档",
        tags: ["#Documentation", "#KernelDev", "#Architecture"],
        link: "https://www.kernel.org/doc/html/latest/"
      }
    ],
    guideKicker: "RA-L Knowledge",
    guideTitle: "RA-L 投稿经验摘要（展示版）",
    guideIntro:
      "以下内容基于《RA-L 投稿攻略》提炼，仅用于经验分享展示，不替代官方指南。",
    guidePoints: [
      {
        title: "期刊定位",
        text: "RA-L 是机器人与自动化短期刊，强调真实机器人问题、紧凑贡献与可复现实验。"
      },
      {
        title: "流程节奏",
        text: "常见流程为初稿提交 -> Revise and Resubmit -> Final Version，需关注各阶段截止时间。"
      },
      {
        title: "初稿要点",
        text: "遵循匿名与篇幅规范（通常 8 页含参考文献），避免违规附录与不当链接。"
      },
      {
        title: "Rebuttal 策略",
        text: "按 reviewer comment 一对一回应，提交改动说明、标注稿与干净稿。"
      },
      {
        title: "Final 版本",
        text: "接受后需在期限内切换 IEEE trans 模板并补全作者信息与版权流程。"
      },
      {
        title: "Transfer 认知",
        text: "论文接受后可在 RAS 系统执行会议 transfer，需结合会议时间窗口规划。"
      }
    ],
    guideAttributionTitle: "署名与来源",
    guideAttribution:
      "投稿经验内容参考《RA-L 投稿攻略》，作者：郝策，更新日期：2026年2月18日。请在转载或二次传播时保留作者署名与来源链接。",
    guideSourceLink: "查看原文（仓库文档）",
    roadmapKicker: "Roadmap",
    roadmapTitle: "三阶段发展路线",
    roadmap: [
      {
        stage: "阶段 1",
        title: "MVP 启动",
        text: "静态网站上线，完成首批论文/经验内容展示与社群冷启动。"
      },
      {
        stage: "阶段 2",
        title: "社区成长",
        text: "建设标签系统、贡献者机制与内容管理后台，提升活跃度。"
      },
      {
        stage: "阶段 3",
        title: "API 与服务化",
        text: "开放结构化数据接口，支持趋势分析与 Agent 调用场景。"
      }
    ],
    kpiKicker: "Milestones",
    kpiTitle: "启动阶段 KPI",
    kpis: [
      { label: "贡献者数量", value: "≥ 50" },
      { label: "每周投稿经验更新", value: "1 次" },
      { label: "首批结构化条目", value: "50+" },
      { label: "目标定位", value: "科研基础设施" }
    ],
    footerTitle: "Build The Entrance, Not Just Traffic",
    footerText:
      "RoboIndex 面向机器人科研长期价值建设，强调透明治理、开源协作与结构化知识资产。",
    footerProposal: "读取 proposal.md",
    footerGuide: "读取 RA-L 投稿攻略",
    footerGithub: "GitHub 主页",
    footerCredit:
      "RA-L 投稿经验相关内容署名：郝策（《RA-L 投稿攻略》，2026-02-18 更新）。"
  },
  en: {
    brand: "RoboIndex",
    navProposal: "Proposal",
    navFeatures: "Features",
    navRepos: "Open Source",
    navGuide: "RA-L Guide",
    navRoadmap: "Roadmap",
    navKpis: "KPIs",
    heroEyebrow: "Agent Era Robotics Research Infrastructure",
    heroTitle: "A structured entry for robotics papers, code, and submission know-how",
    heroSubtitle:
      "RoboIndex connects paper indexing, open-source repositories, and submission experience into reusable research infrastructure.",
    heroCtaPrimary: "Read Proposal",
    heroCtaSecondary: "See RA-L Summary",
    heroStat1Title: "Launch Mode",
    heroStat1Text: "Start lean with static GitHub Pages and validate fast.",
    heroStat2Title: "Core Differentiator",
    heroStat2Text: "Paper index + submission experience + open-source aggregation + community interaction.",
    heroStat3Title: "Long-Term Asset",
    heroStat3Text: "Build searchable, callable, and extensible robotics research data.",
    proposalKicker: "Project Brief",
    proposalTitle: "Positioning And Vision",
    proposalIntro:
      "RoboIndex is an open community for robotics research and practical experience, bridging academic outputs and engineering execution.",
    proposalVisionTitle: "Core Belief",
    proposalVisionText:
      "In the agent era, writing is a core capability. Data assets and entry-point ownership define long-term impact.",
    proposalQuote:
      "Writing is the distilled skill of human intelligence in the agent era; data is the asset, and the entrance is the power.",
    proposalUsersTitle: "Target Users",
    users: [
      "PhD students and researchers",
      "Early-stage authors with limited submission experience",
      "Robotics engineers",
      "Lab-level research teams"
    ],
    problemKicker: "Market Opportunity",
    problemTitle: "Pain Points And Differentiation",
    painPoints: [
      {
        title: "Fragmented Information",
        text: "Papers, code, and submission insights live on disconnected platforms."
      },
      {
        title: "Weak Knowledge Retention",
        text: "High-value submission experience is rarely structured for reuse."
      },
      {
        title: "Limited Community Loop",
        text: "Academic discussion and engineering practice are not tightly linked."
      },
      {
        title: "No Unified Data Layer",
        text: "Without a standard schema, API and agent integrations are harder later."
      }
    ],
    tablePlatform: "Platform",
    tablePaperIndex: "Paper Index",
    tableSubmissionExp: "Submission Experience",
    tableOpenSourceAgg: "Open-Source Aggregation",
    tableCommunity: "Community Interaction",
    platforms: [
      {
        name: "Google Scholar",
        paperIndex: "yes",
        submissionExp: "no",
        openSourceAgg: "no",
        community: "no"
      },
      {
        name: "Academia.edu",
        paperIndex: "yes",
        submissionExp: "no",
        openSourceAgg: "no",
        community: "partial"
      },
      {
        name: "OpenReview",
        paperIndex: "yes",
        submissionExp: "no",
        openSourceAgg: "no",
        community: "no"
      },
      {
        name: "RoboIndex",
        paperIndex: "yes",
        submissionExp: "yes",
        openSourceAgg: "yes",
        community: "yes"
      }
    ],
    featuresKicker: "Product Design",
    featuresTitle: "Core Capabilities On The Launch Page",
    featureCards: [
      {
        title: "Structured Paper View",
        text: "Organize robotics papers by title, topic, code links, and key contributions."
      },
      {
        title: "Submission Experience Cards",
        text: "Capture timelines, rebuttal strategies, and practical publishing notes."
      },
      {
        title: "Open-Source Navigation",
        text: "Connect publication and implementation through a single entry path."
      },
      {
        title: "Community Contribution Loop",
        text: "Use pull requests and visible attribution to encourage quality input."
      },
      {
        title: "Reusable Data Model",
        text: "Lay foundations for search, analytics, recommendation, and API access."
      },
      {
        title: "Clear Ethical Boundary",
        text: "Focus on shared experience, not paid submission consulting."
      }
    ],
    reposKicker: "Open Source Showcase",
    reposTitle: "Open-Source Project Cards (Mock Style)",
    reposIntro:
      "A Xiaohongshu-inspired card layout for quick discovery. Each card links to project docs or repositories and serves as a starter template.",
    repoCards: [
      {
        badge: "ROS",
        title: "ROS 2 Documentation",
        subtitle: "Official docs entry (Rolling)",
        tags: ["#RobotMiddleware", "#Docs", "#GettingStarted"],
        link: "https://docs.ros.org/en/rolling/"
      },
      {
        badge: "ROS",
        title: "ROS 2 GitHub",
        subtitle: "Core organization and repositories",
        tags: ["#OpenSource", "#Codebase", "#Ecosystem"],
        link: "https://github.com/ros2"
      },
      {
        badge: "Linux",
        title: "Linux Kernel Repository",
        subtitle: "Main repository by Torvalds",
        tags: ["#Kernel", "#SourceCode", "#Systems"],
        link: "https://github.com/torvalds/linux"
      },
      {
        badge: "Linux",
        title: "Kernel Official Docs",
        subtitle: "Official Linux kernel documentation",
        tags: ["#Documentation", "#KernelDev", "#Architecture"],
        link: "https://www.kernel.org/doc/html/latest/"
      }
    ],
    guideKicker: "RA-L Knowledge",
    guideTitle: "RA-L Submission Guide Summary (Display Version)",
    guideIntro:
      "This section summarizes insights from the RA-L guide for sharing purposes and does not replace official IEEE-RAS instructions.",
    guidePoints: [
      {
        title: "Journal Positioning",
        text: "RA-L is a concise robotics and automation journal emphasizing practical robot problems and focused contributions."
      },
      {
        title: "Process Rhythm",
        text: "Typical flow: initial submission -> revise and resubmit -> final version, each with strict deadlines."
      },
      {
        title: "Initial Submission",
        text: "Follow anonymization and page-limit rules, and avoid non-compliant appendices or links."
      },
      {
        title: "Rebuttal Practice",
        text: "Respond point-by-point to each reviewer and provide clear change statements."
      },
      {
        title: "Final Materials",
        text: "Switch to IEEE trans template after acceptance and complete copyright workflow on time."
      },
      {
        title: "Conference Transfer",
        text: "After acceptance, transfer can be done in the RAS system within conference windows."
      }
    ],
    guideAttributionTitle: "Attribution",
    guideAttribution:
      "Submission experience content references 'RA-L 投稿攻略' by Hao Ce, updated on February 18, 2026. Please preserve attribution and source links when reusing the content.",
    guideSourceLink: "Open source document in repository",
    roadmapKicker: "Roadmap",
    roadmapTitle: "Three-Phase Development",
    roadmap: [
      {
        stage: "Phase 1",
        title: "MVP Launch",
        text: "Publish static site and seed early paper/experience content."
      },
      {
        stage: "Phase 2",
        title: "Community Growth",
        text: "Add tagging, contributor incentives, and content management workflows."
      },
      {
        stage: "Phase 3",
        title: "API And Service Layer",
        text: "Expose structured data APIs for trend analysis and agent integration."
      }
    ],
    kpiKicker: "Milestones",
    kpiTitle: "Launch KPIs",
    kpis: [
      { label: "Contributors", value: ">= 50" },
      { label: "Weekly experience updates", value: "1 / week" },
      { label: "Initial structured entries", value: "50+" },
      { label: "Target role", value: "Research Infrastructure" }
    ],
    footerTitle: "Build The Entrance, Not Just Traffic",
    footerText:
      "RoboIndex focuses on long-term robotics research value through transparent governance, open collaboration, and structured knowledge assets.",
    footerProposal: "Open proposal.md",
    footerGuide: "Open RA-L guide",
    footerGithub: "GitHub Home",
    footerCredit:
      "Attribution for RA-L-related content: Hao Ce ('RA-L 投稿攻略', updated 2026-02-18)."
  }
};

const statusLabel = {
  zh: { yes: "✔", partial: "部分", no: "✕" },
  en: { yes: "✔", partial: "Partial", no: "✕" }
};

function createCard(item) {
  const card = document.createElement("article");
  card.className = "soft-card";

  const title = document.createElement("h3");
  title.textContent = item.title;

  const text = document.createElement("p");
  text.textContent = item.text;

  card.append(title, text);
  return card;
}

function createRepoCard(item) {
  const card = document.createElement("a");
  card.className = "xhs-card";
  card.href = item.link;
  card.target = "_blank";
  card.rel = "noreferrer";

  const cover = document.createElement("div");
  cover.className = "xhs-cover";

  const badge = document.createElement("span");
  badge.className = "xhs-badge";
  badge.textContent = item.badge;

  const arrow = document.createElement("span");
  arrow.className = "xhs-arrow";
  arrow.textContent = "OPEN";

  cover.append(badge, arrow);

  const body = document.createElement("div");
  body.className = "xhs-body";

  const title = document.createElement("h3");
  title.className = "xhs-title";
  title.textContent = item.title;

  const subtitle = document.createElement("p");
  subtitle.className = "xhs-subtitle";
  subtitle.textContent = item.subtitle;

  const tags = document.createElement("div");
  tags.className = "xhs-tags";
  item.tags.forEach((tag) => {
    const token = document.createElement("span");
    token.className = "xhs-tag";
    token.textContent = tag;
    tags.appendChild(token);
  });

  body.append(title, subtitle, tags);
  card.append(cover, body);
  return card;
}

function renderLanguage(lang) {
  const content = siteContent[lang] || siteContent.zh;
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (Object.prototype.hasOwnProperty.call(content, key)) {
      el.textContent = content[key];
    }
  });

  const userList = document.getElementById("user-list");
  userList.innerHTML = "";
  content.users.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    userList.appendChild(li);
  });

  const painGrid = document.getElementById("pain-grid");
  painGrid.innerHTML = "";
  content.painPoints.forEach((point) => painGrid.appendChild(createCard(point)));

  const platformTable = document.getElementById("platform-table");
  platformTable.innerHTML = "";
  content.platforms.forEach((platform) => {
    const tr = document.createElement("tr");
    const columns = [
      { value: platform.name, status: null },
      { value: statusLabel[lang][platform.paperIndex], status: platform.paperIndex },
      { value: statusLabel[lang][platform.submissionExp], status: platform.submissionExp },
      { value: statusLabel[lang][platform.openSourceAgg], status: platform.openSourceAgg },
      { value: statusLabel[lang][platform.community], status: platform.community }
    ];

    columns.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell.value;
      if (cell.status) {
        td.className = `status-${cell.status}`;
      }
      tr.appendChild(td);
    });

    platformTable.appendChild(tr);
  });

  const featureGrid = document.getElementById("feature-grid");
  featureGrid.innerHTML = "";
  content.featureCards.forEach((item) => featureGrid.appendChild(createCard(item)));

  const repoGrid = document.getElementById("repo-grid");
  repoGrid.innerHTML = "";
  content.repoCards.forEach((item) => repoGrid.appendChild(createRepoCard(item)));

  const guideGrid = document.getElementById("guide-grid");
  guideGrid.innerHTML = "";
  content.guidePoints.forEach((item) => guideGrid.appendChild(createCard(item)));

  const roadmapList = document.getElementById("roadmap-list");
  roadmapList.innerHTML = "";
  content.roadmap.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "roadmap-item";

    const step = document.createElement("span");
    step.className = "roadmap-step";
    step.textContent = item.stage || String(index + 1);

    const title = document.createElement("h3");
    title.textContent = item.title;

    const text = document.createElement("p");
    text.textContent = item.text;

    card.append(step, title, text);
    roadmapList.appendChild(card);
  });

  const kpiGrid = document.getElementById("kpi-grid");
  kpiGrid.innerHTML = "";
  content.kpis.forEach((item) => {
    const card = document.createElement("article");
    card.className = "soft-card";

    const title = document.createElement("h3");
    title.textContent = item.label;

    const value = document.createElement("p");
    value.textContent = item.value;

    card.append(title, value);
    kpiGrid.appendChild(card);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function bindLanguageSwitch() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      renderLanguage(btn.dataset.lang);
    });
  });
}

function bindRevealAnimation() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  elements.forEach((el) => observer.observe(el));
}

bindLanguageSwitch();
bindRevealAnimation();
renderLanguage("zh");
