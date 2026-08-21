import { createFileRoute } from "@tanstack/react-router";
import {
  Bot,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { AnimatedStat } from "@/components/AnimatedStat";
import cvAsset from "@/assets/Daniel_CV_v4.docx.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Adeyemi Erioluwa Daniel | Product Builder and Founder",
      },
      {
        name: "description",
        content:
          "Portfolio of Adeyemi Erioluwa Daniel, Computer Science student, founder of Conversion Alchemist and builder of MyAcumen. 14,000 plus leads generated and a 5.0 GPA.",
      },
      {
        name: "keywords",
        content:
          "Adeyemi Erioluwa Daniel, MyAcumen, Conversion Alchemist, Meta Ads, Computer Science student, Cardtonic Upskill 4.0",
      },
      {
        property: "og:title",
        content: "Adeyemi Erioluwa Daniel | Product Builder and Founder",
      },
      {
        property: "og:description",
        content:
          "A builder's portfolio: MyAcumen study OS, Conversion Alchemist performance marketing, and an automated Telegram assessment system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#cv", label: "CV" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

const projects = [
  {
    id: "myacumen",
    icon: Rocket,
    title: "MyAcumen",
    subtitle: "Offline First AI Powered Student Study OS",
    description:
      "Built entirely alone in three months because I was failing without it. An offline first study platform with CBT practice, AI tutor, Pomodoro focus sessions, mistake tracking, and progress analytics. This semester I achieved a 5.0 GPA using MyAcumen.",
    stats: [
      { value: "3 months", label: "Build time" },
      { value: "5.0 GPA", label: "This semester" },
      { value: "Dec 2026", label: "Launch date" },
    ],
    primary: {
      label: "Visit Live Product",
      href: "https://betamyacumen.netlify.app",
    },
    secondary: {
      label: "View on Netlify",
      href: "https://betamyacumen.netlify.app",
    },
    note: "Live now at betamyacumen.netlify.app",
  },
  {
    id: "conversion-alchemist",
    icon: TrendingUp,
    title: "Conversion Alchemist",
    subtitle: "Performance Marketing Agency",
    description:
      "Self taught performance marketing specialist running high ROI Meta Ads campaigns. Generated 14,000 plus qualified leads across multiple client accounts. Managed 3.68 million naira in ad spend across 6 plus campaign clusters. Specialized in audience targeting, creative optimization, and daily performance monitoring, with a best CPL of 449 naira and consistent 5 to 10 percent conversion rates.",
    stats: [
      { value: "14,000+", label: "Qualified leads" },
      { value: "3.68M", label: "Naira managed" },
      { value: "5 to 10%", label: "Conversion rate" },
    ],
    primary: {
      label: "View Portfolio",
      href: "https://erioluwa-the-conversion-alchemist.lovable.app",
    },
    secondary: {
      label: "View Campaign Results",
      href: "https://erioluwa-the-conversion-alchemist.lovable.app",
    },
    note: "Full campaign documentation available in portfolio",
  },
  {
    id: "telegram-bot",
    icon: Bot,
    title: "Telegram Assessment Bot",
    subtitle: "Automated Student Assessment System",
    description:
      "Fully automated Telegram bot for student assessments. Integrated with Google Sheets for data storage, Supabase for backend infrastructure, and Systeme.io for automation. Handles real time student responses, automatic grading, and result tracking. Built to streamline educational assessment workflows.",
    stats: [
      { value: "Google Sheets", label: "Data layer" },
      { value: "Supabase", label: "Backend" },
      { value: "Systeme.io", label: "Automation" },
    ],
    primary: {
      label: "View on GitHub",
      href: "https://github.com/tboydigitalz-stack",
    },
    secondary: {
      label: "View Documentation",
      href: "https://github.com/tboydigitalz-stack",
    },
    note: "Open source on GitHub",
  },
];

const cvCards = [
  {
    icon: GraduationCap,
    title: "Education",
    items: [
      "Delta State University, Abraka",
      "Computer Science, 200 level",
      "CGPA 4.51 at 100 level, First Class. Current 4.47",
      "Coursework: Python Programming, Database Systems, Operating Systems, Data Structures",
    ],
  },
  {
    icon: Target,
    title: "Experience",
    items: [
      "Conversion Alchemist, Founder, 2022 to present",
      "Performance media buyer specializing in Meta Ads",
      "14,000 plus leads generated",
      "3.68M naira managed, best CPL 449 naira",
    ],
  },
  {
    icon: Wrench,
    title: "Technical Skills",
    items: [
      "Meta Ads Manager, audience segmentation, campaign optimization",
      "Python, JavaScript, Google Sheets, Supabase, Systeme.io",
      "Product building, full stack development, data analysis",
    ],
  },
  {
    icon: Sparkles,
    title: "Achievements",
    items: [
      "Best Student, 100 level Computer Science, 2023 and 2024 session",
      "First Class standing throughout 100 level",
      "Built 3 products while studying full time",
      "5.0 GPA in 200 level second semester",
    ],
  },
];

const skillGroups = [
  {
    icon: Rocket,
    title: "Product Building",
    body: "MyAcumen study OS, Telegram assessment bot, and full stack product development from idea to shipped release.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    body: "Meta Ads strategy, audience research, creative testing, campaign optimization, and ROI tracking.",
  },
  {
    icon: Wrench,
    title: "Technical Skills",
    body: "Python, JavaScript, Google Sheets, Supabase, Systeme.io, and hands on data analysis.",
  },
];

const results = [
  {
    headline: "1,199 qualified leads",
    body: "Generated for Speak French Fast across 6 plus campaign clusters.",
  },
  {
    headline: "13,000 plus leads",
    body: "Delivered for a women focused crypto community over 6 months.",
  },
  {
    headline: "20x ROAS",
    body: "Achieved on select campaigns, turning 5,000 naira into 100,000 naira in revenue.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <header className="no-print sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <nav
          aria-label="Primary"
          className="section-shell flex h-16 items-center justify-between"
        >
          <a
            href="#hero"
            className="font-display text-lg font-bold tracking-tight"
            aria-label="Back to top"
          >
            AED<span className="text-primary-bright">.</span>
          </a>
          <ul className="hidden gap-7 text-sm text-secondary-foreground md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-primary-bright"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={cvAsset.url}
            download="Adeyemi_Erioluwa_Daniel_CV.docx"
            className="btn-outline !px-4 !py-2 !text-xs"
            aria-label="Download full CV"
          >
            <Download aria-hidden="true" className="size-4" />
            CV
          </a>
        </nav>
      </header>

      <main id="main">
        {/* Hero */}
        <section
          id="hero"
          className="relative flex min-h-[92svh] items-center overflow-hidden bg-hero-glow"
        >
          <div className="section-shell py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-accent px-3 py-1 text-xs text-secondary-foreground">
              <MapPin aria-hidden="true" className="size-3.5 text-primary-bright" />
              Abraka, Delta State · Lagos, Nigeria
            </span>

            <h1 className="mt-7 max-w-3xl text-[clamp(2.6rem,10vw,5rem)] font-bold tracking-tight text-foreground">
              Adeyemi Erioluwa Daniel
            </h1>
            <p className="mt-5 max-w-2xl text-base font-medium text-secondary-foreground sm:text-lg">
              200 level Computer Science Student. Product Builder. Founder.
            </p>
            <p className="mt-3 max-w-2xl text-base italic text-muted-foreground">
              Building tools to solve the problems I live.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="btn-solid" aria-label="Explore my work">
                Explore My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              <AnimatedStat value={14000} suffix="+" label="Leads generated" />
              <AnimatedStat
                value={3.68}
                suffix="M"
                decimals={2}
                label="Naira ad spend"
              />
              <AnimatedStat value={20} suffix="x" label="Peak ROAS" />
              <AnimatedStat value={5} suffix=".0" decimals={1} label="Current GPA" />
            </dl>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-b-2 border-b-primary bg-surface py-20 sm:py-24"
        >
          <div className="section-shell">
            <p className="eyebrow">About</p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-secondary-foreground">
              I am a Computer Science student at Delta State University with a track
              record of building products that solve real problems. Three years ago I
              self taught Facebook Ads on YouTube and grew Conversion Alchemist into an
              agency managing millions in ad spend. When I struggled academically this
              year, I built MyAcumen, an offline first study OS that changed everything.
              This semester I run a 5.0 GPA. I am applying to Upskill 4.0 because I know
              what I have built, and I know what I need to scale it.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="py-20 sm:py-24">
          <div className="section-shell">
            <p className="eyebrow">Selected Work</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Three products, built while studying
            </h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article
                    key={project.id}
                    id={project.id}
                    className="card-project flex flex-col p-6 sm:p-7"
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-surface-raised">
                      <Icon aria-hidden="true" className="size-5 text-primary-bright" />
                    </span>
                    <h3 className="mt-5 text-2xl font-bold">{project.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary-bright">
                      {project.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-6 grid grid-cols-3 gap-2">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="stat-chip">
                          <div className="text-sm font-bold text-foreground">
                            {stat.value}
                          </div>
                          <div className="mt-0.5 text-[0.65rem] text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col gap-2 pt-7">
                      <a
                        href={project.primary.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn-solid w-full"
                        aria-label={`${project.primary.label} for ${project.title}`}
                      >
                        {project.primary.label}
                        <ExternalLink aria-hidden="true" className="size-4" />
                      </a>
                      <a
                        href={project.secondary.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn-outline w-full"
                        aria-label={`${project.secondary.label} for ${project.title}`}
                      >
                        {project.secondary.label}
                      </a>
                      <p className="pt-2 text-center text-xs text-muted-foreground">
                        {project.note}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CV */}
        <section id="cv" className="bg-surface-raised py-20 sm:py-24">
          <div className="section-shell">
            <p className="eyebrow">Credentials</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Curriculum Vitae</h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Complete record of professional experience, technical skills, education,
              and academic achievements.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {cvCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article key={card.title} className="card-panel p-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 items-center justify-center rounded-lg bg-surface">
                        <Icon
                          aria-hidden="true"
                          className="size-5 text-primary-bright"
                        />
                      </span>
                      <h3 className="text-xl font-bold">{card.title}</h3>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {card.items.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-bright"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <div className="no-print mt-10">
              <a
                href={cvAsset.url}
                download="Adeyemi_Erioluwa_Daniel_CV.docx"
                className="btn-solid"
                aria-label="Download full CV document"
              >
                <Download aria-hidden="true" className="size-4" />
                Download Full CV
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 sm:py-24">
          <div className="section-shell">
            <p className="eyebrow">Capabilities</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">What I bring</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <article key={group.title} className="card-panel p-6">
                    <Icon aria-hidden="true" className="size-6 text-primary-bright" />
                    <h3 className="mt-4 text-xl font-bold">{group.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {group.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="bg-surface py-20 sm:py-24">
          <div className="section-shell">
            <p className="eyebrow">Client Outcomes</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Evidence first</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {results.map((item) => (
                <article key={item.headline} className="card-panel p-6">
                  <p className="font-display text-2xl font-bold text-primary-bright">
                    {item.headline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-border py-16">
        <div className="section-shell grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:erioluwadaniel8@gmail.com"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary-bright"
                >
                  <Mail aria-hidden="true" className="size-4 text-primary-bright" />
                  erioluwadaniel8@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2349043136040"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary-bright"
                >
                  <Phone aria-hidden="true" className="size-4 text-primary-bright" />
                  09043136040
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" className="size-4 text-primary-bright" />
                Ikosi Ketu, Lagos | Abraka, Delta State
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">Links</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/tboydigitalz-stack"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary-bright"
                >
                  <Github aria-hidden="true" className="size-4 text-primary-bright" />
                  github.com/tboydigitalz-stack
                </a>
              </li>
              <li>
                <a
                  href="https://erioluwa-the-conversion-alchemist.lovable.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-primary-bright"
                >
                  Portfolio: erioluwa the conversion alchemist
                </a>
              </li>
              <li>
                <a
                  href="https://betamyacumen.netlify.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-primary-bright"
                >
                  Live product: betamyacumen.netlify.app
                </a>
              </li>
            </ul>
          </div>

          <div className="no-print">
            <a
              href={cvAsset.url}
              download="Adeyemi_Erioluwa_Daniel_CV.docx"
              className="btn-outline"
              aria-label="Download resume"
            >
              <Download aria-hidden="true" className="size-4" />
              Download Resume
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Open to opportunities and scholarship programs.
            </p>
          </div>
        </div>

        <p className="section-shell mt-12 text-xs text-muted-foreground">
          © 2026 Adeyemi Erioluwa Daniel. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
