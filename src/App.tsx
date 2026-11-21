import type React from "react";
import type { ReactNode } from "react";
import cutout from "./assets/islam-cutout.webp";
import { useCountUp, usePointerParallax, useReveal } from "./motion";
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

const wrap = "mx-auto w-full max-w-[1200px] px-4 sm:px-8";

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className={`inline-block h-[0.75em] w-[0.75em] ${className}`}>
      <path d="M3 9 9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Btn({ href, children, primary, ext, download }: { href: string; children: ReactNode; primary?: boolean; ext?: boolean; download?: boolean }) {
  return (
    <a
      href={href}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
      className={`inline-flex h-11 items-center gap-2 rounded-full px-5 text-[15px] font-medium transition-colors ${
        primary ? "bg-signal text-bg hover:bg-fg" : "border border-line text-fg hover:border-fg"
      }`}
    >
      {children}
    </a>
  );
}

function StoreBtns({ links: l, light }: { links: StoreLinks; light?: boolean }) {
  const cls = light
    ? "border-fg/30 text-fg hover:bg-fg hover:text-citadel"
    : "border-line text-fg hover:border-signal hover:text-signal";
  const items: [string, string | undefined][] = [
    ["App Store", l.appStore],
    ["Google Play", l.googlePlay],
    ["GitHub", l.github],
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {items
        .filter(([, u]) => u)
        .map(([label, url]) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex h-9 items-center gap-1.5 rounded-full border px-4 font-mono text-[12.5px] transition-colors ${cls}`}
          >
            {label} <Arrow />
          </a>
        ))}
    </div>
  );
}

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-[34px] bg-[#111] p-[6px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10 ${className}`}>
      <img src={src} alt={alt} width={600} height={1305} loading="lazy" className="block w-full rounded-[28px]" />
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <p className="font-mono text-[12.5px] uppercase tracking-[0.12em] text-fg-3">{children}</p>;
}

function SectionTitle({ id, kicker, title }: { id: string; kicker: string; title: string }) {
  return (
    <div id={id} data-reveal className="mb-12 scroll-mt-24 sm:mb-16">
      <Label>
        <span className="text-signal">/</span> {kicker}
      </Label>
      <h2 className="display mt-4 text-[clamp(2.4rem,6vw,4.5rem)]">{title}</h2>
    </div>
  );
}

function Header() {
  const nav = [
    ["Work", "#work"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className={`${wrap} flex h-16 items-center justify-between`}>
        <a href="#top" className="text-[17px] font-bold tracking-tight [font-stretch:115%]">
          Islam Diab<span className="text-signal">.</span>
        </a>
        <nav className="flex items-center gap-6 text-[14px]">
          {nav.map(([l, h]) => (
            <a key={h} href={h} className="hidden text-fg-2 transition-colors hover:text-fg md:inline">
              {l}
            </a>
          ))}
          <a
            href={links.cv}
            download
            className="inline-flex h-9 items-center rounded-full border border-signal px-4 font-medium text-signal transition-colors hover:bg-signal hover:text-bg"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}

function Name({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="letter-mask" aria-hidden="true">
      {text.split("").map((ch, i) => (
        <span key={i} className="letter" style={{ animationDelay: `${delay + i * 45}ms` }}>
          {ch}
        </span>
      ))}
    </span>
  );
}

function Chip({ children, className, delay }: { children: ReactNode; className: string; delay: number }) {
  return (
    <span
      className={`pop absolute z-10 hidden items-center gap-2 rounded-full border border-line bg-bg-2/90 px-3.5 py-2 font-mono text-[12.5px] text-fg shadow-[0_12px_30px_-12px_rgba(0,0,0,0.8)] backdrop-blur sm:inline-flex ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="float inline-flex items-center gap-2" style={{ animationDelay: `${delay}ms` }}>
        {children}
      </span>
    </span>
  );
}

function Hero() {
  const stage = usePointerParallax<HTMLDivElement>();
  const px = (depth: number) => ({
    transform: `translate3d(calc(var(--mx, 0) * ${depth}px), calc(var(--my, 0) * ${depth}px), 0)`,
    transition: "transform 0.25s ease-out",
  });
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full bg-signal/10 blur-[140px]" />
      <div className={`${wrap} relative grid items-end gap-6 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-8`}>
        <div className="pb-6 lg:col-span-7 lg:pb-28">
          <p className="rise inline-flex items-center gap-2.5 rounded-full border border-line bg-bg-2 py-1.5 pr-4 pl-3 text-[13.5px] text-fg-2" style={{ animationDelay: "100ms" }}>
            <span className="live-dot h-2 w-2 rounded-full bg-[#3ddc84]" />
            Flutter Developer at Duma Digital Solutions
          </p>
          <h1 className="display mt-8 text-[clamp(3.4rem,9.5vw,7.6rem)]">
            <span className="sr-only">Islam Diab</span>
            <Name text="Islam" delay={250} />
            <br />
            <Name text="Diab" delay={480} />
            <span className="pop inline-block text-signal" style={{ animationDelay: "900ms" }} aria-hidden="true">.</span>
          </h1>
          <p className="rise mt-8 max-w-[33rem] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.55] text-fg-2" style={{ animationDelay: "750ms" }}>
            Flutter developer in Cairo. I build and ship apps for clinics, restaurants and events. Four of them are live on
            the <span className="text-fg">App Store</span> and <span className="text-fg">Google Play</span> right now.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "900ms" }}>
            <Btn href="#work" primary>
              See my work
            </Btn>
            <Btn href={`mailto:${links.email}`}>Email me</Btn>
          </div>
          <div className="rise mt-8 flex gap-6 font-mono text-[13px] text-fg-3" style={{ animationDelay: "1050ms" }}>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              GitHub <Arrow />
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              LinkedIn <Arrow />
            </a>
          </div>
        </div>

        <div ref={stage} className="relative mx-auto aspect-[9/10] w-full max-w-[540px] lg:col-span-5 lg:mr-0">
          {/* orange disc + orbit ring */}
          <div className="absolute inset-x-[8%] top-[6%] aspect-square" style={px(10)}>
            <div className="pop absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,#ff7a45,#ff5a1f_45%,#c43a0b)]" style={{ animationDelay: "200ms" }} />
            <div className="pop absolute -inset-[9%]" style={{ animationDelay: "450ms" }}>
              <div className="spin-slow h-full w-full rounded-full border border-dashed border-fg/20">
                <span className="absolute top-1/2 -left-[5px] h-2.5 w-2.5 rounded-full bg-fg" />
                <span className="absolute -top-[4px] left-1/2 h-2 w-2 rounded-full bg-signal" />
              </div>
            </div>
          </div>
          {/* cut-out portrait */}
          <img
            src={cutout}
            alt="Islam Diab"
            width={900}
            height={1115}
            className="rise cutout-fade absolute bottom-0 left-1/2 w-[92%] max-w-none -translate-x-1/2 drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
            style={{ animationDelay: "350ms" }}
          />
          <div className="absolute inset-0" style={px(-14)}>
            <Chip className="top-[16%] -left-[4%]" delay={1100}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#42a5f5]" /> Flutter
            </Chip>
            <Chip className="top-[40%] -right-[2%]" delay={1250}>
              <span className="h-1.5 w-1.5 rounded-full bg-signal" /> BLoC / Cubit
            </Chip>
            <Chip className="bottom-[22%] left-[0%]" delay={1400}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffca28]" /> Firebase
            </Chip>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-bg" />
    </section>
  );
}

function Stat({ n, prefix = "", label, i }: { n: number; prefix?: string; label: string; i: number }) {
  const [ref, v] = useCountUp(n);
  return (
    <div className={`py-8 ${i % 2 ? "border-l border-line pl-6" : ""} ${i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""}`}>
      <dt ref={ref as React.RefObject<HTMLElement>} className="display text-[clamp(2.6rem,5vw,3.6rem)] text-signal tabular-nums">
        {prefix}
        {v}
      </dt>
      <dd className="mt-2 text-[14px] text-fg-2">{label}</dd>
    </div>
  );
}

function Stats() {
  return (
    <section className="border-y border-line bg-bg-2">
      <dl className={`${wrap} grid grid-cols-2 lg:grid-cols-4`}>
        <Stat i={0} n={4} label="apps live on both stores" />
        <Stat i={1} n={2} prefix="~" label="years of production Flutter" />
        <Stat i={2} n={1} label="app built solo, end to end" />
        <Stat i={3} n={3} label="teams worked with" />
      </dl>
    </section>
  );
}

function Marquee() {
  const items = ["Flutter", "Dart", "BLoC / Cubit", "Clean Architecture", "Firebase", "REST APIs", "Dio", "Google Maps", "Tabby", "MyFatoorah", "QR", "App Store", "Google Play"];
  const row = (k: string) => (
    <ul key={k} className="flex shrink-0 items-center" aria-hidden={k === "b"}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-8 pr-8 text-[clamp(1.3rem,2.4vw,1.9rem)] font-bold tracking-tight text-fg-3 [font-stretch:112%]">
          {t}
          <span className="text-signal">✦</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden border-b border-line py-6">
      <div className="marquee flex w-max">{[row("a"), row("b")]}</div>
    </div>
  );
}

function CitadelCase() {
  const [, b, c, d] = citadel.screens;
  return (
    <article data-reveal className="relative overflow-hidden rounded-[32px] bg-citadel">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(255,255,255,0.14),transparent_60%)]" />
      <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-12 lg:p-14">
        <div className="lg:col-span-5">
          <p className="font-mono text-[12.5px] uppercase tracking-[0.12em] text-fg/70">
            Featured · {citadel.where} · {citadel.year}
          </p>
          <h3 className="display mt-5 text-[clamp(3rem,7vw,5.5rem)]">{citadel.name}</h3>
          <p className="mt-3 text-xl text-fg/85">{citadel.kind}</p>
          <p className="mt-8 text-[16.5px] leading-relaxed text-fg/85">{citadel.summary}</p>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-fg/15 text-[14px]">
            {citadel.facts.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 bg-citadel/95 px-4 py-3">
                <dt className="text-fg/65">{k}</dt>
                <dd className="text-right font-medium">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <StoreBtns links={citadel.links} light />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-3 items-start gap-3 sm:gap-5 lg:pt-6">
            <div className="float mt-14" style={{ animationDelay: "0ms" }}><Phone src={b.src} alt={`Citadel ${b.label} screen`} /></div>
            <div className="float" style={{ animationDelay: "-2s" }}><Phone src={c.src} alt={`Citadel ${c.label} screen`} /></div>
            <div className="float mt-24" style={{ animationDelay: "-4s" }}><Phone src={d.src} alt={`Citadel ${d.label} screen`} /></div>
          </div>
          <p className="mt-8 font-mono text-[12.5px] text-fg/70">
            {b.label} · {c.label} · {d.label}
          </p>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ p, idx, d = 0 }: { p: Project; idx: string; d?: number }) {
  return (
    <article
      data-reveal
      style={{ "--d": `${d}ms` } as React.CSSProperties}
      className="group flex flex-col rounded-[24px] border border-line bg-bg-2 p-6 transition-[border-color,translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-signal/60 hover:shadow-[0_24px_60px_-30px_rgba(255,90,31,0.45)] sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[12.5px] text-fg-3">{idx}</span>
        <span className="rounded-full bg-bg-3 px-3 py-1 font-mono text-[11.5px] text-fg-2">{p.where}</span>
      </div>
      <h3 className="mt-10 text-[clamp(1.7rem,3vw,2.2rem)] font-bold tracking-tight [font-stretch:110%]">{p.name}</h3>
      <p className="mt-1 text-signal">{p.kind}</p>
      <p className="mt-5 flex-1 text-[15.5px] leading-relaxed text-fg-2">{p.text}</p>
      <p className="mt-6 font-mono text-[12.5px] text-fg-3">{p.stack}</p>
      <div className="mt-5">
        <StoreBtns links={p.links} />
      </div>
    </article>
  );
}

function Work() {
  return (
    <section className={`${wrap} py-24 sm:py-32`}>
      <SectionTitle id="work" kicker="Selected work" title="Apps in people's hands." />
      <CitadelCase />
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {shipped.map((p, i) => (
          <ProjectCard key={p.name} p={p} d={i * 110} idx={String(i + 2).padStart(2, "0")} />
        ))}
      </div>
      <h3 className="mt-20 mb-6 font-mono text-[12.5px] uppercase tracking-[0.12em] text-fg-3">Open source & side projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {openSource.map((p, i) => (
          <ProjectCard key={p.name} p={p} d={i * 110} idx={String(i + 5).padStart(2, "0")} />
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="border-t border-line bg-bg-2">
      <div className={`${wrap} py-24 sm:py-32`}>
        <SectionTitle id="experience" kicker="Experience" title="Where I've worked." />
        <ol className="relative border-l border-line pl-8 sm:pl-12">
          {experience.map((job, i) => (
            <li key={job.company} data-reveal style={{ "--d": `${i * 120}ms` } as React.CSSProperties} className="relative pb-14 last:pb-0">
              <span
                className={`absolute top-2 -left-[calc(2rem+5px)] h-[9px] w-[9px] rounded-full sm:-left-[calc(3rem+5px)] ${
                  i === 0 ? "bg-signal ring-4 ring-signal/20" : "bg-fg-3"
                }`}
              />
              <p className="font-mono text-[13px] text-fg-3">{job.period}</p>
              <h3 className="mt-2 text-[clamp(1.4rem,2.6vw,1.9rem)] font-bold tracking-tight [font-stretch:108%]">
                {job.company}
              </h3>
              <p className="text-fg-2">{job.role}</p>
              <ul className="mt-5 max-w-[46rem] space-y-2.5 text-[15.5px] leading-relaxed text-fg-2">
                {job.points.map((pt) => (
                  <li key={pt} className="relative pl-5 before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-fg-3">
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className={`${wrap} py-24 sm:py-32`}>
      <SectionTitle id="skills" kicker="Skills" title="What I work with." />
      <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {skills.map(([k, v], i) => (
          <div key={k} data-reveal style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
            <h3 className="font-mono text-[12.5px] uppercase tracking-[0.12em] text-fg-3">{k}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {v.split(/,\s*(?![^()]*\))/).map((s) => (
                <li key={s} className="rounded-full border border-line px-3.5 py-1.5 text-[14px] text-fg">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div data-reveal style={{ "--d": "400ms" } as React.CSSProperties}>
          <h3 className="font-mono text-[12.5px] uppercase tracking-[0.12em] text-fg-3">Education</h3>
          <p className="mt-4 font-medium">{education.degree}</p>
          <p className="mt-1 text-[14.5px] leading-relaxed text-fg-2">{education.school}</p>
          <p className="mt-1 font-mono text-[12.5px] text-fg-3">{education.period}</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className={`${wrap} py-24 sm:py-32`}>
        <Label>
          <span className="text-signal">/</span> Contact
        </Label>
        <h2 data-reveal className="display mt-6 max-w-[14ch] text-[clamp(2.8rem,8vw,6.5rem)]">
          Let's build your next app<span className="text-signal">.</span>
        </h2>
        <a
          href={`mailto:${links.email}`}
          className="group mt-12 inline-flex items-center gap-3 border-b-2 border-signal pb-2 text-[clamp(1.2rem,3vw,2rem)] font-medium break-all transition-colors hover:text-signal"
        >
          {links.email}
          <Arrow className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
        <div className="mt-12 flex flex-wrap gap-3">
          <Btn href={links.cv} download primary>
            Download CV
          </Btn>
          <Btn href={links.linkedin} ext>
            LinkedIn <Arrow />
          </Btn>
          <Btn href={links.github} ext>
            GitHub <Arrow />
          </Btn>
        </div>
      </div>
      <footer className={wrap}>
        <div className="flex flex-wrap justify-between gap-2 border-t border-line py-7 font-mono text-[12px] text-fg-3">
          <span>© {new Date().getFullYear()} Islam Diab</span>
          <span>Cairo, Egypt · GMT+2</span>
        </div>
      </footer>
    </section>
  );
}

export function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
