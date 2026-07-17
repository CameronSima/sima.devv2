import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Languages, frameworks, and infrastructure Cam Sima works with — TypeScript, Python, Go, React, Next.js, AWS, and more.",
};

const loadout = [
  {
    label: "Languages",
    blurb: "TypeScript and Python daily; Go, Java, and C# when the job calls.",
    items: ["TypeScript", "Python", "Go", "Java", "C#", "SQL"],
  },
  {
    label: "Frontend & Games",
    blurb:
      "From marketing sites to WebGL worlds — if it renders in a browser, I've shipped it.",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Three.js",
      "WebGL",
      "Canvas",
      "TailwindCSS",
      "Unity",
    ],
  },
  {
    label: "Backend & Real-time",
    blurb:
      "APIs, multiplayer servers, and video pipelines built to stay up under fire.",
    items: [
      "Node.js",
      "FastAPI",
      "Django",
      "NestJS",
      "WebSockets",
      "WebRTC",
      "ffmpeg",
      "Prisma",
    ],
  },
  {
    label: "Infrastructure & Data",
    blurb:
      "AWS Certified Solutions Architect. Serverless-first, scalable, and cost-aware.",
    items: [
      "AWS",
      "Lambda",
      "DynamoDB",
      "SQS",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Nginx",
    ],
  },
];

export default function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-28 pt-32 md:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-contrail">
          Loadout
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl">
          Skills
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          Ten-plus years as a full-stack engineer across Fortune 500 companies,
          lean startups, and everything in between — from small sites to large
          real-time systems. I believe in the right tool for the job, and in
          learning the next one before I need it.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {loadout.map((group, i) => (
          <Reveal key={group.label} delay={i * 70}>
            <SpotlightCard className="h-full p-7">
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-slate-500">
                    0{i + 1}
                  </span>
                  <h2 className="font-display text-xl font-bold text-white">
                    {group.label}
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {group.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="card flex flex-col items-center gap-8 p-8 md:flex-row md:p-10">
          <div className="relative h-32 w-32 shrink-0">
            <Image
              src="/awscert.png"
              alt="AWS Certified Solutions Architect badge"
              fill
              sizes="128px"
              className="object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-display text-2xl font-bold text-white">
              AWS Certified Solutions Architect
            </h2>
            <p className="mt-2 max-w-xl leading-7 text-slate-400">
              I design cloud infrastructure that&apos;s efficient, scalable, and
              secure — the same backbone that keeps Warbirds.io&apos;s
              multiplayer battles running.
            </p>
          </div>
          <div className="md:ml-auto">
            <Link href="/projects" className="btn-ghost whitespace-nowrap">
              See it in action →
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
