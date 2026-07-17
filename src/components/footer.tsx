import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-night-raised/40">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-display text-xl font-bold tracking-tight"
            >
              sima<span className="text-tracer">.dev</span>
            </Link>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Cam Sima — full-stack software engineer building games, real-time
              systems, and polished web experiences.
            </p>
            <p className="mt-4 font-mono text-xs text-slate-500">
              Currently flying:{" "}
              <a
                href="https://warbirds.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-contrail hover:underline"
              >
                warbirds.io
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">
                Site
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link
                    href="/projects"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/skills"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">
                Warbirds.io
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="https://warbirds.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Sky Ring
                  </a>
                </li>
                <li>
                  <a
                    href="https://naval.warbirds.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Naval
                  </a>
                </li>
                <li>
                  <a
                    href="https://ground.warbirds.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Ground
                  </a>
                </li>
                <li>
                  <a
                    href="https://combined.warbirds.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Combined Arms
                  </a>
                </li>
                <li>
                  <a
                    href="https://warbirds.io/battleship"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    USS New Jersey
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">
                Elsewhere
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="https://github.com/cameronsima"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/cameronsima"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Cam Sima. All rights reserved.</p>
          <p className="font-mono">Crashing into the scenery is canon.</p>
        </div>
      </div>
    </footer>
  );
}
