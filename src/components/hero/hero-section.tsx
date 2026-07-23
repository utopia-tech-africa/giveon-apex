import Link from "next/link";

import { Logo } from "@/assets";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HERO_VIDEO_SRC =
  "https://res.cloudinary.com/dan9camhs/video/upload/v1784811535/Stars_twinkle__branches_sway_202607210803_umhlob.mp4";

const leftNavLinks = [
  { label: "Off-plan homes", href: "#off-plan-homes" },
  { label: "Cabins", href: "#cabins" },
] as const;

const rightNavLinks = [
  { label: "About", href: "#about" },
  { label: "Contact us", href: "#contact" },
] as const;

function NavLinks({
  links,
  className,
}: {
  links: readonly { label: string; href: string }[];
  className?: string;
}) {
  return (
    <nav className={cn("flex items-center gap-6", className)}>
      {links.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className="text-lg uppercase tracking-wide text-white transition-opacity hover:opacity-80"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-[rgba(0,12,4,0)] to-[rgba(0,12,4,1)]"
      />

      <div className="relative flex min-h-screen flex-col px-6 pb-10 pt-6 md:px-[60px] md:pb-[60px] md:pt-6">
        <header className="flex flex-col items-center gap-6 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4">
          <NavLinks links={leftNavLinks} className="hidden md:flex" />

          <Link
            href="/"
            aria-label="Apex home"
            className="justify-self-center md:col-start-2"
          >
            <Logo />
          </Link>

          <NavLinks
            links={rightNavLinks}
            className="hidden justify-self-end md:flex"
          />

          <NavLinks
            links={[...leftNavLinks, ...rightNavLinks]}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:hidden"
          />
        </header>

        <div className="mt-auto flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-[766px] space-y-2.5">
            <h1 className="text-[clamp(2.5rem,5vw,4.375rem)] font-normal italic leading-[1.2] capitalize">
              A home a retreat and an asset class
            </h1>
            <p className="max-w-[766px] text-lg leading-[1.2] text-white/95">
              Off-plan detached and semi-detached homes, plus investment cabins
              with built-in short-stay income.
            </p>
          </div>

          <Button
            variant="outlineAccent"
            size="hero"
            className="w-fit shrink-0 self-start lg:self-end"
          >
            Send Enquiry
          </Button>
        </div>
      </div>
    </section>
  );
}
