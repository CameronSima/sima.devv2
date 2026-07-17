import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] max-w-6xl flex-col items-center justify-center px-5 pt-16 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-slate-500">
        Signal lost
      </p>
      <h1 className="mt-4 font-display text-7xl font-bold tracking-tight">
        4<span className="text-tracer">0</span>4
      </h1>
      <p className="mt-4 max-w-sm text-slate-400">
        This sector of the Brick Sea is uncharted. The page you&apos;re looking
        for went down over open water.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="btn-primary">
          Return to base
        </Link>
        <a
          href="https://warbirds.io"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          Scramble a fighter
        </a>
      </div>
    </div>
  );
}
