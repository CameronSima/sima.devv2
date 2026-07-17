"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition-colors focus:border-sky-400/70 focus:bg-white/[0.07]";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const isValid =
    form.name.trim() && form.email.trim().includes("@") && form.message.trim();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={submit} className="card space-y-5 p-7 md:p-8">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-mono text-xs uppercase tracking-widest text-slate-500"
        >
          Callsign / Name
        </label>
        <input
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Maverick"
          className={inputClass}
          autoComplete="name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-mono text-xs uppercase tracking-widest text-slate-500"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          className={inputClass}
          autoComplete="email"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-xs uppercase tracking-widest text-slate-500"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="What are we building?"
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="flex items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={!isValid || status === "loading"}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "loading" ? "Transmitting…" : "Send transmission"}
        </button>
        {status === "success" && (
          <p className="text-sm font-medium text-emerald-400" role="status">
            Message received — I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-rose-400" role="status">
            Transmission failed. Try again or ping me on LinkedIn.
          </p>
        )}
      </div>
    </form>
  );
}
