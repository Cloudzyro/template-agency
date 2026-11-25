import Link from "next/link";
import { Mark } from "./Logo";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 bg-ink text-bone">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Mark className="h-8 w-5 text-bone" />
          <p className="display-sm mt-6 max-w-[16ch] text-[32px]">{site.tagline}</p>
        </div>
        <div className="md:col-span-3">
          <p className="meta text-bone/60">Studio</p>
          <address className="mt-3 not-italic leading-7 text-bone/90">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.postal}
          </address>
          <p className="mt-3 text-bone/70">{site.hours}</p>
        </div>
        <div className="md:col-span-2">
          <p className="meta text-bone/60">Contact</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a className="link decoration-bone/40 hover:text-bone" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="link decoration-bone/40 hover:text-bone" href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="meta text-bone/60">Elsewhere</p>
          <ul className="mt-3 space-y-2">
            {site.social.map((s) => (
              <li key={s.label}>
                <a className="link decoration-bone/40 hover:text-bone" href={s.href} rel="me noopener">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap flex flex-wrap justify-between gap-4 border-t border-bone/15 py-6 text-[14px] text-bone/60">
        <p>
          &copy; {year} {site.legalName}
        </p>
        <nav aria-label="Footer" className="flex gap-6">
          {[...site.nav, { label: "Contact", href: "/contact/" }].map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-bone">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
