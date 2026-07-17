import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { warbirdsModes, WarbirdsMode } from "@/warbirds";

const accents: Record<
  WarbirdsMode["accent"],
  { text: string; border: string; bg: string; dot: string }
> = {
  amber: {
    text: "text-amber-300",
    border: "hover:border-amber-400/50",
    bg: "bg-amber-400/10",
    dot: "bg-amber-400",
  },
  sky: {
    text: "text-sky-300",
    border: "hover:border-sky-400/50",
    bg: "bg-sky-400/10",
    dot: "bg-sky-400",
  },
  emerald: {
    text: "text-emerald-300",
    border: "hover:border-emerald-400/50",
    bg: "bg-emerald-400/10",
    dot: "bg-emerald-400",
  },
  violet: {
    text: "text-violet-300",
    border: "hover:border-violet-400/50",
    bg: "bg-violet-400/10",
    dot: "bg-violet-400",
  },
  rose: {
    text: "text-rose-300",
    border: "hover:border-rose-400/50",
    bg: "bg-rose-400/10",
    dot: "bg-rose-400",
  },
};

/* Chunky pixel-style icons drawn from rects to match the voxel aesthetic. */
function ModeIcon({ icon }: { icon: WarbirdsMode["icon"] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 14 14",
    fill: "currentColor",
    "aria-hidden": true,
  } as const;

  switch (icon) {
    case "plane":
      return (
        <svg {...common}>
          <rect x="1" y="6" width="10" height="2" />
          <rect x="11" y="6.5" width="2" height="1" />
          <rect x="1" y="3" width="1.5" height="3" />
          <rect x="5" y="4" width="3" height="1" />
          <rect x="5" y="9" width="3" height="1" />
          <rect x="7.5" y="5" width="2" height="1" />
        </svg>
      );
    case "anchor":
      return (
        <svg {...common}>
          <rect x="6" y="1" width="2" height="2" />
          <rect x="6.5" y="3" width="1" height="7" />
          <rect x="3" y="5" width="8" height="1" />
          <rect x="2" y="8" width="1.5" height="3" />
          <rect x="10.5" y="8" width="1.5" height="3" />
          <rect x="3" y="10.5" width="8" height="1.5" />
        </svg>
      );
    case "tank":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="5" height="2.5" />
          <rect x="8.5" y="4.7" width="4.5" height="1" />
          <rect x="2" y="7" width="10" height="2" />
          <rect x="1" y="9" width="12" height="2.5" rx="1" />
        </svg>
      );
    case "crosshair":
      return (
        <svg {...common}>
          <rect x="6.5" y="1" width="1" height="3.5" />
          <rect x="6.5" y="9.5" width="1" height="3.5" />
          <rect x="1" y="6.5" width="3.5" height="1" />
          <rect x="9.5" y="6.5" width="3.5" height="1" />
          <rect x="6" y="6" width="2" height="2" />
        </svg>
      );
    case "ship":
      return (
        <svg {...common}>
          <rect x="6" y="1.5" width="1.5" height="3" />
          <rect x="4" y="4" width="6" height="2" />
          <rect x="2.5" y="6" width="9" height="2" />
          <rect x="1" y="8" width="12" height="3" />
        </svg>
      );
  }
}

export default function WarbirdsShowcase() {
  return (
    <section id="warbirds" className="relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-tracer">
            Featured project
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-gradient-fire">WARBIRDS</span>
              <span className="text-slate-500">.io</span>
            </h2>
            <a
              href="https://warbirds.io"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Take off
              <span aria-hidden>↗</span>
            </a>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Blocky team dogfights over the Brick Sea. A browser-based multiplayer
            air-combat game — no download, no install. Fly fighters and torpedo
            bombers, man AA guns and battleship turrets, and hold the Sky Ring
            with your squadron. Playable on desktop, mobile, gamepad, and even a
            HOTAS stick.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Real-time multiplayer",
              "Runs in the browser",
              "Cross-platform",
              "HOTAS + gamepad support",
              "Flight School training",
              "Daily missions",
            ].map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {warbirdsModes.map((mode, i) => {
            const a = accents[mode.accent];
            return (
              <Reveal
                key={mode.host}
                delay={i * 70}
                className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <a
                  href={mode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <SpotlightCard className={`h-full p-6 ${a.border}`}>
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex items-start justify-between">
                        <span
                          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${a.bg} ${a.text}`}
                        >
                          <ModeIcon icon={mode.icon} />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          {mode.codename}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white">
                        {mode.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">
                        {mode.description}
                      </p>
                      <div className="mt-5 flex items-center justify-between">
                        <span
                          className={`inline-flex items-center gap-2 font-mono text-xs ${a.text}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${a.dot} animate-pulse`}
                          />
                          {mode.host}
                        </span>
                        <span
                          className="text-slate-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                          aria-hidden
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </SpotlightCard>
                </a>
              </Reveal>
            );
          })}

          <Reveal delay={warbirdsModes.length * 70} className="h-full">
            <div className="card flex h-full flex-col justify-center border-dashed p-6 text-center">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
                One world, five theaters
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Same blocky world, same squadmates — pick a front and jump in.
                Matches run right in the browser tab.
              </p>
              <a
                href="https://warbirds.io"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mx-auto mt-5"
              >
                Enter the Brick Sea
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
