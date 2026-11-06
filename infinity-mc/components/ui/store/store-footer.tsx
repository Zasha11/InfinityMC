import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StoreFooter() {
  return (
    <footer className="mx-auto flex max-w-360 items-center justify-between gap-6 border-t-3 border-gold bg-[#2e1c19] px-12 py-8 text-[#f9f2e8] max-[1000px]:flex-wrap max-[1000px]:px-6 max-sm:flex-col max-sm:items-start [&>a:first-child]:text-[13px] [&>a:first-child]:tracking-[0.1em] [&_p]:font-[Georgia,serif] [&_p]:text-sm [&_p]:italic [&_p]:text-[#d0beb1] [&_a]:inline-flex [&_a]:items-center [&_a]:gap-3 [&_a]:text-[11px] [&_a]:no-underline">
      <Link href="/store">InfinityMall</Link>
      <p>Objects for a considered workday.</p>
      <Link href="/">
        Back to Infinity Management Consultants{" "}
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </footer>
  );
}
