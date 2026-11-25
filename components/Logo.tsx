import { site } from "@/data/site";

// A plumb bob: a line and its weight. One color, no effects.
export function Mark({ className = "h-6 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 24" className={className} aria-hidden="true">
      <path d="M8 0 V9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 9 L13 15 L8 24 L3 15 Z" fill="currentColor" />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      <Mark className="h-6 w-4 text-cobalt" />
      <span className="text-[18px] font-medium leading-none" style={{ fontStretch: "125%" }}>
        {site.name}
      </span>
    </span>
  );
}
