import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap pt-24 md:pt-32">
      <p className="meta text-muted">Error 404</p>
      <h1 className="display mt-4 max-w-[16ch] text-[40px] md:text-[64px]">This page isn&apos;t on the plan</h1>
      <p className="mt-6 max-w-[48ch] text-[18px] leading-[28px] text-ink-2">
        The address may have changed, or the page was taken down. The work and the contact page are still here.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/work/" className="btn btn-primary">
          See the work
        </Link>
        <Link href="/" className="btn btn-secondary">
          Go home
        </Link>
      </div>
    </section>
  );
}
