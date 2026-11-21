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
    <div id={id} className="mb-12 scroll-mt-24 sm:mb-16">
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

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className={`${wrap} relative grid gap-14 pt-14 pb-20 sm:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-28`}>
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-bg-2 py-1.5 pr-4 pl-3 text-[13.5px] text-fg-2">
            <span className="h-2 w-2 rounded-full bg-[#3ddc84]" />
            Flutter Developer at Duma Digital Solutions
          </p>
          <h1 className="display mt-8 text-[clamp(3.2rem,9vw,7.2rem)]">
            Islam
            <br />
            Diab<span className="text-signal">.</span>
          </h1>
          <p className="mt-8 max-w-[33rem] text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.55] text-fg-2">
            Flutter developer in Cairo. I build and ship apps for clinics, restaurants and events. Four of them are live on
            the <span className="text-fg">App Store</span> and <span className="text-fg">Google Play</span> right now.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Btn href="#work" primary>
              See my work
            </Btn>
            <Btn href={`mailto:${links.email}`}>Email me</Btn>
          </div>
          <div className="mt-8 flex gap-6 font-mono text-[13px] text-fg-3">
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              GitHub <Arrow />
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              LinkedIn <Arrow />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[460px] lg:col-span-5 lg:mr-0">
          <div className="overflow-hidden rounded-[28px] ring-1 ring-line">
            <img src={photo} alt="Islam Diab" width={960} height={1200} className="aspect-[4/5] w-full object-cover" />
          </div>
          <Phone
            src={citadel.screens[0].src}
            alt="Citadel app home screen"
            className="absolute -bottom-8 -left-1 w-[36%] rotate-[-6deg] sm:-left-12 sm:w-[38%]"
          />
          <p className="absolute right-3 bottom-6 rounded-full bg-fg px-3.5 py-1.5 font-mono text-[12px] font-medium text-bg sm:-right-4">
            Citadel · live now
          </p>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const s = [
    ["4", "apps live on both stores"],
    ["~2", "years of production Flutter"],
    ["1", "app built solo, end to end"],
    ["3", "teams worked with"],
  ];
  return (
    <section className="border-y border-line bg-bg-2">
      <dl className={`${wrap} grid grid-cols-2 lg:grid-cols-4`}>
        {s.map(([n, l], i) => (
          <div key={l} className={`py-8 ${i % 2 ? "pl-6" : ""} ${i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""} ${i === 1 ? "border-l border-line" : ""} ${i === 3 ? "border-l border-line" : ""}`}>
            <dt className="display text-[clamp(2.6rem,5vw,3.6rem)] text-signal">{n}</dt>
            <dd className="mt-2 text-[14px] text-fg-2">{l}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function CitadelCase() {
  const [, b, c, d] = citadel.screens;
  return (
    <article className="relative overflow-hidden rounded-[32px] bg-citadel">
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
            <Phone src={b.src} alt={`Citadel ${b.label} screen`} className="mt-14" />
            <Phone src={c.src} alt={`Citadel ${c.label} screen`} />
            <Phone src={d.src} alt={`Citadel ${d.label} screen`} className="mt-24" />
          </div>
          <p className="mt-8 font-mono text-[12.5px] text-fg/70">
            {b.label} · {c.label} · {d.label}
          </p>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ p, idx }: { p: Project; idx: string }) {
  return (
    <article className="group flex flex-col rounded-[24px] border border-line bg-bg-2 p-6 transition-colors hover:border-fg-3 sm:p-8">
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
          <ProjectCard key={p.name} p={p} idx={String(i + 2).padStart(2, "0")} />
        ))}
      </div>
      <h3 className="mt-20 mb-6 font-mono text-[12.5px] uppercase tracking-[0.12em] text-fg-3">Open source & side projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {openSource.map((p, i) => (
          <ProjectCard key={p.name} p={p} idx={String(i + 5).padStart(2, "0")} />
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
            <li key={job.company} className="relative pb-14 last:pb-0">
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
        {skills.map(([k, v]) => (
          <div key={k}>
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
        <div>
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
        <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.8rem,8vw,6.5rem)]">
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
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
