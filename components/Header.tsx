"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <header className="border-b border-line bg-bone">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name}, home`} className="-m-2 p-2">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-[15px] transition-colors hover:text-ink ${
                isActive(item.href) ? "text-ink underline decoration-cobalt decoration-2 underline-offset-[8px]" : "text-ink-2"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href={site.cta.href} className="btn btn-primary h-9 px-4 text-[14px]">
            {site.cta.label}
          </Link>
        </nav>
        <button
          type="button"
          className="-mr-2 inline-flex h-10 items-center gap-2 px-2 text-[15px] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5" aria-hidden="true">
            <span className={`absolute left-0 right-0 h-[1.5px] bg-ink transition-transform duration-200 ${open ? "top-[5px] rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 right-0 h-[1.5px] bg-ink transition-transform duration-200 ${open ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
          </span>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-line md:hidden">
          <ul className="wrap py-4">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="display-sm block border-b border-line py-4 text-[28px]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-6 pb-2">
              <Link href={site.cta.href} className="btn btn-primary w-full">
                {site.cta.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
