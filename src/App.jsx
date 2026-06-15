import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";

const brandMark = `${import.meta.env.BASE_URL}brand-mark.webp`;
const editorialVisuals = {
  contact: `${import.meta.env.BASE_URL}editorial/contact-card.webp`,
  hero: `${import.meta.env.BASE_URL}editorial/hero-quiet-lens.webp`,
  strategy: `${import.meta.env.BASE_URL}editorial/strategy-still-life.webp`,
};
const languageStorageKey = "jerryzhao-language";

const siteCopy = {
  zh: {
    siteTitle: "赵元坤｜从内容表达走向价值连接 Jerry Zhao｜From Storytelling to Value Creation",
    siteDescription: "赵元坤｜从内容表达走向价值连接 Jerry Zhao｜From Storytelling to Value Creation",
    languageToggleLabel: "切换为英文",
    header: {
      homeLabel: "赵元坤，返回首页",
      name: "赵元坤",
      subName: "Jerry Zhao",
      navLabel: "主导航",
    },
    footer: {
      name: "赵元坤",
      tagline: "品牌公关 · 舆情管理 · 内容创作",
      rednote: "小红书",
      douyin: "抖音",
      copyright: "© 2026 Zhao Yuankun",
    },
    nav: {
      home: "首页",
      work: "作品",
      resume: "简历",
      contact: "联系",
    },
    common: {
      enterProfile: "进入主页",
      pendingLink: "待提供公开链接",
      viewFullImage: "查看大图",
      downloadPdf: "下载 PDF",
    },
    home: {
      eyebrow: "Brand Communications / Editorial Practice",
      heroLines: ["让品牌被看见，", "让价值被理解。"],
      intro:
        "专注品牌公关、舆情管理与内容策划。以新闻采编、影像创作与公共沟通，为企业和组织建立真实、清晰、经得起时间检验的表达。",
      workCta: "浏览作品",
      contactCta: "联系我",
      focusEyebrow: "Current Focus",
      focusTitle: ["企业文化", "与品牌传播"],
      focusCopy: ["内容策略", "媒体关系与舆情管理"],
      selectedEyebrow: "Selected Work",
      selectedTitle: "作品与影响",
      selectedCopy: "注重传播的信息如何建立连接桥梁，留下长期价值。",
      practiceEyebrow: "Practice",
      practiceTitle: "工作实践",
    },
    articles: {
      emptyTitle: "文章将在内容确认后陈列于此。",
      emptyCopy: "微信搜索公众号：原始大陆",
    },
    workPage: {
      eyebrow: "Portfolio",
      title: "作品与影响",
      copy: "从企业新闻传播到个人内容品牌，文字、影像与平台运营共同构成我的传播实践。",
      corporateEyebrow: "01 / Corporate",
      corporateTitle: "企业品牌传播",
      corporateHeading: "媒体传播与品牌内容体系",
      corporateCopy:
        "搭建并维护媒体联络机制，围绕重点项目与企业行动持续输出内容，多篇稿件刊发于新华社、人民日报等央媒与省市媒体，提升项目及企业品牌认知度。",
      editorialEyebrow: "02 / Editorial Column",
      editorialTitle: ["原始大陆", "精选文章专栏"],
      editorialCopy: "以下为已选出的八篇公众号文章，点击封面或标题即可进入微信原文。",
      platformEyebrow: "03 / Platforms",
      platformTitle: "个人内容品牌",
      platformCopy: "在不同内容场域中，以视频、图文与短内容持续表达。按平台进入我的公开主页。",
      photoEyebrow: "04 / Photography",
      photoTitle: "个人摄影作品",
      photoCopy: "摄影是我观察现场的另一种方式：在建筑的线条、树影的层次和日常片刻中，寻找安静但有力量的秩序。",
      photoNote: "作品页先以相册入口呈现，进入摄影文件夹后再浏览完整图片集。",
    },
    photoAlbum: {
      title: ["镜头记录过去", "故事开启未来"],
      copy: "这里先保留一组拍立得式入口。进入后，再以完整画廊浏览城市、建筑、自然与日常现场。",
      cta: "进入摄影文件夹",
    },
    photographyPage: {
      back: "返回作品与影响",
      eyebrow: "Photography Folder",
      title: "个人摄影作品",
      copy: "一组持续更新的个人摄影文件夹：城市、建筑、自然与日常现场，被整理为可慢慢翻看的视觉索引。",
      archiveEyebrow: "Current Archive",
      countLabel: "张作品",
      note: "点击任意照片可打开高清图。后续新增作品会继续进入这个文件夹。",
    },
    resumePage: {
      eyebrow: "Resume",
      title: "简历",
      copy: "品牌公关与企业传播从业者，拥有新闻传播研究背景与央企一线内容实践。",
      downloadsEyebrow: "Downloads",
      downloadsTitle: "下载 PDF 简历",
      downloadsCopy: "中英文简历统一放在网站资源目录中，后续替换同名 PDF 文件即可更新下载内容。",
      profileEyebrow: "Profile",
      profileCopy:
        "聚焦品牌传播、内容制作与舆情管理，以现场洞察和编辑能力，将工程项目、企业行动与公共价值准确表达。",
      experienceEyebrow: "Experience",
      expertiseEyebrow: "Core Expertise",
    },
    contactPage: {
      eyebrow: "Contact",
      titleLines: ["交流工作，", "也分享内容。"],
      copy: "关注品牌传播、内容制作与公共关系。欢迎通过邮件交流工作，也欢迎在微信搜索公众号“原始大陆”阅读我的文字。",
      findMe: "Find Me",
      account: "原始大陆",
      accountNote: "微信公众号 / 微信搜索关注",
    },
    notFound: {
      title: "页面不存在",
      back: "返回首页",
    },
  },
  en: {
    siteTitle: "Jerry Zhao | From Storytelling to Value Creation",
    siteDescription: "Jerry Zhao | Brand communications, editorial practice, reputation management and value creation.",
    languageToggleLabel: "Switch to Chinese",
    header: {
      homeLabel: "Jerry Zhao, back to home",
      name: "Jerry Zhao",
      subName: "Value Creation",
      navLabel: "Primary navigation",
    },
    footer: {
      name: "Jerry Zhao",
      tagline: "Brand Communications · Reputation Management · Editorial Practice",
      rednote: "Rednote",
      douyin: "Douyin",
      copyright: "© 2026 Jerry Zhao",
    },
    nav: {
      home: "Home",
      work: "Work",
      resume: "Resume",
      contact: "Contact",
    },
    common: {
      enterProfile: "Enter Profile",
      pendingLink: "Public link pending",
      viewFullImage: "View Full Image",
      downloadPdf: "Download PDF",
    },
    home: {
      eyebrow: "Brand Communications / Editorial Practice",
      heroLines: ["Making brands visible,", "and value understood."],
      intro:
        "I work across brand communications, reputation management and editorial strategy, turning field reporting, visual storytelling and public dialogue into clear, credible expression for organizations.",
      workCta: "Explore Work",
      contactCta: "Contact Me",
      focusEyebrow: "Current Focus",
      focusTitle: ["Corporate Culture", "Brand Communications"],
      focusCopy: ["Content Strategy", "Media Relations & Issues Management"],
      selectedEyebrow: "Selected Work",
      selectedTitle: "Work & Influence",
      selectedCopy: "I focus on how information builds bridges, creates understanding and leaves durable value.",
      practiceEyebrow: "Practice",
      practiceTitle: "Practice Areas",
    },
    articles: {
      emptyTitle: "Articles will appear here once the selection is confirmed.",
      emptyCopy: "WeChat public account: Original Mainland",
    },
    workPage: {
      eyebrow: "Portfolio",
      title: "Work & Influence",
      copy: "From corporate news communication to personal content platforms, my practice connects writing, visuals and platform operations.",
      corporateEyebrow: "01 / Corporate",
      corporateTitle: "Corporate Brand Communications",
      corporateHeading: "Media Relations and Brand Content Systems",
      corporateCopy:
        "I build and maintain media connections, produce sustained content around key projects and corporate actions, and help strengthen public recognition through central, provincial and local media coverage.",
      editorialEyebrow: "02 / Editorial Column",
      editorialTitle: ["Original Mainland", "Selected Article Column"],
      editorialCopy: "A curated set of public-account articles. Click any cover or title to read the original WeChat article.",
      platformEyebrow: "03 / Platforms",
      platformTitle: "Personal Content Platforms",
      platformCopy: "Across video, visual notes and short-form content, these profiles extend my public-facing editorial practice.",
      photoEyebrow: "04 / Photography",
      photoTitle: "Personal Photography",
      photoCopy:
        "Photography is another way I read the field: looking for quiet order in architecture, light, trees and everyday moments.",
      photoNote: "The work page keeps this as an album entry; the full image set lives inside the photography folder.",
    },
    photoAlbum: {
      title: ["The lens records the past", "Stories open the future"],
      copy: "A Polaroid-style entry comes first. Inside, the full gallery gathers city, architecture, nature and everyday scenes.",
      cta: "Open Photography Folder",
    },
    photographyPage: {
      back: "Back to Work & Influence",
      eyebrow: "Photography Folder",
      title: "Personal Photography",
      copy: "A growing visual archive of cities, architecture, nature and everyday scenes, arranged as a quiet index for slow viewing.",
      archiveEyebrow: "Current Archive",
      countLabel: "works",
      note: "Click any image to open the high-resolution version. New work will continue to be added to this folder.",
    },
    resumePage: {
      eyebrow: "Resume",
      title: "Resume",
      copy: "A brand communications practitioner with a graduate background in journalism and communication, grounded in frontline corporate content work.",
      downloadsEyebrow: "Downloads",
      downloadsTitle: "Download PDF Resume",
      downloadsCopy: "Chinese and English PDF resumes are stored in the site assets. Replace the same files to update future downloads.",
      profileEyebrow: "Profile",
      profileCopy:
        "I focus on brand communications, editorial production and issues management, translating projects, organizational actions and public value into precise expression.",
      experienceEyebrow: "Experience",
      expertiseEyebrow: "Core Expertise",
    },
    contactPage: {
      eyebrow: "Contact",
      titleLines: ["For work conversations,", "and shared ideas."],
      copy: "I am open to conversations around brand communications, content production and public relations. You can reach me by email or read my writing through the WeChat public account Original Mainland.",
      findMe: "Find Me",
      account: "Original Mainland",
      accountNote: "WeChat Public Account",
    },
    notFound: {
      title: "Page Not Found",
      back: "Back Home",
    },
  },
};

const navigation = [
  { key: "home", to: "/" },
  { key: "work", to: "/work" },
  { key: "resume", to: "/resume" },
  { key: "contact", to: "/contact" },
];

const featuredWork = [
  {
    number: "01",
    label: { zh: "企业品牌", en: "Corporate Brand" },
    title: { zh: "媒体传播与品牌内容体系", en: "Media Relations and Brand Content Systems" },
    copy: {
      zh: "持续围绕重点项目与企业行动生产内容，建立媒体连接与声誉表达。",
      en: "Sustained content work around key projects and corporate actions, building media connection and reputation expression.",
    },
  },
  {
    number: "02",
    label: { zh: "原始大陆", en: "Original Mainland" },
    title: { zh: "公众号精选文章专栏", en: "Selected Public-Account Articles" },
    copy: {
      zh: "以文章为作品，呈现关于传播、技术与生活的长期观察。",
      en: "Long-form observations on communication, technology and everyday life, presented as an editorial body of work.",
    },
  },
  {
    number: "03",
    label: { zh: "内容平台", en: "Content Platforms" },
    title: { zh: "影像、图文与短内容主页", en: "Video, Visual Notes and Short-Form Profiles" },
    copy: {
      zh: "将内容实践延伸至 B 站、小红书与抖音。",
      en: "Extending editorial practice across Bilibili, Rednote and Douyin.",
    },
  },
  {
    number: "04",
    label: { zh: "个人摄影", en: "Photography" },
    title: { zh: "个人摄影作品", en: "Personal Photography" },
    copy: {
      zh: "以城市、自然与日常现场为题材，记录光线、结构与人的感受。",
      en: "A visual archive of cities, nature and everyday scenes, attentive to light, structure and feeling.",
    },
  },
];

const practiceMetrics = [
  {
    value: { zh: "近 200", en: "Nearly 200" },
    label: { zh: "篇媒体与品牌稿件", en: "media and brand stories" },
    style: "bg-sky",
  },
  { value: "80+", label: { zh: "项目素材覆盖", en: "project asset sets" }, style: "bg-blush" },
  { value: "12TB", label: { zh: "可复用内容资产", en: "reusable content assets" }, style: "bg-mint" },
  { value: "6", label: { zh: "场大型活动统筹", en: "major events coordinated" }, style: "bg-sky" },
];

const featuredArticles = [
  {
    title: {
      zh: "甲亢哥Speed游中国：“在场”是最顶级的国际传播",
      en: "Speed Visits China: Presence as a Strong Form of International Communication",
    },
    href: "https://mp.weixin.qq.com/s/eE6x5qGqALeOKSPcDtZ_wg",
    cover: `${import.meta.env.BASE_URL}articles/cover-01.webp`,
  },
  {
    title: {
      zh: "当Meta开始裁员8000人：默会知识，还能藏在大脑里吗？",
      en: "When Meta Cuts 8,000 Jobs: Can Tacit Knowledge Still Live in the Mind?",
    },
    href: "https://mp.weixin.qq.com/s/Pmo8WycEAL23zpD4ieSNTQ",
    cover: `${import.meta.env.BASE_URL}articles/cover-02.webp`,
  },
  {
    title: {
      zh: "我用5年时间，才看清注意力是怎么被偷走的",
      en: "It Took Me Five Years to See How Attention Gets Stolen",
    },
    href: "https://mp.weixin.qq.com/s/RNLepvFin0-39GWGydVDJA",
    cover: `${import.meta.env.BASE_URL}articles/cover-03.webp`,
  },
  {
    title: {
      zh: "“进攻风车”的贾国龙",
      en: "Jia Guolong and the Windmill He Chose to Attack",
    },
    href: "https://mp.weixin.qq.com/s/I4LnOiAVsYSPRrQo3onVlg",
    cover: `${import.meta.env.BASE_URL}articles/cover-04.webp`,
  },
  {
    title: {
      zh: "登味的“悟性”到底啥意思？",
      en: "What Does the Internet Slang Wuxing Really Mean?",
    },
    href: "https://mp.weixin.qq.com/s/tYZgrwcPUwVZfPQgbykS5g",
    cover: `${import.meta.env.BASE_URL}articles/cover-05.webp`,
  },
  {
    title: {
      zh: "罗永浩西贝直播后，老乡鸡该干嘛？",
      en: "After Luo Yonghao and Xibei's Livestream, What Should Laoxiangji Do?",
    },
    href: "https://mp.weixin.qq.com/s/ulZXPVHq3dnXnyo8Qx3gtQ",
    cover: `${import.meta.env.BASE_URL}articles/cover-06.webp`,
  },
  {
    title: {
      zh: "这 文 凭 有 啥 用 ？",
      en: "What Is This Diploma Really For?",
    },
    href: "https://mp.weixin.qq.com/s/a53VvESIzN_AlwlCBwNDBA",
    cover: `${import.meta.env.BASE_URL}articles/cover-07.webp`,
  },
  {
    title: {
      zh: "3个方法让你高效利用“被数字化”的人生",
      en: "Three Ways to Use a Digitized Life More Efficiently",
    },
    href: "https://mp.weixin.qq.com/s/7Afyq-hEbJjLuotY2Dh3Ug",
    cover: `${import.meta.env.BASE_URL}articles/cover-08.webp`,
  },
];

// Add new photos here; store full-size and thumbnail WebP assets under public/photography/.
const photographyWorks = [
  {
    title: { zh: "蓝色立面", en: "Blue Facade" },
    location: { zh: "厦门", en: "Xiamen" },
    year: "2024",
    layout: "large",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/01-amoy-architecture.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/01-amoy-architecture.webp`,
    alt: { zh: "蓝色玻璃建筑立面向天空延展", en: "A blue glass facade rising toward the sky" },
  },
  {
    title: { zh: "云下嘉庚", en: "Jiageng Under Clouds" },
    location: { zh: "厦门", en: "Xiamen" },
    year: "2024",
    layout: "portrait",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/02-amoy-clouds-campus.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/02-amoy-clouds-campus.webp`,
    alt: { zh: "厦门建筑与巨大白云映在水边", en: "Xiamen architecture beneath large white clouds by the water" },
  },
  {
    title: { zh: "红砖与晴空", en: "Red Brick, Clear Sky" },
    location: { zh: "厦门", en: "Xiamen" },
    year: "2024",
    layout: "standard",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/03-amoy-red-brick.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/03-amoy-red-brick.webp`,
    alt: { zh: "红砖建筑在晴空和云层下展开", en: "A red-brick building opening under clouds and blue sky" },
  },
  {
    title: { zh: "绿色层次", en: "Layers of Green" },
    location: { zh: "厦门", en: "Xiamen" },
    year: "2024",
    layout: "standard",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/04-amoy-greenery.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/04-amoy-greenery.webp`,
    alt: { zh: "多层绿色树冠与远处建筑", en: "Layered green tree canopies with architecture in the distance" },
  },
  {
    title: { zh: "屋檐与云", en: "Eaves and Clouds" },
    location: { zh: "厦门", en: "Xiamen" },
    year: "2024",
    layout: "standard",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/05-amoy-roofline.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/05-amoy-roofline.webp`,
    alt: { zh: "传统屋檐与白色云层形成几何线条", en: "Traditional rooflines forming geometry against white clouds" },
  },
  {
    title: { zh: "花田里的白山羊", en: "White Goat in the Field" },
    location: { zh: "苏州", en: "Suzhou" },
    year: "2024",
    layout: "wide",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/06-suzhou-goat.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/06-suzhou-goat.webp`,
    alt: { zh: "白色山羊站在阳光下的花田中", en: "A white goat standing in a sunlit flower field" },
  },
  {
    title: { zh: "林间光线", en: "Light Through Trees" },
    location: { zh: "滨湖森林公园", en: "Binhu Forest Park" },
    year: "2024",
    layout: "wide",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/07-forest-light.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/07-forest-light.webp`,
    alt: { zh: "森林公园中光线穿过树木洒向步道", en: "Sunlight passing through trees onto a park path" },
  },
  {
    title: { zh: "荷叶深处", en: "Inside the Lotus Leaves" },
    location: { zh: "皖北", en: "Northern Anhui" },
    year: "2024",
    layout: "wide",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/08-lotus-leaves.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/08-lotus-leaves.webp`,
    alt: { zh: "大片荷叶中一朵粉色荷花含苞待放", en: "A pink lotus bud among broad green leaves" },
  },
];

const channels = [
  {
    title: { zh: "哔哩哔哩", en: "Bilibili" },
    english: "BILIBILI",
    handle: { zh: "原始大陆PM", en: "Original Mainland PM" },
    note: { zh: "视频与影像作品", en: "Video and visual work" },
    href: "https://space.bilibili.com/136635542?spm_id_from=333.1007.0.0",
    icon: "bilibili",
    style: "bg-sky",
  },
  {
    title: { zh: "小红书", en: "Rednote" },
    english: "REDNOTE",
    handle: { zh: "原始大陆 PM", en: "Original Mainland PM" },
    note: { zh: "图文与生活观察", en: "Visual notes and life observations" },
    href: "https://www.xiaohongshu.com/user/profile/641d94a7000000001f032ed3",
    icon: "rednote",
    style: "bg-blush",
  },
  {
    title: { zh: "抖音", en: "Douyin" },
    english: "DOUYIN",
    handle: { zh: "原始大陆 PM", en: "Original Mainland PM" },
    note: { zh: "短视频与即时表达", en: "Short-form video and timely expression" },
    href: "https://www.douyin.com/user/self",
    icon: "douyin",
    style: "bg-mint",
  },
];

const capabilities = [
  {
    title: { zh: "品牌传播", en: "Brand Communications" },
    english: "Brand Communications",
    copy: {
      zh: "围绕项目价值与组织行动，以新闻内容和媒体连接提升品牌认知。",
      en: "Translate project value and organizational action into clear stories that strengthen brand recognition.",
    },
  },
  {
    title: { zh: "内容制作", en: "Editorial & Visual" },
    english: "Editorial & Visual",
    copy: {
      zh: "从选题、采访到摄影剪辑，形成稳定且可复用的内容资产。",
      en: "Build reusable content assets from topic planning, interviews, photography and editing.",
    },
  },
  {
    title: { zh: "舆情管理", en: "Issues Management" },
    english: "Issues Management",
    copy: {
      zh: "参与研判、口径与平台沟通，在关键节点支持企业声誉管理。",
      en: "Support reputation management through issue assessment, message alignment and platform communication.",
    },
  },
];

const experience = [
  {
    range: { zh: "2022.04 - 至今", en: "Apr 2022 - Present" },
    role: { zh: "企业文化与传播专员", en: "Corporate Culture and Communications Specialist" },
    company: {
      zh: "中铁四局集团有限公司第八工程分公司",
      en: "China Railway Fourth Bureau Group, Eighth Engineering Co., Ltd.",
    },
    detail: {
      zh: "负责品牌与市场传播、内容生产及大型活动执行；建立标准化内容流程和素材库，参与舆情研判、口径制定与媒体平台对接。",
      en: "Lead brand and market communication, content production and major event execution; build standardized content workflows and asset libraries, while supporting issue assessment, messaging and media platform coordination.",
    },
  },
];

const credentials = [
  {
    text: { zh: "厦门大学 · 新闻与传播硕士", en: "Xiamen University · M.A. in Journalism and Communication" },
    icon: `${import.meta.env.BASE_URL}education/xiamen-university.webp`,
    alt: { zh: "厦门大学校徽", en: "Xiamen University emblem" },
  },
  {
    text: {
      zh: "山西大学 · 历史学学士（辅修汉语言文学、哲学）",
      en: "Shanxi University · B.A. in History; minors in Chinese Language & Literature and Philosophy",
    },
    icon: `${import.meta.env.BASE_URL}education/shanxi-university.webp`,
    alt: { zh: "山西大学校徽", en: "Shanxi University emblem" },
  },
  { text: { zh: "安徽省摄影家协会会员", en: "Member, Anhui Photographers Association" } },
  { text: { zh: "CET-6 / 普通话二级甲等", en: "CET-6 / Mandarin Proficiency: Grade 2A" } },
];

const resumeDownloads = [
  {
    language: { zh: "中文简历", en: "Chinese Resume" },
    title: { zh: "赵元坤个人简历", en: "Zhao Yuankun Chinese Resume" },
    copy: {
      zh: "适用于中文岗位、企业传播与品牌公关相关场景。",
      en: "For Chinese-language roles in corporate communications, branding and public relations.",
    },
    href: `${import.meta.env.BASE_URL}resume/zhao-yuankun-resume-cn.pdf`,
    fileName: { zh: "赵元坤个人简历.pdf", en: "Zhao Yuankun Chinese Resume.pdf" },
  },
  {
    language: { zh: "英文简历", en: "English Resume" },
    title: { zh: "Yuankun Zhao (Jerry) Resume", en: "Yuankun Zhao (Jerry) Resume" },
    copy: {
      zh: "适用于英文申请及国际传播相关岗位。",
      en: "For English applications and international communication roles.",
    },
    href: `${import.meta.env.BASE_URL}resume/yuankun-zhao-jerry-resume-en.pdf`,
    fileName: "Yuankun Zhao (Jerry) Resume.pdf",
  },
];

const expertise = [
  { zh: "品牌公关与媒体", en: "Brand PR & Media Relations" },
  { zh: "新闻摄影与采编", en: "News Photography & Editing" },
  { zh: "视频脚本与剪辑", en: "Video Scripting & Editing" },
  { zh: "舆情与声誉管理", en: "Issues & Reputation Management" },
];

function getInitialLanguage() {
  if (typeof window === "undefined") return "zh";
  return window.localStorage.getItem(languageStorageKey) === "en" ? "en" : "zh";
}

function text(value, lang) {
  if (value && typeof value === "object" && !Array.isArray(value) && ("zh" in value || "en" in value)) {
    return value[lang] ?? value.zh ?? value.en;
  }

  return value;
}

function Arrow() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path d="M2.5 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function StackedLines({ lines }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={line}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

function PlatformIcon({ platform }) {
  const logos = {
    bilibili: `${import.meta.env.BASE_URL}platforms/bilibili.webp`,
    rednote: `${import.meta.env.BASE_URL}platforms/xiaohongshu.webp`,
    douyin: `${import.meta.env.BASE_URL}platforms/douyin.webp`,
  };

  const className =
    platform === "bilibili"
      ? "h-11 w-32 rounded-xl bg-white object-contain px-2 py-1.5"
      : "size-14 rounded-2xl object-cover";

  return <img alt="" aria-hidden="true" className={className} loading="lazy" src={logos[platform]} />;
}

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const section = new URLSearchParams(search).get("section");

    if (pathname === "/work" && section) {
      window.requestAnimationFrame(() => {
        document.getElementById(`section-${section}`)?.scrollIntoView({ block: "start" });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, search]);

  return null;
}

function Eyebrow({ children, light = false }) {
  return (
    <p className={`font-en text-[11px] font-medium uppercase tracking-[0.3em] ${light ? "text-white/50" : "text-muted"}`}>
      {children}
    </p>
  );
}

function LanguageToggle({ lang, onToggle, label }) {
  return (
    <button
      aria-label={label}
      className="font-en hidden shrink-0 items-center gap-1 rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-muted transition hover:border-white/28 hover:bg-white/[0.06] hover:text-cream sm:inline-flex"
      onClick={onToggle}
      type="button"
    >
      <span className={lang === "zh" ? "text-cream" : "text-muted"}>中文</span>
      <span className="text-white/26">/</span>
      <span className={lang === "en" ? "text-cream" : "text-muted"}>
        <span className="sm:hidden">EN</span>
        <span className="hidden sm:inline">ENGLISH</span>
      </span>
    </button>
  );
}

function Header({ lang, onToggleLanguage, t }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/72 backdrop-blur-2xl">
      <div className="mx-auto flex min-h-[96px] max-w-6xl flex-col items-start justify-center gap-2 px-4 py-3 sm:h-[72px] sm:min-h-0 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-8 sm:py-0">
        <Link aria-label={t.header.homeLabel} className="flex shrink-0 items-baseline gap-3 text-cream" to="/">
          <span className="font-display text-xl">{t.header.name}</span>
          <span className="font-en hidden text-[11px] tracking-[0.22em] text-muted sm:block">{t.header.subName}</span>
        </Link>
        <nav
          aria-label={t.header.navLabel}
          className="flex w-full items-center justify-start gap-8 text-[12px] min-[380px]:gap-10 sm:w-auto sm:gap-7 sm:text-sm"
        >
          {navigation.map(({ key, to }) => (
            <NavLink
              className={({ isActive }) =>
                `relative py-2 transition ${isActive ? "text-cream" : "text-muted hover:text-cream"}`
              }
              end={to === "/"}
              key={to}
              to={to}
            >
              {({ isActive }) => (
                <>
                  {t.nav[key]}
                  {isActive && <span className="absolute inset-x-0 -bottom-1 h-px bg-cream" />}
                </>
              )}
            </NavLink>
          ))}
          <LanguageToggle label={t.languageToggleLabel} lang={lang} onToggle={onToggleLanguage} />
        </nav>
      </div>
    </header>
  );
}

function Footer({ lang, t }) {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-black">
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-44 -right-28 hidden w-[32rem] opacity-[0.06] invert mix-blend-screen sm:block"
        loading="lazy"
        src={brandMark}
      />
      <div className="relative mx-auto flex min-h-56 max-w-6xl flex-col justify-between gap-8 px-5 py-12 text-sm text-muted sm:flex-row sm:items-end sm:px-8">
        <div>
          <p className="font-display text-2xl text-cream">{t.footer.name}</p>
          <p className="mt-3">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-3">
          <a className="transition hover:text-cream" href="mailto:jerryzhao1998@163.com">
            Email
          </a>
          <a className="transition hover:text-cream" href={channels[0].href} rel="noreferrer" target="_blank">
            Bilibili
          </a>
          <a className="transition hover:text-cream" href={channels[1].href} rel="noreferrer" target="_blank">
            {t.footer.rednote}
          </a>
          <a className="transition hover:text-cream" href={channels[2].href} rel="noreferrer" target="_blank">
            {t.footer.douyin}
          </a>
          <span>{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

function Layout({ children, lang, onToggleLanguage, t }) {
  return (
    <>
      <ScrollToTop />
      <Header lang={lang} onToggleLanguage={onToggleLanguage} t={t} />
      <main className="pt-[96px] sm:pt-[72px]">{children}</main>
      <Footer lang={lang} t={t} />
    </>
  );
}

function ButtonLink({ children, secondary = false, to }) {
  return (
    <Link
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm transition duration-300 ${
        secondary
          ? "border border-white/18 bg-white/[0.02] text-white hover:border-white/40 hover:bg-white/[0.05]"
          : "bg-cream text-navy shadow-[0_18px_50px_rgba(247,245,240,0.13)] hover:bg-white"
      }`}
      to={to}
    >
      {children}
      <span className="transition group-hover:translate-x-1">
        <Arrow />
      </span>
    </Link>
  );
}

function PageIntro({ eyebrow, title, copy }) {
  return (
    <div className="min-w-0 max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="font-display balance mt-7 break-words text-5xl font-normal leading-[1.12] tracking-[-0.055em] text-cream sm:text-7xl">
        {title}
      </h1>
      {copy && <p className="mt-8 max-w-2xl break-words text-lg leading-9 text-muted">{copy}</p>}
    </div>
  );
}

function WorkIndex({ compact = false, lang }) {
  return (
    <div className={`overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] ${compact ? "mt-14" : "mt-16"}`}>
      {featuredWork.map((item) => (
        <Link
          className="group grid gap-4 border-b border-white/8 px-5 py-7 transition last:border-b-0 hover:bg-white/[0.045] sm:grid-cols-[4rem_11rem_1fr_auto] sm:items-center sm:gap-6 sm:px-7"
          key={item.number}
          to={`/work?section=${item.number}`}
        >
          <p className="font-en text-xs tracking-[0.22em] text-muted">{item.number}</p>
          <p className="text-sm text-muted">{text(item.label, lang)}</p>
          <div>
            <h3 className="font-display text-[1.45rem] font-normal text-cream">{text(item.title, lang)}</h3>
            {!compact && <p className="mt-2 max-w-xl leading-7 text-muted">{text(item.copy, lang)}</p>}
          </div>
          <span className="mt-2 text-cream transition group-hover:translate-x-1 sm:mt-0">
            <Arrow />
          </span>
        </Link>
      ))}
    </div>
  );
}

function HomePage({ lang, t }) {
  return (
    <>
      <section className="relative overflow-hidden bg-black text-cream">
        <div aria-hidden="true" className="hairline-grid pointer-events-none absolute inset-x-0 top-0 h-full opacity-50" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-16 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cream/[0.045] blur-3xl"
        />
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-52 top-8 hidden w-[44rem] opacity-[0.04] invert md:block"
          src={brandMark}
        />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:grid-cols-[1fr_20rem] lg:items-end">
          <div className="fade-up">
            <Eyebrow light>{t.home.eyebrow}</Eyebrow>
            <h1 className="font-display balance mt-8 max-w-5xl text-[2.9rem] font-normal leading-[1.08] tracking-[-0.065em] min-[370px]:text-[3.35rem] sm:text-[5.8rem]">
              <StackedLines lines={t.home.heroLines} />
            </h1>
            <p className="mt-10 max-w-2xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">{t.home.intro}</p>
            <div className="mt-11 flex flex-wrap gap-4">
              <ButtonLink to="/work">{t.home.workCta}</ButtonLink>
              <ButtonLink secondary to="/contact">
                {t.home.contactCta}
              </ButtonLink>
            </div>
          </div>
          <div className="surface rounded-[2rem] p-7 text-white/68">
            <div className="mb-7 overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.03]">
              <img
                alt=""
                aria-hidden="true"
                className="image-lift aspect-[16/10] w-full object-cover opacity-[0.86]"
                loading="lazy"
                src={editorialVisuals.hero}
              />
            </div>
            <Eyebrow light>{t.home.focusEyebrow}</Eyebrow>
            <p className="font-display mt-7 text-2xl leading-10 text-cream">
              <StackedLines lines={t.home.focusTitle} />
            </p>
            <p className="mt-9 border-t border-white/14 pt-6 text-sm leading-7">
              <StackedLines lines={t.home.focusCopy} />
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 md:grid-cols-[17rem_1fr]">
          <div>
            <Eyebrow>{t.home.selectedEyebrow}</Eyebrow>
            <h2 className="font-display mt-6 text-4xl font-normal leading-tight tracking-[-0.035em] text-cream">
              {t.home.selectedTitle}
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-lg leading-8 text-muted">{t.home.selectedCopy}</p>
            <WorkIndex compact lang={lang} />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-paper text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[17rem_1fr] sm:py-24">
          <div>
            <Eyebrow light>{t.home.practiceEyebrow}</Eyebrow>
            <h2 className="font-display mt-6 text-4xl font-normal leading-tight">{t.home.practiceTitle}</h2>
          </div>
          <div className="grid gap-3">
            {capabilities.map((item) => (
              <article className="surface grid gap-5 rounded-[1.5rem] p-6 sm:grid-cols-[13rem_1fr]" key={item.english}>
                <div>
                  <p className="font-display text-xl">{text(item.title, lang)}</p>
                  <p className="font-en mt-2 text-[11px] tracking-[0.18em] text-white/48">{item.english}</p>
                </div>
                <p className="max-w-lg leading-8 text-white/66">{text(item.copy, lang)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ArticleArchive({ lang, t }) {
  if (featuredArticles.length === 0) {
    return (
      <div className="mt-12 flex flex-col justify-between gap-7 border-y border-white/10 py-9 sm:flex-row sm:items-center">
        <p className="font-display text-2xl font-normal text-cream">{t.articles.emptyTitle}</p>
        <p className="shrink-0 text-sm text-muted">{t.articles.emptyCopy}</p>
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {featuredArticles.map((article, index) => (
        <a
          className="group block overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-3 transition duration-500 hover:-translate-y-1 hover:border-white/26 hover:bg-white/[0.055]"
          href={article.href}
          key={article.href}
          rel="noreferrer"
          target="_blank"
        >
          <div className="overflow-hidden rounded-[1rem] bg-white/5">
            <img
              alt=""
              className="image-lift aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              loading="lazy"
              src={article.cover}
            />
          </div>
          <p className="font-en mt-5 text-[11px] tracking-[0.2em] text-muted">
            NO. {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-display mt-3 min-h-16 text-lg leading-7 text-cream transition group-hover:text-white">
            {text(article.title, lang)}
          </h3>
        </a>
      ))}
    </div>
  );
}

function PhotographyArchive({ lang, t }) {
  const cardClass = {
    large: "lg:col-span-7",
    portrait: "lg:col-span-5",
    standard: "lg:col-span-4",
    wide: "lg:col-span-4",
  };
  const imageClass = {
    large: "aspect-[16/10] sm:aspect-[16/9]",
    portrait: "aspect-[4/5] sm:aspect-[3/4]",
    standard: "aspect-[4/3]",
    wide: "aspect-[4/3]",
  };

  return (
    <div className="mt-14 grid gap-x-5 gap-y-12 lg:grid-cols-12">
      {photographyWorks.map((photo, index) => (
        <a
          className={`group block ${cardClass[photo.layout] ?? "lg:col-span-4"}`}
          href={photo.src}
          key={photo.src}
          rel="noreferrer"
          target="_blank"
        >
          <div className="soft-ring overflow-hidden rounded-[1.5rem] bg-navy-soft">
            <img
              alt={text(photo.alt, lang)}
              className={`image-lift w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035] ${
                imageClass[photo.layout] ?? "aspect-[4/3]"
              }`}
              decoding="async"
              loading={index < 2 ? "eager" : "lazy"}
              src={photo.thumb}
            />
          </div>
          <div className="mt-5 flex items-start justify-between gap-5 border-t border-white/10 pt-4">
            <div>
              <h3 className="font-display text-2xl font-normal leading-tight text-cream">{text(photo.title, lang)}</h3>
              <p className="font-en mt-2 text-[11px] tracking-[0.18em] text-muted">
                {text(photo.location, lang)} / {photo.year}
              </p>
            </div>
            <span className="mt-1 inline-flex items-center gap-2 text-sm text-muted transition group-hover:text-cream">
              {t.common.viewFullImage} <Arrow />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

function PhotographyAlbumCard({ lang, t }) {
  const previewPhotos = photographyWorks.slice(0, 4);

  return (
    <Link
      className="surface group mt-14 grid overflow-hidden rounded-[2rem] transition hover:border-white/24 lg:grid-cols-[1fr_26rem]"
      to="/photography"
    >
      <div className="flex min-h-[24rem] flex-col justify-between p-8 sm:p-10">
        <div>
          <p className="text-caps text-muted">
            PHOTO FOLDER / {photographyWorks.length} WORKS
          </p>
          <h3 className="font-display mt-7 max-w-xl text-4xl font-normal leading-tight tracking-[-0.035em] text-cream sm:text-5xl">
            <StackedLines lines={t.photoAlbum.title} />
          </h3>
        </div>
        <span className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-cream px-6 py-3.5 text-sm text-navy shadow-[0_18px_50px_rgba(247,245,240,0.12)] transition group-hover:bg-white">
          {t.photoAlbum.cta} <Arrow />
        </span>
      </div>

      <div className="relative min-h-[24rem] overflow-hidden border-t border-white/10 bg-cream/95 lg:border-l lg:border-t-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.86),transparent_34%),linear-gradient(135deg,rgba(193,225,255,0.35),rgba(245,214,218,0.42),rgba(209,236,218,0.3))]" />
        {previewPhotos.map((photo, index) => {
          const frames = [
            "left-[11%] top-[18%] z-20 -rotate-6",
            "left-[36%] top-[10%] z-30 rotate-3",
            "left-[22%] top-[42%] z-10 rotate-6",
            "left-[58%] top-[35%] z-20 -rotate-3",
          ];

          return (
            <div
              className={`absolute w-44 bg-white p-3 pb-10 shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition duration-700 group-hover:-translate-y-2 sm:w-52 ${
                frames[index]
              }`}
              key={photo.src}
            >
              <img alt="" aria-hidden="true" className="aspect-[4/3] w-full object-cover" loading="lazy" src={photo.thumb} />
              <span className="font-en mt-3 block text-[10px] tracking-[0.2em] text-navy/55">
                {String(index + 1).padStart(2, "0")} / {text(photo.location, lang)}
              </span>
            </div>
          );
        })}
      </div>
    </Link>
  );
}

function ChannelCard({ channel, lang, t }) {
  const contents = (
    <>
      <div className="flex items-start justify-between gap-5">
        <p className="font-en text-[11px] tracking-[0.24em] text-navy/60">{channel.english}</p>
        <PlatformIcon platform={channel.icon} />
      </div>
      <h3 className="font-display mt-8 text-3xl font-normal text-navy">{text(channel.title, lang)}</h3>
      <p className="mt-4 text-base text-navy">{text(channel.handle, lang)}</p>
      <p className="mt-3 min-h-14 text-sm leading-7 text-navy/65">{text(channel.note, lang)}</p>
      <span className="mt-8 inline-flex items-center gap-3 text-sm text-navy">
        {channel.href ? t.common.enterProfile : t.common.pendingLink}
        {channel.href && <Arrow />}
      </span>
    </>
  );

  return channel.href ? (
    <a
      className={`group block min-h-80 rounded-[1.5rem] p-8 transition duration-500 hover:-translate-y-1 ${channel.style}`}
      href={channel.href}
      rel="noreferrer"
      target="_blank"
    >
      {contents}
    </a>
  ) : (
    <div className={`min-h-80 rounded-[1.5rem] p-8 ${channel.style}`}>{contents}</div>
  );
}

function ResumeDownloadCard({ item, lang, t }) {
  return (
    <a
      className="surface group flex min-h-64 flex-col justify-between rounded-[1.6rem] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/24"
      download={text(item.fileName, lang)}
      href={item.href}
    >
      <div>
        <p className="font-en text-[11px] tracking-[0.22em] text-muted">{text(item.language, lang)}</p>
        <h3 className="font-display mt-7 text-3xl font-normal leading-tight text-cream">{text(item.title, lang)}</h3>
        <p className="mt-5 text-sm leading-7 text-muted">{text(item.copy, lang)}</p>
      </div>
      <span className="mt-10 inline-flex items-center gap-3 text-sm text-cream transition group-hover:translate-x-1">
        {t.common.downloadPdf} <Arrow />
      </span>
    </a>
  );
}

function WorkPage({ lang, t }) {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <PageIntro copy={t.workPage.copy} eyebrow={t.workPage.eyebrow} title={t.workPage.title} />
      </section>

      <section className="border-t border-white/10" id="section-01">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[17rem_1fr]">
          <div>
            <Eyebrow>{t.workPage.corporateEyebrow}</Eyebrow>
            <h2 className="font-display mt-7 text-4xl font-normal leading-tight tracking-[-0.035em] text-cream">
              {t.workPage.corporateTitle}
            </h2>
          </div>
          <div className="min-w-0">
            <h3 className="font-display max-w-2xl break-words text-3xl font-normal leading-snug text-cream sm:text-4xl">
              {t.workPage.corporateHeading}
            </h3>
            <p className="mt-7 max-w-2xl break-words text-lg leading-9 text-muted">{t.workPage.corporateCopy}</p>
            <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
              <img
                alt=""
                aria-hidden="true"
                className="image-lift aspect-[16/7] w-full object-cover opacity-[0.82]"
                loading="lazy"
                src={editorialVisuals.strategy}
              />
            </div>
            <div className="mt-10 grid grid-cols-1 gap-3 min-[520px]:grid-cols-2 sm:grid-cols-4">
              {practiceMetrics.map((metric) => (
                <div className={`${metric.style} rounded-[1.25rem] px-5 py-7`} key={text(metric.label, lang)}>
                  <p className="font-display text-3xl text-navy">{text(metric.value, lang)}</p>
                  <p className="mt-3 text-sm leading-6 text-navy/65">{text(metric.label, lang)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-paper" id="section-02">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Eyebrow>{t.workPage.editorialEyebrow}</Eyebrow>
          <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="font-display text-4xl font-normal leading-tight tracking-[-0.035em] text-cream sm:text-5xl">
              <StackedLines lines={t.workPage.editorialTitle} />
            </h2>
            <p className="max-w-lg leading-8 text-muted">{t.workPage.editorialCopy}</p>
          </div>
          <ArticleArchive lang={lang} t={t} />
        </div>
      </section>

      <section className="border-t border-white/10" id="section-03">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Eyebrow>{t.workPage.platformEyebrow}</Eyebrow>
          <div className="mt-7 grid gap-8 lg:grid-cols-[17rem_1fr]">
            <h2 className="font-display text-4xl font-normal leading-tight tracking-[-0.035em] text-cream">
              {t.workPage.platformTitle}
            </h2>
            <p className="max-w-xl text-lg leading-8 text-muted">{t.workPage.platformCopy}</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {channels.map((channel) => (
              <ChannelCard channel={channel} key={channel.english} lang={lang} t={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-paper" id="section-04">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Eyebrow>{t.workPage.photoEyebrow}</Eyebrow>
          <div className="mt-7 grid gap-8 lg:grid-cols-[17rem_1fr]">
            <h2 className="font-display text-4xl font-normal leading-tight tracking-[-0.035em] text-cream sm:text-5xl">
              {t.workPage.photoTitle}
            </h2>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-muted">{t.workPage.photoCopy}</p>
              <p className="mt-5 text-sm leading-7 text-muted">{t.workPage.photoNote}</p>
            </div>
          </div>
          <PhotographyAlbumCard lang={lang} t={t} />
        </div>
      </section>
    </>
  );
}

function PhotographyPage({ lang, t }) {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-16 sm:px-8 sm:pt-24">
        <Link className="inline-flex items-center gap-3 text-sm text-muted transition hover:text-cream" to="/work?section=04">
          <span className="rotate-180">
            <Arrow />
          </span>
          {t.photographyPage.back}
        </Link>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_18rem] lg:items-end">
          <PageIntro copy={t.photographyPage.copy} eyebrow={t.photographyPage.eyebrow} title={t.photographyPage.title} />
          <div className="surface rounded-[1.5rem] p-6 text-sm leading-7 text-muted">
            <p className="font-en text-[11px] tracking-[0.2em] text-muted">{t.photographyPage.archiveEyebrow}</p>
            <p className="font-display mt-5 text-3xl text-cream">
              {photographyWorks.length} {t.photographyPage.countLabel}
            </p>
            <p className="mt-5">{t.photographyPage.note}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <PhotographyArchive lang={lang} t={t} />
        </div>
      </section>
    </>
  );
}

function ResumePage({ lang, t }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
      <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-16 sm:flex-row sm:items-end">
        <PageIntro copy={t.resumePage.copy} eyebrow={t.resumePage.eyebrow} title={t.resumePage.title} />
      </div>

      <div className="grid gap-10 border-b border-white/10 py-14 lg:grid-cols-[18rem_1fr] lg:gap-20">
        <div>
          <Eyebrow>{t.resumePage.downloadsEyebrow}</Eyebrow>
          <h2 className="font-display mt-6 text-4xl font-normal leading-tight tracking-[-0.035em] text-cream">
            {t.resumePage.downloadsTitle}
          </h2>
          <p className="mt-6 text-sm leading-7 text-muted">{t.resumePage.downloadsCopy}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {resumeDownloads.map((item) => (
            <ResumeDownloadCard item={item} key={item.href} lang={lang} t={t} />
          ))}
        </div>
      </div>

      <div className="grid gap-14 py-14 lg:grid-cols-[18rem_1fr] lg:gap-20">
        <aside>
          <Eyebrow>{t.resumePage.profileEyebrow}</Eyebrow>
          <p className="mt-7 text-[15px] leading-8 text-muted">{t.resumePage.profileCopy}</p>
          <div className="surface mt-12 space-y-4 rounded-[1.5rem] p-6 text-sm leading-7 text-muted">
            {credentials.map((credential) => (
              <p className="flex items-center gap-2.5" key={text(credential.text, lang)}>
                {credential.icon && (
                  <img
                    alt={text(credential.alt, lang)}
                    className="size-5 shrink-0 object-contain opacity-85"
                    loading="lazy"
                    src={credential.icon}
                  />
                )}
                <span>{text(credential.text, lang)}</span>
              </p>
            ))}
          </div>
        </aside>
        <div>
          <Eyebrow>{t.resumePage.experienceEyebrow}</Eyebrow>
          {experience.map((item) => (
            <article className="mt-5 grid gap-5 border-t border-white/10 py-9 sm:grid-cols-[10rem_1fr]" key={text(item.company, lang)}>
              <p className="font-en text-sm text-muted">{text(item.range, lang)}</p>
              <div>
                <h2 className="font-display text-2xl font-normal text-cream">{text(item.role, lang)}</h2>
                <p className="mt-3 text-sm text-muted">{text(item.company, lang)}</p>
                <p className="mt-6 max-w-2xl text-[15px] leading-8 text-muted">{text(item.detail, lang)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-12">
        <Eyebrow>{t.resumePage.expertiseEyebrow}</Eyebrow>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((skill) => (
            <div className="surface rounded-[1.35rem] px-6 py-9 font-display text-xl text-cream" key={text(skill, lang)}>
              {text(skill, lang)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage({ t }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
      <div className="grid gap-14 lg:grid-cols-[1fr_20rem] lg:items-start">
        <div>
          <PageIntro
            copy={t.contactPage.copy}
            eyebrow={t.contactPage.eyebrow}
            title={<StackedLines lines={t.contactPage.titleLines} />}
          />
          <a
            className="mt-11 inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 text-sm text-navy shadow-[0_18px_50px_rgba(247,245,240,0.13)] transition hover:bg-white"
            href="mailto:jerryzhao1998@163.com?subject=Website%20Enquiry"
          >
            jerryzhao1998@163.com <Arrow />
          </a>
        </div>
        <aside className="surface rounded-[1.75rem] p-7 lg:mt-16">
          <div className="mb-7 overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03]">
            <img
              alt=""
              aria-hidden="true"
              className="image-lift aspect-[4/3] w-full object-cover opacity-[0.84]"
              loading="lazy"
              src={editorialVisuals.contact}
            />
          </div>
          <Eyebrow>{t.contactPage.findMe}</Eyebrow>
          <p className="font-display mt-7 text-3xl text-cream">{t.contactPage.account}</p>
          <p className="mt-3 text-sm leading-7 text-muted">{t.contactPage.accountNote}</p>
          <div className="mt-9 space-y-4 border-t border-white/10 pt-7 text-sm">
            <a className="flex justify-between text-cream" href={channels[0].href} rel="noreferrer" target="_blank">
              Bilibili <Arrow />
            </a>
            <a className="flex justify-between text-cream" href={channels[1].href} rel="noreferrer" target="_blank">
              {t.footer.rednote} <Arrow />
            </a>
            <a className="flex justify-between text-cream" href={channels[2].href} rel="noreferrer" target="_blank">
              {t.footer.douyin} <Arrow />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function NotFoundPage({ t }) {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-6xl flex-col items-center justify-center px-5 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="font-display mt-7 text-4xl text-cream">{t.notFound.title}</h1>
      <Link className="mt-10 text-sm text-cream" to="/">
        {t.notFound.back}
      </Link>
    </section>
  );
}

export default function App() {
  const [lang, setLang] = useState(getInitialLanguage);
  const t = siteCopy[lang];

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, lang);
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.documentElement.dataset.lang = lang;
    document.title = t.siteTitle;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", t.siteDescription);
  }, [lang, t]);

  const toggleLanguage = () => {
    setLang((current) => (current === "zh" ? "en" : "zh"));
  };

  return (
    <Layout lang={lang} onToggleLanguage={toggleLanguage} t={t}>
      <Routes>
        <Route element={<HomePage lang={lang} t={t} />} path="/" />
        <Route element={<WorkPage lang={lang} t={t} />} path="/work" />
        <Route element={<PhotographyPage lang={lang} t={t} />} path="/photography" />
        <Route element={<ResumePage lang={lang} t={t} />} path="/resume" />
        <Route element={<ContactPage t={t} />} path="/contact" />
        <Route element={<NotFoundPage t={t} />} path="*" />
      </Routes>
    </Layout>
  );
}
