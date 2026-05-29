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
    title: "公众号精选文章专栏",
    copy: "以文章为作品，呈现关于传播、技术与生活的长期观察。",
  },
  {
    number: "03",
    label: "内容平台",
    title: "影像、图文与短内容主页",
    copy: "将内容实践延伸至 B 站、小红书与抖音。",
  },
  {
    number: "04",
    label: "个人摄影",
    title: "个人摄影作品",
    copy: "以城市、自然与日常现场为题材，记录光线、结构与人的感受。",
  },
];

const practiceMetrics = [
  { value: "近 200", label: "篇媒体与品牌稿件", style: "bg-sky" },
  { value: "80+", label: "项目素材覆盖", style: "bg-blush" },
  { value: "12TB", label: "可复用内容资产", style: "bg-mint" },
  { value: "6", label: "场大型活动统筹", style: "bg-sky" },
];

const featuredArticles = [
  {
    title: "甲亢哥Speed游中国：“在场”是最顶级的国际传播",
    href: "https://mp.weixin.qq.com/s/eE6x5qGqALeOKSPcDtZ_wg",
    cover: `${import.meta.env.BASE_URL}articles/cover-01.webp`,
  },
  {
    title: "当Meta开始裁员8000人：默会知识，还能藏在大脑里吗？",
    href: "https://mp.weixin.qq.com/s/Pmo8WycEAL23zpD4ieSNTQ",
    cover: `${import.meta.env.BASE_URL}articles/cover-02.webp`,
  },
  {
    title: "我用5年时间，才看清注意力是怎么被偷走的",
    href: "https://mp.weixin.qq.com/s/RNLepvFin0-39GWGydVDJA",
    cover: `${import.meta.env.BASE_URL}articles/cover-03.webp`,
  },
  {
    title: "“进攻风车”的贾国龙",
    href: "https://mp.weixin.qq.com/s/I4LnOiAVsYSPRrQo3onVlg",
    cover: `${import.meta.env.BASE_URL}articles/cover-04.webp`,
  },
  {
    title: "登味的“悟性”到底啥意思？",
    href: "https://mp.weixin.qq.com/s/tYZgrwcPUwVZfPQgbykS5g",
    cover: `${import.meta.env.BASE_URL}articles/cover-05.webp`,
  },
  {
    title: "罗永浩西贝直播后，老乡鸡该干嘛？",
    href: "https://mp.weixin.qq.com/s/ulZXPVHq3dnXnyo8Qx3gtQ",
    cover: `${import.meta.env.BASE_URL}articles/cover-06.webp`,
  },
  {
    title: "这 文 凭 有 啥 用 ？",
    href: "https://mp.weixin.qq.com/s/a53VvESIzN_AlwlCBwNDBA",
    cover: `${import.meta.env.BASE_URL}articles/cover-07.webp`,
  },
  {
    title: "3个方法让你高效利用“被数字化”的人生",
    href: "https://mp.weixin.qq.com/s/7Afyq-hEbJjLuotY2Dh3Ug",
    cover: `${import.meta.env.BASE_URL}articles/cover-08.webp`,
  },
];

// Add new photos here; store full-size and thumbnail WebP assets under public/photography/.
const photographyWorks = [
  {
    title: "蓝色立面",
    location: "厦门",
    year: "2024",
    layout: "large",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/01-amoy-architecture.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/01-amoy-architecture.webp`,
    alt: "蓝色玻璃建筑立面向天空延展",
  },
  {
    title: "云下嘉庚",
    location: "厦门",
    year: "2024",
    layout: "portrait",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/02-amoy-clouds-campus.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/02-amoy-clouds-campus.webp`,
    alt: "厦门建筑与巨大白云映在水边",
  },
  {
    title: "红砖与晴空",
    location: "厦门",
    year: "2024",
    layout: "standard",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/03-amoy-red-brick.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/03-amoy-red-brick.webp`,
    alt: "红砖建筑在晴空和云层下展开",
  },
  {
    title: "绿色层次",
    location: "厦门",
    year: "2024",
    layout: "standard",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/04-amoy-greenery.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/04-amoy-greenery.webp`,
    alt: "多层绿色树冠与远处建筑",
  },
  {
    title: "屋檐与云",
    location: "厦门",
    year: "2024",
    layout: "standard",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/05-amoy-roofline.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/05-amoy-roofline.webp`,
    alt: "传统屋檐与白色云层形成几何线条",
  },
  {
    title: "花田里的白山羊",
    location: "苏州",
    year: "2024",
    layout: "wide",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/06-suzhou-goat.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/06-suzhou-goat.webp`,
    alt: "白色山羊站在阳光下的花田中",
  },
  {
    title: "林间光线",
    location: "滨湖森林公园",
    year: "2024",
    layout: "wide",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/07-forest-light.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/07-forest-light.webp`,
    alt: "森林公园中光线穿过树木洒向步道",
  },
  {
    title: "荷叶深处",
    location: "皖北",
    year: "2024",
    layout: "wide",
    thumb: `${import.meta.env.BASE_URL}photography/thumbs/08-lotus-leaves.webp`,
    src: `${import.meta.env.BASE_URL}photography/full/08-lotus-leaves.webp`,
    alt: "大片荷叶中一朵粉色荷花含苞待放",
  },
];

const channels = [
  {
    title: "哔哩哔哩",
    english: "BILIBILI",
    handle: "原始大陆PM",
    note: "视频与影像作品",
    href: "https://space.bilibili.com/136635542?spm_id_from=333.1007.0.0",
    icon: "bilibili",
    style: "bg-sky",
  },
  {
    title: "小红书",
    english: "REDNOTE",
    handle: "原始大陆 PM",
    note: "图文与生活观察",
    href: "https://www.xiaohongshu.com/user/profile/641d94a7000000001f032ed3",
    icon: "rednote",
    style: "bg-blush",
  },
  {
    title: "抖音",
    english: "DOUYIN",
    handle: "原始大陆 PM",
    note: "短视频与即时表达",
    href: "https://www.douyin.com/user/self",
    icon: "douyin",
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
    role: "企业文化与传播专员",
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

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-navy/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 min-[380px]:px-5 sm:px-8">
        <Link aria-label="赵元坤，返回首页" className="flex items-baseline gap-3 text-cream" to="/">
          <span className="font-display text-xl">赵元坤</span>
          <span className="font-en hidden text-[11px] tracking-[0.22em] text-muted sm:block">
            Jerry Jahnke
          </span>
        </Link>
        <nav aria-label="主导航" className="flex items-center gap-3 text-[13px] min-[380px]:gap-5 min-[380px]:text-sm sm:gap-8">
          {navigation.map(({ label, to }) => (
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
                  {label}
                  {isActive && <span className="absolute inset-x-0 -bottom-1 h-px bg-cream" />}
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
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-navy">
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-44 -right-28 hidden w-[32rem] opacity-[0.07] invert mix-blend-screen sm:block"
        loading="lazy"
        src={brandMark}
      />
      <div className="relative mx-auto flex min-h-56 max-w-6xl flex-col justify-between gap-8 px-5 py-12 text-sm text-muted sm:flex-row sm:items-end sm:px-8">
        <div>
          <p className="font-display text-2xl text-cream">赵元坤</p>
          <p className="mt-3">品牌公关 · 舆情管理 · 内容创作</p>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-3">
          <a className="transition hover:text-cream" href="mailto:jerryzhao1998@163.com">
            Email
          </a>
          <a className="transition hover:text-cream" href={channels[0].href} rel="noreferrer" target="_blank">
            Bilibili
          </a>
          <a className="transition hover:text-cream" href={channels[1].href} rel="noreferrer" target="_blank">
            小红书
          </a>
          <a className="transition hover:text-cream" href={channels[2].href} rel="noreferrer" target="_blank">
            抖音
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
      <h1 className="font-display balance mt-7 text-5xl font-normal leading-[1.18] tracking-[-0.05em] text-cream sm:text-7xl">
        {title}
      </h1>
      {copy && <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">{copy}</p>}
    </div>
  );
}

function WorkIndex({ compact = false }) {
  return (
    <div className={`divide-y divide-white/10 border-y border-white/10 ${compact ? "mt-14" : "mt-16"}`}>
      {featuredWork.map((item) => (
        <Link
          className="group grid gap-4 py-7 transition sm:grid-cols-[4rem_11rem_1fr_auto] sm:items-center sm:gap-6"
          key={item.number}
          to={`/work?section=${item.number}`}
        >
          <p className="font-en text-xs tracking-[0.22em] text-muted">{item.number}</p>
          <p className="text-sm text-muted">{item.label}</p>
          <div>
            <h3 className="font-display text-[1.45rem] font-normal text-cream">{item.title}</h3>
            {!compact && <p className="mt-2 max-w-xl leading-7 text-muted">{item.copy}</p>}
          </div>
          <span className="mt-2 text-cream transition group-hover:translate-x-1 sm:mt-0">
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
              让品牌被看见，
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
            <h2 className="font-display mt-6 text-4xl font-normal leading-tight text-cream">作品与影响</h2>
          </div>
          <div>
            <p className="max-w-xl text-lg leading-8 text-muted">
              注重传播的信息如何建立连接桥梁，留下长期价值。
            </p>
            <WorkIndex compact />
          </div>
        </div>
      </section>

      <section className="bg-navy text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[17rem_1fr] sm:py-24">
          <div>
            <Eyebrow light>Practice</Eyebrow>
            <h2 className="font-display mt-6 text-4xl font-normal leading-tight">工作实践</h2>
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
      <div className="mt-12 flex flex-col justify-between gap-7 border-y border-white/10 py-9 sm:flex-row sm:items-center">
        <p className="font-display text-2xl font-normal text-cream">文章将在内容确认后陈列于此。</p>
        <p className="shrink-0 text-sm text-muted">微信搜索公众号：原始大陆</p>
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {featuredArticles.map((article, index) => (
        <a
          className="group block border border-white/10 bg-navy-soft p-3 transition hover:border-white/26"
          href={article.href}
          key={article.title}
          rel="noreferrer"
          target="_blank"
        >
          <img alt="" className="aspect-[16/10] w-full object-cover" loading="lazy" src={article.cover} />
          <p className="font-en mt-5 text-[11px] tracking-[0.2em] text-muted">
            NO. {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-display mt-3 min-h-16 text-lg leading-7 text-cream transition group-hover:text-white">
            {article.title}
          </h3>
        </a>
      ))}
    </div>
  );
}

function PhotographyArchive() {
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
    <div className="mt-14 grid gap-x-5 gap-y-11 lg:grid-cols-12">
      {photographyWorks.map((photo, index) => (
        <a
          className={`group block ${cardClass[photo.layout] ?? "lg:col-span-4"}`}
          href={photo.src}
          key={photo.src}
          rel="noreferrer"
          target="_blank"
        >
          <div className="overflow-hidden border border-white/10 bg-navy-soft">
            <img
              alt={photo.alt}
              className={`w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035] ${
                imageClass[photo.layout] ?? "aspect-[4/3]"
              }`}
              decoding="async"
              loading={index < 2 ? "eager" : "lazy"}
              src={photo.thumb}
            />
          </div>
          <div className="mt-4 flex items-start justify-between gap-5 border-t border-white/10 pt-4">
            <div>
              <h3 className="font-display text-2xl font-normal leading-tight text-cream">{photo.title}</h3>
              <p className="font-en mt-2 text-[11px] tracking-[0.18em] text-muted">
                {photo.location} / {photo.year}
              </p>
            </div>
            <span className="mt-1 inline-flex items-center gap-2 text-sm text-muted transition group-hover:text-cream">
              查看大图 <Arrow />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

function ChannelCard({ channel }) {
  const contents = (
    <>
      <div className="flex items-start justify-between gap-5">
        <p className="font-en text-[11px] tracking-[0.24em] text-navy/60">{channel.english}</p>
        <PlatformIcon platform={channel.icon} />
      </div>
      <h3 className="font-display mt-8 text-3xl font-normal text-navy">{channel.title}</h3>
      <p className="mt-4 text-base text-navy">{channel.handle}</p>
      <p className="mt-3 min-h-14 text-sm leading-7 text-navy/65">{channel.note}</p>
      <span className="mt-8 inline-flex items-center gap-3 text-sm text-navy">
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

      <section className="border-t border-white/10" id="section-01">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[17rem_1fr]">
          <div>
            <Eyebrow>01 / Corporate</Eyebrow>
            <h2 className="font-display mt-7 text-4xl font-normal leading-tight text-cream">企业品牌传播</h2>
          </div>
          <div>
            <h3 className="font-display max-w-2xl text-3xl font-normal leading-snug text-cream sm:text-4xl">
              媒体传播与品牌内容体系
            </h3>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-muted">
              搭建并维护媒体联络机制，围绕重点项目与企业行动持续输出内容，多篇稿件刊发于新华社、人民日报等央媒与省市媒体，提升项目及企业品牌认知度。
            </p>
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden bg-white/10 sm:grid-cols-4">
              {practiceMetrics.map((metric) => (
                <div className={`${metric.style} px-5 py-7`} key={metric.label}>
                  <p className="font-display text-3xl text-navy">{metric.value}</p>
                  <p className="mt-3 text-sm leading-6 text-navy/65">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-paper" id="section-02">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Eyebrow>02 / Editorial Column</Eyebrow>
          <div className="mt-7 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="font-display text-4xl font-normal leading-tight text-cream sm:text-5xl">
              原始大陆
              <br />
              精选文章专栏
            </h2>
            <p className="max-w-lg leading-8 text-muted">
              以下为已选出的八篇公众号文章，点击封面或标题即可进入微信原文。
            </p>
          </div>
          <ArticleArchive />
        </div>
      </section>

      <section className="border-t border-white/10" id="section-03">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Eyebrow>03 / Platforms</Eyebrow>
          <div className="mt-7 grid gap-8 lg:grid-cols-[17rem_1fr]">
            <h2 className="font-display text-4xl font-normal leading-tight text-cream">个人内容品牌</h2>
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

      <section className="border-t border-white/10 bg-paper" id="section-04">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Eyebrow>04 / Photography</Eyebrow>
          <div className="mt-7 grid gap-8 lg:grid-cols-[17rem_1fr]">
            <h2 className="font-display text-4xl font-normal leading-tight text-cream sm:text-5xl">
              个人摄影作品
            </h2>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-muted">
                摄影是我观察现场的另一种方式：在建筑的线条、树影的层次和日常片刻中，寻找安静但有力量的秩序。
              </p>
              <p className="mt-5 text-sm leading-7 text-muted">
                点击任意作品可查看高清图。后续新增照片时，只需补充图片资源与 photographyWorks 数据。
              </p>
            </div>
          </div>
          <PhotographyArchive />
        </div>
      </section>
    </>
  );
}

function ResumePage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 sm:px-8 sm:pt-24">
      <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-14 sm:flex-row sm:items-end">
        <PageIntro
          copy="品牌公关与企业传播从业者，拥有新闻传播研究背景与央企一线内容实践。"
          eyebrow="Resume"
          title="简历"
        />
        <button
          className="w-fit rounded-full border border-white/20 px-6 py-3.5 text-sm text-cream transition hover:bg-paper"
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
          <div className="mt-12 space-y-4 border-t border-white/10 pt-7 text-sm leading-7 text-muted">
            {credentials.map((credential) => (
              <p key={credential}>{credential}</p>
            ))}
          </div>
        </aside>
        <div>
          <Eyebrow>Experience</Eyebrow>
          {experience.map((item) => (
            <article className="mt-7 grid gap-5 border-t border-white/10 py-9 sm:grid-cols-[10rem_1fr]" key={item.company}>
              <p className="font-en text-sm text-muted">{item.range}</p>
              <div>
                <h2 className="font-display text-2xl font-normal text-cream">{item.role}</h2>
                <p className="mt-3 text-sm text-muted">{item.company}</p>
                <p className="mt-6 max-w-2xl text-[15px] leading-8 text-muted">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-12">
        <Eyebrow>Core Expertise</Eyebrow>
        <div className="mt-8 grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {["品牌公关与媒体", "新闻摄影与采编", "视频脚本与剪辑", "舆情与声誉管理"].map((skill) => (
            <div className="bg-navy-soft px-6 py-9 font-display text-xl text-cream" key={skill}>
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
            className="mt-11 inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 text-sm text-navy transition hover:bg-white"
            href="mailto:jerryzhao1998@163.com?subject=Website%20Enquiry"
          >
            jerryzhao1998@163.com <Arrow />
          </a>
        </div>
        <aside className="border-t border-white/10 pt-7 lg:mt-16">
          <Eyebrow>Find Me</Eyebrow>
          <p className="font-display mt-7 text-3xl text-cream">原始大陆</p>
          <p className="mt-3 text-sm leading-7 text-muted">微信公众号 / 微信搜索关注</p>
          <div className="mt-9 space-y-4 border-t border-white/10 pt-7 text-sm">
            <a className="flex justify-between text-cream" href={channels[0].href} rel="noreferrer" target="_blank">
              哔哩哔哩 <Arrow />
            </a>
            <a className="flex justify-between text-cream" href={channels[1].href} rel="noreferrer" target="_blank">
              小红书 <Arrow />
            </a>
            <a className="flex justify-between text-cream" href={channels[2].href} rel="noreferrer" target="_blank">
              抖音 <Arrow />
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
      <h1 className="font-display mt-7 text-4xl text-cream">页面不存在</h1>
      <Link className="mt-10 text-sm text-cream" to="/">
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
