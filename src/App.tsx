import type { ReactNode } from "react";
import photo from "./assets/islam.webp";
import {
  citadel,
  education,
  experience,
  links,
  openSource,
  shipped,
  skills,
  type Project,
  type StoreLinks,
} from "./content";

const wrap = "mx-auto w-full max-w-[1120px] px-4 sm:px-8";

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className="ml-1 inline-block h-[0.7em] w-[0.7em] -translate-y-px">
      <path d="M3 9 9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function Ext({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline decoration-rule decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent ${className}`}
    >
      {children}
      <Arrow />
    </a>
  );
}

function Stores({ links: l }: { links: StoreLinks }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[13px]">
      {l.appStore && <Ext href={l.appStore}>App Store</Ext>}
      {l.googlePlay && <Ext href={l.googlePlay}>Google Play</Ext>}
      {l.github && <Ext href={l.github}>GitHub</Ext>}
    </div>
  );
}

function SectionHead({ n, title, id }: { n: string; title: string; id: string }) {
  return (
    <div id={id} className="scroll-mt-20 border-t border-ink pt-4 pb-10 sm:pb-14">
      <h2 className="flex items-baseline gap-4 font-mono text-[13px] uppercase tracking-[0.08em]">
        <span className="text-muted">{n}</span>
        <span>{title}</span>
      </h2>
    </div>
  );
}

function Header() {
  const nav = [
    ["Work", "#work"],
    ["Experience", "#experience"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-paper/95 backdrop-blur-[2px]">
      <div className={`${wrap} flex h-14 items-center justify-between gap-6`}>
        <a href="#top" className="font-medium tracking-tight">
          Islam Diab
        </a>
        <nav className="flex items-center gap-5 font-mono text-[13px] sm:gap-7">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="hidden text-ink-2 hover:text-accent sm:inline">
              {label}
            </a>
          ))}
          <a href={links.cv} className="text-ink hover:text-accent" download>
            CV (PDF)
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className={`${wrap} grid gap-10 pt-12 pb-16 sm:pt-20 md:grid-cols-12 md:gap-8 md:pb-24`}>
      <div className="md:col-span-7 md:pt-4">
        <p className="font-mono text-[13px] text-muted">Flutter developer · Cairo, Egypt</p>
        <h1 className="mt-6 text-[clamp(2.1rem,5.2vw,3.9rem)] leading-[1.06] font-medium tracking-[-0.025em] text-balance">
          I build Flutter apps for clinics, restaurants and events, and ship them to the App&nbsp;Store and Google&nbsp;Play.
        </h1>
        <p className="mt-8 max-w-[34rem] text-[17px] leading-relaxed text-ink-2">
          Right now I'm the only mobile developer at Duma Digital Solutions, where I built{" "}
          <a href="#work" className="underline decoration-rule underline-offset-4 hover:text-accent">Citadel</a>{" "}
          from scratch. Before that I spent a year and a half at Zakham Dev on food ordering and event apps. I work with
          BLoC, Clean Architecture, Firebase, REST APIs and Gulf payment gateways.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px]">
          <a href={`mailto:${links.email}`} className="underline decoration-rule underline-offset-4 hover:text-accent hover:decoration-accent">
            {links.email}
          </a>
          <Ext href={links.github}>GitHub</Ext>
          <Ext href={links.linkedin}>LinkedIn</Ext>
        </div>
      </div>
      <figure className="md:col-span-5">
        <img
          src={photo}
          alt="Portrait of Islam Diab"
          width={960}
          height={1200}
          className="aspect-[4/5] w-full max-w-[340px] rounded-[3px] object-cover md:ml-auto md:max-w-[420px]"
        />
      </figure>
    </section>
  );
}

function Facts() {
  const facts = [
    ["4", "apps live on both stores"],
    ["~2 yrs", "of production Flutter"],
    ["1", "app built solo, end to end"],
    ["GMT+2", "based in Cairo"],
  ];
  return (
    <div className={`${wrap}`}>
      <dl className="grid grid-cols-2 border-y border-rule md:grid-cols-4">
        {facts.map(([k, v], i) => (
          <div
            key={v}
            className={`py-5 pr-4 ${i % 2 ? "pl-4 border-l border-rule" : ""} ${i >= 2 ? "border-t border-rule md:border-t-0" : ""} md:pl-4 md:first:pl-0 md:[&:not(:first-child)]:border-l`}
          >
            <dt className="text-2xl font-medium tracking-tight">{k}</dt>
            <dd className="mt-1 font-mono text-[12.5px] text-muted">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Citadel() {
  return (
    <article>
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-mono text-[13px] text-muted">
            {citadel.where} · {citadel.year}
          </p>
          <h3 className="mt-3 text-4xl font-medium tracking-[-0.02em] sm:text-5xl">{citadel.name}</h3>
          <p className="mt-2 text-lg text-ink-2">{citadel.kind}</p>
        </div>
        <div className="md:col-span-7">
          <p className="text-[17px] leading-relaxed text-ink-2">{citadel.summary}</p>
          <dl className="mt-6 grid grid-cols-[6.5rem_1fr] gap-y-2 font-mono text-[13px]">
            {citadel.facts.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-muted">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6">
            <Stores links={citadel.links} />
          </div>
        </div>
      </div>

      <p className="mt-12 font-mono text-[12.5px] text-muted lg:hidden">Swipe for more screens →</p>
      <div className="-mx-4 mt-4 overflow-x-auto lg:mt-12 px-4 pb-4 sm:-mx-8 sm:px-8 [scrollbar-width:thin]">
        <ol className="flex snap-x snap-mandatory gap-4 sm:gap-6 lg:grid lg:grid-cols-5">
          {citadel.screens.map((s, i) => (
            <li key={s.label} className="w-[44vw] max-w-[210px] shrink-0 snap-start lg:w-auto lg:max-w-none">
              <img
                src={s.src}
                alt={`Citadel app, ${s.label} screen`}
                width={600}
                height={1305}
                loading="lazy"
                className="w-full rounded-[22px] border border-rule bg-white"
              />
              <p className="mt-3 font-mono text-[12.5px] text-muted">
                <span className="text-ink">{String(i + 1).padStart(2, "0")}</span> {s.label}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}

function ProjectRow({ p }: { p: Project }) {
  return (
    <li className="grid gap-3 border-t border-rule py-7 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-4">
        <h4 className="text-xl font-medium tracking-tight">{p.name}</h4>
        <p className="mt-1 font-mono text-[12.5px] text-muted">
          {p.kind} · {p.where}
        </p>
      </div>
      <p className="leading-relaxed text-ink-2 md:col-span-5">{p.text}</p>
      <div className="flex flex-col gap-2 md:col-span-3">
        <p className="font-mono text-[12.5px] text-muted">{p.stack}</p>
        <Stores links={p.links} />
      </div>
    </li>
  );
}

function Work() {
  return (
    <section className={`${wrap} pt-6 pb-24`}>
      <SectionHead id="work" n="01" title="Selected work" />
      <Citadel />

      <h3 className="mt-24 mb-2 font-mono text-[13px] text-muted">Also shipped</h3>
      <ul className="border-b border-rule">
        {shipped.map((p) => (
          <ProjectRow key={p.name} p={p} />
        ))}
      </ul>

      <h3 className="mt-16 mb-2 font-mono text-[13px] text-muted">Open source and side projects</h3>
      <ul className="border-b border-rule">
        {openSource.map((p) => (
          <ProjectRow key={p.name} p={p} />
        ))}
      </ul>
    </section>
  );
}

function Experience() {
  return (
    <section className={`${wrap} pb-24`}>
      <SectionHead id="experience" n="02" title="Experience" />
      <ol>
        {experience.map((job) => (
          <li key={job.company} className="grid gap-2 border-t border-rule py-7 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-8">
            <p className="font-mono text-[13px] text-muted md:col-span-3 md:pt-1">{job.period}</p>
            <div className="md:col-span-9">
              <h3 className="text-xl font-medium tracking-tight">
                {job.role}, <span className="text-ink-2">{job.company}</span>
              </h3>
              <ul className="mt-3 space-y-2 text-ink-2">
                {job.points.map((pt) => (
                  <li key={pt} className="relative pl-5 leading-relaxed before:absolute before:left-0 before:text-muted before:content-['–']">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function About() {
  return (
    <section className={`${wrap} pb-24`}>
      <SectionHead id="about" n="03" title="About" />
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="space-y-5 text-[17px] leading-relaxed text-ink-2 md:col-span-6">
          <p>
            I care most about the part of mobile work where an app stops being a demo and becomes something people
            rely on: booking flows that hold up, checkouts that handle coupons and payment gateways properly, and
            getting the build through App Store and Google Play review.
          </p>
          <p>
            Most of the apps I've shipped are Arabic-first and right-to-left, built for clients in Egypt and the Gulf,
            so local payment providers like Tabby and MyFatoorah are part of the everyday work.
          </p>
          <p className="font-mono text-[13px] text-muted">
            {education.degree}, {education.school}. {education.period}.
          </p>
        </div>
        <dl className="md:col-span-5 md:col-start-8">
          {skills.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[7rem_1fr] gap-4 border-t border-rule py-3 first:border-t-0 first:pt-0">
              <dt className="font-mono text-[13px] text-muted">{k}</dt>
              <dd className="text-[15px] leading-snug">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-ink text-paper">
      <div className={`${wrap} py-20 sm:py-28`} id="contact">
        <p className="font-mono text-[13px] text-paper/60">04 &nbsp; Contact</p>
        <h2 className="mt-6 max-w-[40rem] text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] font-medium tracking-[-0.02em]">
          Have a Flutter app to build or fix? Send me an email.
        </h2>
        <a
          href={`mailto:${links.email}`}
          className="mt-10 inline-block border-b border-paper/40 pb-1 text-xl break-all hover:border-paper sm:text-2xl"
        >
          {links.email}
        </a>
        <div className="mt-12 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[13px] text-paper/80">
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-paper">GitHub<Arrow /></a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-paper">LinkedIn<Arrow /></a>
          <a href={links.cv} download className="hover:text-paper">Download CV (PDF)</a>
        </div>
      </div>
      <footer className={wrap}>
        <div className="flex flex-wrap justify-between gap-2 border-t border-paper/15 py-6 font-mono text-[12px] text-paper/50">
          <span>© {new Date().getFullYear()} Islam Diab</span>
          <span>Cairo, Egypt</span>
        </div>
      </footer>
    </section>
  );
}

export function App() {
  return (
    <>
      <a href="#work" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:bg-paper focus:px-3 focus:py-2">
        Skip to work
      </a>
      <Header />
      <main>
        <Hero />
        <Facts />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}
