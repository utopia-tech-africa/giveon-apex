import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { HeroNavBar } from "./hero-nav-bar";

const HERO_VIDEO_SRC =
  "https://res.cloudinary.com/dan9camhs/video/upload/v1784831581/LANDING_PAGE_GIVEON_01_watermark_compressed_gqvzkg.mp4";

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
        <HeroNavBar />

        <div
          aria-hidden
          className="shrink-0 px-4 py-3 pt-[43px] md:hidden"
        >
          <div className="flex items-center justify-between">
            <div className="h-[26.53px] w-[82.71px]" />
            <div className="size-6" />
          </div>
        </div>

        <div
          aria-hidden
          className="hidden shrink-0 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4"
        >
          <div className="h-[37px]" />
          <div className="h-[37px] w-[114px]" />
          <div className="h-[37px]" />
        </div>

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

          <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row md:w-fit lg:self-end">
            <Link
              href="#contact"
              className={cn(
                buttonVariants(),
                "w-full text-sm md:w-fit md:text-lg",
              )}
            >
              Send Enquiry
            </Link>
            <Link
              href="/Giveon_Court_Company_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "filled" }),
                "w-full text-sm md:w-fit md:text-lg",
              )}
            >
              View Brochure
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
