import { useEffect } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";

const brandMark = `${import.meta.env.BASE_URL}brand-mark.png`;

const navigation = [
  { label: "首页", to: "/" },
  { label: "作品", to: "/work" },
  { label: "简历", to: "/resume" },
  { label: "联系", to: "/contact" },
];

const projects = [
  {
    id: "media",
    sector: "企业品牌 / 媒体传播",
    title: "中央媒体与属地传播内容体系",
    summary:
      "在中铁四局八分公司搭建并维护媒体联络机制，围绕重点项目与企业行动持续产出内容，多篇稿件刊发于新华社、人民日报等央媒及省市媒体。",
    impact: "累计输出近 200 篇稿件",
    services: ["品牌传播", "新闻采编", "媒体联络"],
    from: "#e1ebfc",
    to: "#eef2f8",
    number: "01",
  },
  {
    id: "video",
    sector: "短视频 / 内容 IP",
    title: "“先锋周视界”系列短视频",
    summary:
      "独立策划、拍摄并制作系列短视频，以项目现场和建设者为内容切口，探索企业形象更具温度的视听表达。",
    impact: "打造企业短视频内容 IP",
    services: ["选题策划", "拍摄剪辑", "内容创新"],
    link: "https://space.bilibili.com/136635542?spm_id_from=333.1007.0.0",
    linkLabel: "查看视频主页",
    from: "#f0ebe3",
    to: "#f7f3ed",
    number: "02",
  },
  {
    id: "original-land",
    sector: "个人内容品牌 / 原始大陆",
    title: "把传播观察写进日常内容",
    summary:
      "围绕传播、AI、职场与生活观察持续进行图文和视频创作，以个人内容品牌“原始大陆”连接观点与读者。",
    impact: "持续经营跨平台内容表达",
    services: ["内容写作", "话题观察", "新媒体运营"],
    link: "https://www.xiaohongshu.com/user/profile/641d94a7000000001f032ed3",
    linkLabel: "访问小红书主页",
    from: "#e5eeec",
    to: "#f0f5f2",
    number: "03",
  },
];

const capabilities = [
  {
    title: "Brand & Media",
    description: "围绕项目价值与组织行动，以新闻内容和媒体连接提升品牌认知。",
  },
  {
    title: "Content Production",
    description: "从选题、脚本到拍摄剪辑，以影像和文字打造可持续的内容资产。",
  },
  {
    title: "Issues & Reputation",
    description: "参与舆情研判、口径制定和平台沟通，支持企业风险平稳化解。",
  },
];

const experience = [
  {
    range: "2022.04 - 至今",
    role: "企业文化与传播专员 / 办公室负责人",
    company: "中铁四局集团有限公司第八工程分公司",
    detail:
      "负责品牌与市场传播、内容生产及大型活动执行；搭建标准化内容流程和 12TB 素材库，覆盖 80+ 项目；参与舆情研判、口径制定与媒体平台对接。",
  },
];

const credentials = [
  "厦门大学 · 新闻与传播硕士（2025）",
  "山西大学 · 历史学学士（辅修汉语言文学、哲学）",
  "安徽省摄影家协会会员",
  "CET-6 / 普通话二级甲等",
];

const socialChannels = [
  {
    title: "哔哩哔哩",
    handle: "视频作品主页",
    description: "查看影像与视频内容",
    href: "https://space.bilibili.com/136635542?spm_id_from=333.1007.0.0",
  },
  {
    title: "小红书",
    handle: "原始大陆 PM",
    description: "思想杂货摊，生活备忘录",
    href: "https://www.xiaohongshu.com/user/profile/641d94a7000000001f032ed3",
  },
  {
    title: "微信公众号",
    handle: "原始大陆",
    description: "请在微信中搜索公众号名称关注",
  },
];

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path d="M2.5 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-[#fafaf8]/82 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link aria-label="赵元坤，返回首页" className="group flex items-center gap-3" to="/">
          <span className="flex size-8 items-center justify-center rounded-full bg-ink text-[12px] font-semibold tracking-tight text-white">
            ZY
          </span>
          <span className="hidden text-[15px] font-medium tracking-tight text-ink sm:block">
            赵元坤
          </span>
        </Link>
        <nav
          aria-label="主导航"
          className="flex items-center gap-1 rounded-full border border-black/6 bg-white/60 p-1"
        >
          {navigation.map(({ label, to }) => (
            <NavLink
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-[13px] transition duration-200 sm:px-5 ${
                  isActive
                    ? "bg-ink font-medium text-white"
                    : "text-muted hover:bg-black/4 hover:text-ink"
                }`
              }
              end={to === "/"}
              key={to}
              to={to}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-line bg-white/55">
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-44 -right-28 hidden w-[31rem] opacity-[0.045] mix-blend-multiply sm:block"
        loading="lazy"
        src={brandMark}
      />
      <div className="relative mx-auto flex min-h-56 max-w-7xl flex-col justify-between gap-7 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="font-medium text-ink">赵元坤 · Brand Communications</p>
          <p className="mt-1">品牌公关 · 舆情管理 · 内容创作</p>
        </div>
        <div className="flex gap-6">
          <a className="transition hover:text-ink" href="mailto:jerryzhao1998@163.com">
            Email
          </a>
          <a
            className="transition hover:text-ink"
            href="https://space.bilibili.com/136635542?spm_id_from=333.1007.0.0"
            rel="noreferrer"
            target="_blank"
          >
            Bilibili
          </a>
          <a
            className="transition hover:text-ink"
            href="https://www.xiaohongshu.com/user/profile/641d94a7000000001f032ed3"
            rel="noreferrer"
            target="_blank"
          >
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
      <main className="pt-[68px]">{children}</main>
      <Footer />
    </>
  );
}

function ButtonLink({ children, secondary = false, to }) {
  const className = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition duration-300 ${
    secondary
      ? "border border-black/10 bg-white/75 text-ink hover:bg-white hover:shadow-sm"
      : "bg-ink text-white hover:bg-[#25272b] hover:shadow-lg"
  }`;

  return (
    <Link className={className} to={to}>
      {children}
      <Arrow />
    </Link>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-muted">
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="balance text-3xl font-semibold tracking-[-0.055em] text-ink sm:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-5 text-base leading-7 text-muted sm:text-lg">{copy}</p>}
    </div>
  );
}

function ProjectCard({ project, compact = false }) {
  return (
    <article
      className={`group overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-card ${
        compact ? "" : "grid lg:grid-cols-[1fr_0.88fr]"
      }`}
      id={project.id}
    >
      <div className={compact ? "p-7 sm:p-8" : "p-8 sm:p-11"}>
        <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
          {project.sector}
        </p>
        <h3
          className={`mt-5 font-semibold tracking-[-0.045em] text-ink ${
            compact ? "text-2xl" : "text-3xl sm:text-[2rem]"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-4 leading-7 text-muted">{project.summary}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span className="rounded-full bg-paper px-3 py-1.5 text-[13px] text-muted" key={service}>
              {service}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition hover:text-accent"
            href={project.link}
            rel="noreferrer"
            target="_blank"
          >
            {project.linkLabel} <Arrow />
          </a>
        )}
      </div>
      <div
        className={`work-visual relative flex flex-col justify-between ${
          compact ? "min-h-44 border-t border-black/4 p-7" : "min-h-72 p-8 sm:p-11 lg:min-h-full"
        }`}
        style={{ "--visual-from": project.from, "--visual-to": project.to }}
      >
        <span className="text-sm font-medium text-ink/35">{project.number}</span>
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Outcome
          </p>
          <p className="max-w-xs text-xl font-medium tracking-[-0.035em] text-ink">
            {project.impact}
          </p>
        </div>
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_22rem]">
          <div className="fade-up max-w-4xl">
            <Eyebrow>Brand Communications & Content Strategy</Eyebrow>
            <h1 className="balance text-[3.35rem] font-semibold leading-[1.05] tracking-[-0.075em] text-ink sm:text-[5.15rem] lg:text-[6.25rem]">
              让项目被看见，
              <br className="hidden sm:block" />
              让品牌被理解。
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              我是赵元坤，专注品牌公关、舆情管理与内容策划。以新闻采编、影像创作和公共沟通，为企业建立有温度、有事实支撑的表达。
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink to="/work">浏览代表作品</ButtonLink>
              <ButtonLink secondary to="/contact">
                开始一次对话
              </ButtonLink>
            </div>
          </div>
          <aside className="panel-highlight fade-up delay-1 rounded-[28px] border border-black/5 p-7 shadow-card sm:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-muted">Currently</p>
            <p className="mt-5 text-xl font-medium leading-8 tracking-[-0.035em] text-ink">
              中铁四局八分公司
              <br />
              企业文化与传播专员
            </p>
            <div className="mt-9 border-t border-black/7 pt-6 text-sm leading-7 text-muted">
              Office Lead · Since 2022
              <br />
              品牌传播 / 内容生产 / 舆情管理
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-line bg-white/62">
        <div className="mx-auto grid max-w-7xl divide-y divide-line px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
          {[
            ["近 200", "篇媒体与品牌稿件"],
            ["80+", "项目素材覆盖"],
            ["6", "场大型活动统筹"],
          ].map(([value, label]) => (
            <div className="py-9 sm:px-9 sm:first:pl-0" key={label}>
              <p className="text-4xl font-semibold tracking-[-0.06em] text-ink">{value}</p>
              <p className="mt-2 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-12 flex flex-col justify-between gap-7 sm:mb-14 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="代表作品"
            copy="从央企品牌传播到个人内容创作，记录我将现场转化为表达的工作路径。"
          />
          <Link
            className="group flex shrink-0 items-center gap-2 text-sm font-medium text-ink"
            to="/work"
          >
            查看所有案例 <Arrow />
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard compact key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="rounded-[34px] bg-ink px-7 py-14 text-white sm:px-14 sm:py-16">
          <SectionHeading eyebrow="Approach" title="从现场出发，把传播做成长期资产。" />
          <div className="mt-14 grid gap-9 border-t border-white/14 pt-10 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title}>
                <p className="text-lg font-medium tracking-tight">{item.title}</p>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/62">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function WorkPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
      <div className="fade-up mb-16 max-w-3xl sm:mb-20">
        <Eyebrow>Portfolio</Eyebrow>
        <h1 className="balance text-5xl font-semibold tracking-[-0.065em] text-ink sm:text-7xl">
          作品与影响
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
          从央企新闻传播、短视频 IP 到个人内容品牌，我持续探索文字与影像如何产生真实影响。
        </p>
      </div>
      <div className="space-y-7">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-20 grid gap-9 border-t border-line pt-12 md:grid-cols-[1fr_1.35fr]">
        <SectionHeading eyebrow="Services" title="服务领域" />
        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {[
            "品牌传播与媒体联络",
            "新闻采编与选题策划",
            "短视频脚本与制作",
            "大型活动策划执行",
            "舆情研判与口径协同",
            "内容资产库建设管理",
          ].map((service, index) => (
            <div className="border-b border-line pb-6" key={service}>
              <span className="mr-5 text-xs text-muted">0{index + 1}</span>
              <span className="font-medium tracking-tight text-ink">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumePage() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
      <div className="fade-up flex flex-col justify-between gap-8 border-b border-line pb-14 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>Resume</Eyebrow>
          <h1 className="text-5xl font-semibold tracking-[-0.065em] text-ink sm:text-7xl">简历</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            品牌公关与企业传播从业者，拥有新闻传播研究背景与央企一线内容实践。
          </p>
        </div>
        <button
          className="w-fit rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-medium transition hover:shadow-sm"
          onClick={() => window.print()}
          type="button"
        >
          打印 / 保存简历
        </button>
      </div>

      <div className="grid gap-14 py-14 lg:grid-cols-[18rem_1fr] lg:gap-20">
        <aside>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Profile</p>
          <p className="mt-6 text-[15px] leading-7 text-muted">
            聚焦品牌传播、内容制作与舆情管理，以现场洞察和编辑能力，将工程项目、企业行动与公共价值准确表达。
          </p>
          <div className="mt-12 space-y-4 border-t border-line pt-7 text-sm text-muted">
            {credentials.map((credential) => (
              <p key={credential}>{credential}</p>
            ))}
          </div>
        </aside>
        <div>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Experience
          </p>
          {experience.map((item) => (
            <article
              className="grid gap-4 border-t border-line py-8 sm:grid-cols-[10rem_1fr]"
              key={item.company}
            >
              <p className="text-sm text-muted">{item.range}</p>
              <div>
                <h2 className="text-xl font-medium tracking-[-0.035em] text-ink">{item.role}</h2>
                <p className="mt-1 text-sm font-medium text-muted">{item.company}</p>
                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-[30px] border border-black/5 bg-white p-8 shadow-card sm:p-11">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Core Expertise</p>
        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["品牌公关与媒体", "新闻摄影与采编", "视频脚本与剪辑", "舆情与声誉管理"].map(
            (skill) => (
              <div className="rounded-2xl bg-paper px-5 py-7 text-base font-medium tracking-tight" key={skill}>
                {skill}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function ChannelCard({ channel }) {
  const body = (
    <>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{channel.title}</p>
        <p className="mt-3 text-lg font-medium tracking-[-0.03em] text-ink">{channel.handle}</p>
        <p className="mt-2 text-sm leading-6 text-muted">{channel.description}</p>
      </div>
      {channel.href ? <Arrow /> : <span className="text-xs font-medium text-muted">微信搜索</span>}
    </>
  );

  return channel.href ? (
    <a
      className="group flex items-center justify-between gap-4 rounded-2xl bg-paper p-5 transition hover:bg-[#f0f0ec]"
      href={channel.href}
      rel="noreferrer"
      target="_blank"
    >
      {body}
    </a>
  ) : (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-paper p-5">{body}</div>
  );
}

function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.88fr] lg:items-start">
        <div className="fade-up">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="balance text-5xl font-semibold leading-[1.08] tracking-[-0.07em] text-ink sm:text-7xl">
            交流工作，
            <br />
            也分享内容。
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-muted">
            关注品牌传播、内容制作与公共关系，欢迎通过邮件联系，或在我的内容平台找到我。
          </p>
          <a
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-base font-medium text-white transition hover:bg-[#25272b] hover:shadow-lg"
            href="mailto:jerryzhao1998@163.com?subject=Website%20Enquiry"
          >
            jerryzhao1998@163.com
            <Arrow />
          </a>
          <div className="mt-16 grid max-w-lg grid-cols-2 gap-7 border-t border-line pt-8 text-sm">
            <div>
              <p className="font-medium text-ink">从业方向</p>
              <p className="mt-3 leading-6 text-muted">品牌公关<br />企业内容传播</p>
            </div>
            <div>
              <p className="font-medium text-ink">内容品牌</p>
              <p className="mt-3 leading-6 text-muted">原始大陆<br />图文与视频表达</p>
            </div>
          </div>
        </div>

        <div className="fade-up delay-1 rounded-[30px] border border-black/5 bg-white p-7 shadow-card sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Channels</p>
          <h2 className="mt-5 text-2xl font-semibold tracking-[-0.045em] text-ink">
            在内容平台关注我的表达
          </h2>
          <div className="mt-9 space-y-3">
            {socialChannels.map((channel) => (
              <ChannelCard channel={channel} key={channel.title} />
            ))}
          </div>
          <p className="mt-9 text-sm leading-7 text-muted">
            微信公众号二维码将在获得原始图片后补充；当前可直接在微信搜索“原始大陆”。
          </p>
        </div>
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-7xl flex-col items-center justify-center px-5 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="text-4xl font-semibold tracking-[-0.05em]">页面不存在</h1>
      <ButtonLink to="/">返回首页</ButtonLink>
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
