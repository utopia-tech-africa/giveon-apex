import Link from "next/link";

import { Logo } from "@/assets";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { HeroMobileNav } from "./hero-mobile-nav";
import { heroLeftNavLinks, heroRightNavLinks } from "./hero-nav-links";

const HERO_VIDEO_SRC =
  "https://res.cloudinary.com/dan9camhs/video/upload/v1784826172/LANDING_PAGE_GIVEON_compressed_ejlvqt.mp4";

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
          className="text-lg uppercase tracking-wide text-white transition-colors hover:text-[#f38213]"
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

      <div className="relative flex min-h-screen flex-col pb-10 md:px-[60px] md:pb-[60px] md:pt-6">
        <header className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4">
          <NavLinks links={heroLeftNavLinks} />

          <Link
            href="/"
            aria-label="Apex home"
            className="justify-self-center md:col-start-2"
          >
            <Logo />
          </Link>

          <NavLinks links={heroRightNavLinks} className="justify-self-end" />
        </header>

        <HeroMobileNav />

        <div className="mt-auto flex flex-col gap-5 px-[17px] md:px-0 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="flex max-w-[766px] flex-col gap-2.5">
            <h1 className="font-zodiak text-[32px] font-normal capitalize italic leading-[1.2] md:text-[clamp(2.5rem,5vw,4.375rem)]">
              A home a retreat and an asset class
            </h1>
            <p className="max-w-[766px] text-sm leading-[1.2] text-white md:text-lg">
              Off-plan detached and semi-detached homes, plus investment cabins
              with built-in short-stay income.
            </p>
          </div>

          <Link
            href="#contact"
            className={cn(
              buttonVariants(),
              "w-full shrink-0 text-sm md:w-fit md:text-lg lg:self-end",
            )}
          >
            Send Enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
