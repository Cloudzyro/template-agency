"use client";

import { useState } from "react";
import { brief, site } from "@/data/site";

// Posts to NEXT_PUBLIC_FORM_ENDPOINT (Formspree, Basin, a Supabase function or similar).
// With no endpoint set, the form opens the visitor's email app instead.
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "error";

export default function BriefForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!endpoint) {
      const lines = [
        `Name: ${data.get("name") ?? ""}`,
        `Email: ${data.get("email") ?? ""}`,
        `Organization: ${data.get("organization") ?? ""}`,
        `Website: ${data.get("website") ?? ""}`,
        `Services: ${data.getAll("services").join(", ")}`,
        `Budget: ${data.get("budget") ?? ""}`,
        `Timeline: ${data.get("timeline") ?? ""}`,
        "",
        String(data.get("message") ?? ""),
      ];
      const subject = encodeURIComponent(`Project brief from ${data.get("organization") || data.get("name") || "the website"}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-t border-ink pt-8">
        <p className="display-sm text-[28px]">Brief received</p>
        <p className="mt-3 max-w-[48ch] text-ink-2">{brief.sent}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8">
      {!endpoint && (
        <p className="rounded-[4px] border border-line bg-card px-4 py-3 text-[15px] text-ink-2">
          This form isn&apos;t connected yet, so sending it opens your email app with your answers filled in. You can
          also write to{" "}
          <a className="link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Organization" name="organization" autoComplete="organization" />
        <Field label="Website" name="website" type="url" autoComplete="url" placeholder="https://" optional />
      </div>

      <fieldset>
        <legend className="text-[15px] font-medium">What do you need?</legend>
        <p className="mt-1 text-[14px] text-muted">Pick any that apply</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {brief.services.map((s) => (
            <label key={s} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-[4px] border border-line bg-card px-3 has-[:checked]:border-cobalt">
              <input type="checkbox" name="services" value={s} className="size-4 accent-[var(--color-cobalt)]" />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <Select label="Budget" name="budget" options={brief.budgets} />
        <Select label="Timeline" name="timeline" options={brief.timelines} />
      </div>

      <label className="block">
        <span className="text-[15px] font-medium">About the project</span>
        <span className="mt-1 block text-[14px] text-muted">What you&apos;re making, who it&apos;s for and what prompted it now</span>
        <textarea name="message" required rows={6} className="field mt-3" />
      </label>

      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-wrap items-center gap-6">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending" : endpoint ? "Send brief" : "Send brief by email"}
        </button>
        <p className="text-[14px] text-muted">We reply within two business days</p>
      </div>
      {status === "error" && (
        <p role="alert" className="text-[15px] text-[#b42318]">
          That didn&apos;t send. Please try again, or email{" "}
          <a className="link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  optional,
  ...props
}: { label: string; optional?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-[15px] font-medium">
        {label}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </span>
      <input className="field mt-2" {...props} />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[15px] font-medium">{label}</span>
      <select name={name} className="field mt-2" defaultValue="">
        <option value="" disabled>
          Choose one
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
