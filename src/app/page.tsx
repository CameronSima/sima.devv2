import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import WarbirdsShowcase from "@/components/WarbirdsShowcase";
import { projects } from "@/projects";

const clientProjects = projects.filter((p) => p.slug !== "warbirds");

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-night via-[#081226] to-night" />
        <div className="bg-grid absolute inset-0" />
        <HeroCanvas />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-32 md:px-8">
          <Reveal>
            <p className="font-mono text-sm text-contrail">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle" />
              cam sima · software engineer
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              I build things that{" "}
              <span className="text-gradient-sky">fly</span>,{" "}
              <span className="text-gradient-fire">fight</span>, and ship.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Full-stack engineer with a thing for real-time systems, games, and
              the kind of web experiences that make people say &ldquo;wait, this
              runs in a browser?&rdquo; Creator of{" "}
              <a
                href="https://warbirds.io"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-tracer hover:underline"
              >
                Warbirds.io
              </a>
              .
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="https://warbirds.io"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Play Warbirds.io
                <span aria-hidden>↗</span>
              </a>
              <Link href="/projects" className="btn-ghost">
                See my work
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-slate-500">
          <span className="block animate-bounce text-xl" aria-hidden>
            ↓
          </span>
        </div>
      </section>

      {/* ---------------- Warbirds showcase ---------------- */}
      <div className="py-24 md:py-32">
        <WarbirdsShowcase />
      </div>

      {/* ---------------- Selected work ---------------- */}
      <section className="border-t border-white/10 bg-night-raised/30 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-contrail">
                  Selected work
                </p>
                <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  Client & side projects
                </h2>
                <p className="mt-4 max-w-xl text-slate-400">
                  A decade of shipping for everyone from Nike and Lockheed
                  Martin to my own late-night ideas.
                </p>
              </div>
              <Link href="/projects" className="btn-ghost">
                All projects →
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clientProjects.slice(0, 6).map((project, i) => (
              <Reveal key={project.slug} delay={i * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- About / capabilities strip ---------------- */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-contrail">
                About
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                From Fortune 500 to one-man flight sim
              </h2>
              <p className="mt-6 leading-8 text-slate-400">
                I&apos;m a full-stack engineer and AWS Certified Solutions
                Architect with 10+ years across startups, agencies, and
                enterprise. I&apos;ve built AR experiences for AT&amp;T stores,
                an interactive lunar rover for Lockheed Martin&apos;s tradeshow
                booth, Nike&apos;s in-store campaign tech — and now I spend my
                nights running a multiplayer air-combat game where strangers
                dogfight over a brick-textured ocean.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/skills" className="btn-ghost">
                  Full skill set
                </Link>
                <Link href="/contact" className="btn-primary">
                  Work with me
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    stat: "10+",
                    label: "years shipping production software",
                  },
                  {
                    stat: "5",
                    label: "live Warbirds.io theaters of war",
                  },
                  {
                    stat: "AWS",
                    label: "Certified Solutions Architect",
                  },
                  {
                    stat: "0",
                    label: "downloads needed to play my game",
                  },
                ].map((item) => (
                  <div key={item.label} className="card p-6">
                    <p className="font-display text-4xl font-bold text-white">
                      {item.stat}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="pb-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="card relative overflow-hidden p-10 text-center md:p-16">
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(600px circle at 50% -20%, rgba(56,189,248,0.15), transparent 60%)",
                }}
              />
              <h2 className="relative font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Have a project that needs altitude?
              </h2>
              <p className="relative mx-auto mt-4 max-w-lg text-slate-400">
                I take on select freelance and contract work — especially
                real-time, interactive, or just plain unusual builds.
              </p>
              <div className="relative mt-8">
                <Link href="/contact" className="btn-primary">
                  Get in touch
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
