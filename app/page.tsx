import Link from "next/link";

const projects = [
  {
    name: "FairGig",
    description:
      "Microservices-based gig worker rights platform (SOFTEC 2026) with 7 backend services in FastAPI + Express, a React frontend, LLM-powered shift logging, vision-based verification, and statistical anomaly detection.",
    stack: ["FastAPI", "Express", "React", "LLMs"],
    href: "https://fairgig.online",
    linkLabel: "Live",
  },
  {
    name: "Search Engine",
    description:
      "Large-scale search engine indexing 110k+ articles. Experimented with algorithms from the literature and implemented the barrelling techniques described in The Anatomy of a Large-Scale Hypertextual Web Search Engine (Brin & Page, 1998).",
    stack: ["Python", "Information Retrieval"],
    href: "https://github.com/saad1551/SearchEngine",
    linkLabel: "GitHub",
  },
  {
    name: "V-Therapist",
    description:
      "Virtual psychologist built on small language models with memory enhancement. Surveyed candidate approaches and landed on vector databases, which gave the best retrieval performance for prior-session context.",
    stack: ["Python", "LLMs", "Vector DB"],
    href: "https://github.com/saad1551/psychologist-language-model",
    linkLabel: "GitHub",
  },
  {
    name: "Rate Limiter",
    description:
      "Token-bucket HTTP rate limiter in Go, exposed as chi middleware with per-IP buckets, mutex-guarded lazy refill, and a janitor goroutine evicting idle entries. Verified race-free under concurrent tests.",
    stack: ["Go", "chi"],
    href: "https://github.com/saad1551/rate-limiter",
    linkLabel: "GitHub",
  },
  {
    name: "Workout Tracking API",
    description:
      "Go backend for tracking workouts and exercise entries with chi + PostgreSQL. Token auth, user-scoped CRUD, middleware-driven authorization, and database migrations, all wired up in a containerized Docker Compose setup.",
    stack: ["Go", "PostgreSQL", "Docker"],
    href: "https://github.com/saad1551/workouts",
    linkLabel: "GitHub",
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/saad1551" },
  { label: "LinkedIn", href: "https://linkedin.com/in/saadashraf380715222" },
  {
    label: "Resume",
    href: "https://github.com/saadashraf80/CV/releases/latest/download/Resume-Muhammad-Saad-Ashraf.pdf",
  },
  { label: "Email", href: "mailto:saad.ashraf.9094@gmail.com" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-24 sm:py-32">
      <section className="mb-20">
        <p className="mb-3 font-mono text-sm text-muted">Software Engineer</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Muhammad Saad Ashraf
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Software engineer based in Karachi. Recent Software Engineering
          graduate from NUST. I like backends, distributed systems, and code
          that&apos;s easy to delete.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="mb-6 font-mono text-sm uppercase tracking-wider text-muted">
          About
        </h2>
        <div className="space-y-4 leading-relaxed">
          <p>
            Most recently I was at Bazaar Technologies, working across payments
            and platform. I rebuilt the card payment flow (HBL + Cybersource)
            to drive payment failures and chargebacks to near zero, made card
            refunds instant via a wallet-first approach that 47% of customers
            stuck with, and integrated FBR digital invoicing so thousands of
            invoices report automatically each day.
          </p>
          <p>
            Outside of that I write a lot of Go, build small but
            well-instrumented services, and keep a steady stream of side
            projects going — search engines, rate limiters, LLM experiments.
            I&apos;m happiest when the problem is a little harder than I
            thought it would be.
          </p>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="mb-6 font-mono text-sm uppercase tracking-wider text-muted">
          Projects
        </h2>
        <ul className="space-y-8">
          {projects.map((p) => (
            <li key={p.name}>
              <Link
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium group-hover:underline underline-offset-4">
                    {p.name}
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {p.linkLabel}{" "}
                    <span
                      aria-hidden
                      className="inline-block transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </div>
                <p className="mt-2 text-muted leading-relaxed">
                  {p.description}
                </p>
                <p className="mt-3 font-mono text-xs text-muted">
                  {p.stack.join(" · ")}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-6 font-mono text-sm uppercase tracking-wider text-muted">
          Contact
        </h2>
        <p className="leading-relaxed">
          Best way to reach me is by email at{" "}
          <a
            href="mailto:saad.ashraf.9094@gmail.com"
            className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            saad.ashraf.9094@gmail.com
          </a>
          . I&apos;m based in Karachi.
        </p>
      </section>

      <footer className="mt-24 border-t border-border pt-6 font-mono text-xs text-muted">
        © {new Date().getFullYear()} Muhammad Saad Ashraf
      </footer>
    </main>
  );
}
