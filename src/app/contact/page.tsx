import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Cam Sima about projects, contracts, or Warbirds.io.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-28 pt-32 md:px-8">
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-contrail">
            Open channel
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Contact
          </h1>
          <p className="mt-5 max-w-md text-lg leading-8 text-slate-400">
            Have a question, a project, or a squadron that needs one more pilot?
            Send a transmission — I read everything.
          </p>
          <div className="mt-10 space-y-4 font-mono text-sm">
            <a
              href="https://github.com/cameronsima"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
            >
              <span className="text-slate-500">github</span>
              /cameronsima
            </a>
            <a
              href="https://linkedin.com/in/cameronsima"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
            >
              <span className="text-slate-500">linkedin</span>
              /in/cameronsima
            </a>
            <a
              href="https://warbirds.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
            >
              <span className="text-slate-500">in-game</span>
              warbirds.io
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
