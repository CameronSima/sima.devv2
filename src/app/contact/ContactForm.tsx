"use client";

import { useState } from "react";

const CONTACT_EMAIL = "cam@sima.dev";

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition-colors focus:border-sky-400/70 focus:bg-white/[0.07]";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const isValid =
    form.name.trim() && form.email.trim().includes("@") && form.message.trim();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const subject = `Contact from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
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
          disabled={!isValid}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          Send transmission
        </button>
        <p className="text-sm text-slate-500">
          Opens your email client, addressed to {CONTACT_EMAIL}.
        </p>
      </div>
    </form>
  );
}
