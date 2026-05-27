import { useEffect } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";

const brandMark = `${import.meta.env.BASE_URL}brand-mark.webp`;

const navigation = [
  { label: "首页", to: "/" },
  { label: "作品", to: "/work" },
  { label: "简历", to: "/resume" },
  { label: "联系", to: "/contact" },
];

const featuredWork = [
  {
    number: "01",
    label: "企业品牌",
    title: "媒体传播与品牌内容体系",
    copy: "持续围绕重点项目与企业行动生产内容，建立媒体连接与声誉表达。",
  },
  {
    number: "02",
    label: "原始大陆",
    title: "公众号高阅读文章专栏",
    copy: "以文章为作品，呈现关于传播、技术与生活的长期观察。",
  },
  {
    number: "03",
    label: "内容平台",
    title: "影像、图文与短内容主页",
    copy: "将内容实践延伸至 B 站、小红书与抖音。",
  },
];

const practiceMetrics = [
  { value: "近 200", label: "篇媒体与品牌稿件" },
  { value: "80+", label: "项目素材覆盖" },
  { value: "12TB", label: "可复用内容资产" },
  { value: "6", label: "场大型活动统筹" },
];

// Waiting for verified public article URLs and cover images from the WeChat backend.
const featuredArticles = [];

const channels = [
  {
    title: "哔哩哔哩",
    english: "BILIBILI",
    handle: "原始大陆PM",
    note: "视频与影像作品",
    href: "https://space.bilibili.com/136635542?spm_id_from=333.1007.0.0",
    style: "bg-sky",
  },
  {
    title: "小红书",
    english: "REDNOTE",
    handle: "原始大陆 PM",
    note: "图文与生活观察",
    href: "https://www.xiaohongshu.com/user/profile/641d94a7000000001f032ed3",
    style: "bg-blush",
  },
  {
    title: "抖音",
    english: "DOUYIN",
    handle: "公开主页链接待补充",
    note: "当前收到的是本人登录页，访客无法直达",
    style: "bg-mint",
  },
];

const capabilities = [
  {
    title: "品牌传播",
    english: "Brand Communications",
    copy: "围绕项目价值与组织行动，以新闻内容和媒体连接提升品牌认知。",
  },
  {
    title: "内容制作",
    english: "Editorial & Visual",
    copy: "从选题、采访到摄影剪辑，形成稳定且可复用的内容资产。",
  },
  {
    title: "舆情管理",
    english: "Issues Management",
    copy: "参与研判、口径与平台沟通，在关键节点支持企业声誉管理。",
  },
];

const experience = [
  {
    range: "2022.04 - 至今",
    role: "企业文化与传播专员 / 办公室负责人",
    company: "中铁四局集团有限公司第八工程分公司",
    detail:
      "负责品牌与市场传播、内容生产及大型活动执行；建立标准化内容流程和素材库，参与舆情研判、口径制定与媒体平台对接。",
  },
];

const credentials = [
  "厦门大学 · 新闻与传播硕士（2025）",
  "山西大学 · 历史学学士（辅修汉语言文学、哲学）",
  "安徽省摄影家协会会员",
  "CET-6 / 普通话二级甲等",
];

function Arrow() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path d="M2.5 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
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

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-navy/8 bg-cream/88 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 min-[380px]:px-5 sm:px-8">
        <Link aria-label="赵元坤，返回首页" className="flex items-baseline gap-3 text-navy" to="/">
          <span className="font-display text-xl">赵元坤</span>
          <span className="font-en hidden text-[11px] tracking-[0.22em] text-muted sm:block">
            YUANKUN ZHAO
          </span>
        </Link>
        <nav aria-label="主导航" className="flex items-center gap-3 text-[13px] min-[380px]:gap-5 min-[380px]:text-sm sm:gap-8">
          {navigation.map(({ label, to }) => (
            <NavLink
              className={({ isActive }) =>
                `relative py-2 transition ${isActive ? "text-navy" : "text-muted hover:text-navy"}`
              }
              end={to === "/"}
              key={to}
              to={to}
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && <span className="absolute inset-x-0 -bottom-1 h-px bg-navy" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-navy/10 bg-cream">
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-44 -right-28 hidden w-[32rem] opacity-[0.065] mix-blend-multiply sm:block"
        loading="lazy"
        src={brandMark}
      />
      <div className="relative mx-auto flex min-h-56 max-w-6xl flex-col justify-between gap-8 px-5 py-12 text-sm text-muted sm:flex-row sm:items-end sm:px-8">
        <div>
          <p className="font-display text-2xl text-navy">赵元坤</p>
          <p className="mt-3">品牌公关 · 舆情管理 · 内容创作</p>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-3">
          <a className="transition hover:text-navy" href="mailto:jerryzhao1998@163.com">
            Email
          </a>
          <a className="transition hover:text-navy" href={channels[0].href} rel="noreferrer" target="_blank">
            Bilibili
          </a>
          <a className="transition hover:text-navy" href={channels[1].href} rel="noreferrer" target="_blank">
            小红书
          </a>
          <span>© 2026 Zhao Yuankun</span>
        </div>
      </div>
    </footer>
  );
}

function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="pt-[72px]">{children}</main>
      <Footer />
    </>
  );
}

function ButtonLink({ children, secondary = false, to }) {
  return (
    <Link
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm transition ${
        secondary
          ? "border border-white/20 text-white hover:border-white/45"
          : "bg-cream text-navy hover:bg-white"
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
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="font-display balance mt-7 text-5xl font-normal leading-[1.18] tracking-[-0.05em] text-navy sm:text-7xl">
        {title}
      </h1>
      {copy && <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">{copy}</p>}
    </div>
  );
}

function WorkIndex({ compact = false }) {
  return (
    <div className={`divide-y divide-navy/10 border-y border-navy/10 ${compact ? "mt-14" : "mt-16"}`}>
      {featuredWork.map((item) => (
        <Link
          className="group grid gap-4 py-7 transition sm:grid-cols-[4rem_11rem_1fr_auto] sm:items-center sm:gap-6"
          key={item.number}
          to={`/work?section=${item.number}`}
        >
          <p className="font-en text-xs tracking-[0.22em] text-muted">{item.number}</p>
          <p className="text-sm text-muted">{item.label}</p>
          <div>
            <h3 className="font-display text-[1.45rem] font-normal text-navy">{item.title}</h3>
            {!compact && <p className="mt-2 max-w-xl leading-7 text-muted">{item.copy}</p>}
          </div>
          <span className="mt-2 text-navy transition group-hover:translate-x-1 sm:mt-0">
            <Arrow />
          </span>
        </Link>
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-cream">
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 top-2 hidden w-[44rem] opacity-[0.045] invert md:block"
          src={brandMark}
        />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1fr_17rem] lg:items-end">
          <div className="fade-up">
            <Eyebrow light>Brand Communications / Editorial Practice</Eyebrow>
            <h1 className="font-display balance mt-8 text-[2.65rem] font-normal leading-[1.17] tracking-[-0.055em] min-[370px]:text-[3.2rem] sm:text-[5.25rem]">
              让现场被看见，
              <br />
              让价值被理解。
            </h1>
            <p className="mt-9 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
              专注品牌公关、舆情管理与内容策划。以新闻采编、影像创作与公共沟通，为企业和组织建立真实、清晰、经得起时间检验的表达。
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
              <ButtonLink to="/work">浏览作品</ButtonLink>
              <ButtonLink secondary to="/contact">
                联系我
              </ButtonLink>
            </div>
          </div>
          <div className="border-l border-white/18 pl-7 text-white/68">
            <Eyebrow light>Current Focus</Eyebrow>
            <p className="font-display mt-7 text-2xl leading-10 text-cream">
              企业文化
              <br />
              与品牌传播
            </p>
            <p className="mt-9 border-t border-white/14 pt-6 text-sm leading-7">
              内容策略
              <br />
              媒体关系与舆情管理
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 md:grid-cols-[17rem_1fr]">
          <div>
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="font-display mt-6 text-4xl font-normal leading-tight text-navy">作品与影响</h2>
          </div>
          <div>
            <p className="max-w-xl text-lg leading-8 text-muted">
              我关心的不只是内容被发布，更是信息如何建立理解、连接人与组织，并留下长期价值。
            </p>
            <WorkIndex compact />
          </div>
        </div>
      </section>

      <section className="bg-navy text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[17rem_1fr] sm:py-24">
          <div>
            <Eyebrow light>Practice</Eyebrow>
            <h2 className="font-display mt-6 text-4xl font-normal leading-tight">工作方法</h2>
          </div>
          <div className="divide-y divide-white/14 border-t border-white/14">
            {capabilities.map((item) => (
              <article className="grid gap-4 py-8 sm:grid-cols-[13rem_1fr]" key={item.title}>
                <div>
                  <p className="font-display text-xl">{item.title}</p>
                  <p className="font-en mt-2 text-[11px] tracking-[0.18em] text-white/48">{item.english}</p>
                </div>
                <p className="max-w-lg leading-8 text-white/66">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ArticleArchive() {
  if (featuredArticles.length === 0) {
    return (
      <div className="mt-12 flex flex-col justify-between gap-7 border-y border-navy/10 py-9 sm:flex-row sm:items-center">
        <p className="font-display text-2xl font-normal text-navy">文章将在阅读榜单确认后陈列于此。</p>
        <p className="shrink-0 text-sm text-muted">微信搜索公众号：原始大陆</p>
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {featuredArticles.map((article, index) => (
        <a className="group" href={article.href} key={article.title} rel="noreferrer" target="_blank">
          <img alt="" className="aspect-[4/5] w-full object-cover" src={article.cover} />
          <p className="font-en mt-5 text-[11px] tracking-[0.2em] text-muted">
            NO. {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-display mt-3 text-lg leading-7 text-navy transition group-hover:text-accent">
            {article.title}
          </h3>
        </a>
      ))}
    </div>
  );
}

function ChannelCard({ channel }) {
  const contents = (
    <>
      <p className="font-en text-[11px] tracking-[0.24em] text-muted">{channel.english}</p>
      <h3 className="font-display mt-8 text-3xl font-normal text-navy">{channel.title}</h3>
      <p className="mt-4 text-base text-navy">{channel.handle}</p>
      <p className="mt-3 min-h-14 text-sm leading-7 text-muted">{channel.note}</p>
      <span className={`mt-8 inline-flex items-center gap-3 text-sm ${channel.href ? "text-navy" : "text-muted"}`}>
        {channel.href ? "进入主页" : "待提供公开链接"}
        {channel.href && <Arrow />}
      </span>
    </>
  );

  return channel.href ? (
    <a className={`group block p-8 transition hover:-translate-y-1 ${channel.style}`} href={channel.href} rel="noreferrer" target="_blank">
      {contents}
    </a>
  ) : (
    <div className={`p-8 ${channel.style}`}>{contents}</div>
  );
}

function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <PageIntro
          copy="从企业新闻传播到个人内容品牌，文字、影像与平台运营共同构成我的传播实践。"
          eyebrow="Portfolio"
          title="作品与影响"
        />
      </section>

      <section className="border-t border-navy/10" id="section-01">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[17rem_1fr]">
          <div>
            <Eyebrow>01 / Corporate</Eyebrow>
            <h2 className="font-display mt-7 text-4xl font-normal leading-tight text-navy">企业品牌传播</h2>
          </div>
          <div>
            <h3 className="font-display max-w-2xl text-3xl font-normal leading-snug text-navy sm:text-4xl">
              媒体传播与品牌内容体系
            </h3>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-muted">
              搭建并维护媒体联络机制，围绕重点项目与企业行动持续输出内容，多篇稿件刊发于新华社、人民日报等央媒与省市媒体，提升项目及企业品牌认知度。
            </p>
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden bg-navy/10 sm:grid-cols-4">
              {practiceMetrics.map((metric) => (
                <div className="bg-cream px-5 py-7" key={metric.label}>
                  <p className="font-display text-3xl text-navy">{metric.value}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-paper" id="section-02">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Eyebrow>02 / Editorial Column</Eyebrow>
          <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="font-display text-4xl font-normal leading-tight text-navy sm:text-5xl">
              原始大陆
              <br />
              高阅读文章专栏
            </h2>
            <p className="max-w-lg leading-8 text-muted">
              将公众号中阅读量排名前十的文章整理为作品陈列，点击封面或标题即可进入原文。
            </p>
          </div>
          <ArticleArchive />
        </div>
      </section>

      <section className="border-t border-navy/10" id="section-03">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Eyebrow>03 / Platforms</Eyebrow>
          <div className="mt-7 grid gap-8 lg:grid-cols-[17rem_1fr]">
            <h2 className="font-display text-4xl font-normal leading-tight text-navy">个人内容品牌</h2>
            <p className="max-w-xl text-lg leading-8 text-muted">
              在不同内容场域中，以视频、图文与短内容持续表达。按平台进入我的公开主页。
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {channels.map((channel) => (
              <ChannelCard channel={channel} key={channel.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ResumePage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
      <div className="flex flex-col justify-between gap-10 border-b border-navy/10 pb-14 sm:flex-row sm:items-end">
        <PageIntro
          copy="品牌公关与企业传播从业者，拥有新闻传播研究背景与央企一线内容实践。"
          eyebrow="Resume"
          title="简历"
        />
        <button
          className="w-fit rounded-full border border-navy/15 px-6 py-3.5 text-sm text-navy transition hover:bg-paper"
          onClick={() => window.print()}
          type="button"
        >
          打印 / 保存简历
        </button>
      </div>

      <div className="grid gap-14 py-14 lg:grid-cols-[18rem_1fr] lg:gap-20">
        <aside>
          <Eyebrow>Profile</Eyebrow>
          <p className="mt-7 text-[15px] leading-8 text-muted">
            聚焦品牌传播、内容制作与舆情管理，以现场洞察和编辑能力，将工程项目、企业行动与公共价值准确表达。
          </p>
          <div className="mt-12 space-y-4 border-t border-navy/10 pt-7 text-sm leading-7 text-muted">
            {credentials.map((credential) => (
              <p key={credential}>{credential}</p>
            ))}
          </div>
        </aside>
        <div>
          <Eyebrow>Experience</Eyebrow>
          {experience.map((item) => (
            <article className="mt-7 grid gap-5 border-t border-navy/10 py-9 sm:grid-cols-[10rem_1fr]" key={item.company}>
              <p className="font-en text-sm text-muted">{item.range}</p>
              <div>
                <h2 className="font-display text-2xl font-normal text-navy">{item.role}</h2>
                <p className="mt-3 text-sm text-muted">{item.company}</p>
                <p className="mt-6 max-w-2xl text-[15px] leading-8 text-muted">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="border-t border-navy/10 py-12">
        <Eyebrow>Core Expertise</Eyebrow>
        <div className="mt-8 grid gap-px overflow-hidden bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
          {["品牌公关与媒体", "新闻摄影与采编", "视频脚本与剪辑", "舆情与声誉管理"].map((skill) => (
            <div className="bg-cream px-6 py-9 font-display text-xl text-navy" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
      <div className="grid gap-14 lg:grid-cols-[1fr_20rem] lg:items-start">
        <div>
          <PageIntro
            copy="关注品牌传播、内容制作与公共关系。欢迎通过邮件交流工作，也欢迎在微信搜索公众号“原始大陆”阅读我的文字。"
            eyebrow="Contact"
            title={
              <>
                交流工作，
                <br />
                也分享内容。
              </>
            }
          />
          <a
            className="mt-11 inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-sm text-cream transition hover:bg-navy-soft"
            href="mailto:jerryzhao1998@163.com?subject=Website%20Enquiry"
          >
            jerryzhao1998@163.com <Arrow />
          </a>
        </div>
        <aside className="border-t border-navy/10 pt-7 lg:mt-16">
          <Eyebrow>Find Me</Eyebrow>
          <p className="font-display mt-7 text-3xl text-navy">原始大陆</p>
          <p className="mt-3 text-sm leading-7 text-muted">微信公众号 / 微信搜索关注</p>
          <div className="mt-9 space-y-4 border-t border-navy/10 pt-7 text-sm">
            <a className="flex justify-between text-navy" href={channels[0].href} rel="noreferrer" target="_blank">
              哔哩哔哩 <Arrow />
            </a>
            <a className="flex justify-between text-navy" href={channels[1].href} rel="noreferrer" target="_blank">
              小红书 <Arrow />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-6xl flex-col items-center justify-center px-5 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="font-display mt-7 text-4xl text-navy">页面不存在</h1>
      <Link className="mt-10 text-sm text-navy" to="/">
        返回首页
      </Link>
    </section>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<WorkPage />} path="/work" />
        <Route element={<ResumePage />} path="/resume" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </Layout>
  );
}
