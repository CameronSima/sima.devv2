"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#warbirds", label: "Warbirds.io" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-night/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 font-mono text-sm text-tracer transition-colors group-hover:border-tracer/60">
            cs
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-contrail shadow-[0_0_8px_2px_rgba(56,189,248,0.7)]" />
          </span>
          sima<span className="text-tracer">.dev</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://warbirds.io"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1.5 rounded-lg border border-tracer/40 bg-tracer/10 px-3.5 py-2 text-sm font-semibold text-tracer transition-all hover:border-tracer hover:bg-tracer/20"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Play now
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-slate-200 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-200 transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-200 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 pb-5 pt-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base text-slate-200 hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://warbirds.io"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-lg border border-tracer/40 bg-tracer/10 px-3 py-3 text-center font-semibold text-tracer"
          >
            Play Warbirds.io
          </a>
        </nav>
      )}
    </header>
  );
}
