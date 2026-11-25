import type { Metadata } from "next";
import BriefForm from "@/components/BriefForm";
import { brief, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Start a project",
  description: "Send Plumbline a short project brief. We reply within two business days.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <section className="wrap pt-16 md:pt-24">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <p className="meta text-muted">Start a project</p>
          <h1 className="display mt-4 max-w-[14ch] text-[40px] md:text-[56px]">{brief.title}</h1>
          <p className="mt-8 max-w-[40ch] text-[18px] leading-[28px] text-ink-2">{brief.intro}</p>
          <dl className="mt-12 grid gap-6">
            <div className="border-t border-line pt-3">
              <dt className="meta text-muted">Email</dt>
              <dd className="mt-1">
                <a className="link" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="border-t border-line pt-3">
              <dt className="meta text-muted">Phone</dt>
              <dd className="mt-1">
                <a className="link" href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="border-t border-line pt-3">
              <dt className="meta text-muted">Studio</dt>
              <dd className="mt-1">
                {site.address.street}, {site.address.city}, {site.address.region} {site.address.postal}
              </dd>
            </div>
          </dl>
        </div>
        <div className="md:col-span-7">
          <BriefForm />
        </div>
      </div>
    </section>
  );
}
