import Image from "next/image";

import introAccentLeft from "@/assets/svg/intro-accent-left.svg";
import introAccentRight from "@/assets/svg/intro-accent-right.svg";
import { scrollTargetClassName } from "@/lib/site-links";
import { cn } from "@/lib/utils";

import { introStats } from "./intro-stats";

function IntroStat({
  value,
  label,
  description,
}: (typeof introStats)[number]) {
  return (
    <div>
      <div className="flex items-end gap-1">
        <span className="font-zodiak text-[56px] font-normal leading-[1.2] text-white md:text-[80px]">
          {value}
        </span>
        <span className="mb-2 font-zodiak text-base italic leading-[1.2] text-[#cacaca] md:mb-3 md:text-xl">
          {label}
        </span>
      </div>
      <p className="font-chillax text-sm leading-[1.2] text-white md:text-lg">
        {description}
      </p>
    </div>
  );
}

export function IntroSection() {
  return (
    <section
      id="about"
      className={cn(
        "relative overflow-hidden bg-[#000c04] text-white",
        scrollTargetClassName,
      )}
    >
      <Image
        src={introAccentLeft}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-[53px] top-0 h-auto w-[min(178px,47vw)] select-none md:-left-[58px] md:w-[344px]"
      />
      <Image
        src={introAccentRight}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-[55px] top-40 h-auto w-[min(206px,55vw)] select-none md:-right-[58px] md:w-[420px]"
      />

      <div className="relative mx-auto px-4 pb-10 pt-16 md:px-[60px] md:pb-16 md:pt-24">
        <p className="mx-auto max-w-[1278px] text-left font-zodiak text-[21px] font-light italic leading-[1.2] text-[#d7d7d7] md:text-[32px] sm:text-center">
          <span className="font-bold italic text-[#f38213] ">Giveon Court</span>{" "}
          is not simply another housing development. It is a scarce lifestyle
          asset in a rising Ghanaian corridor: a gated 8-acre villa community
          sitting one minute from Safari Valley Eco Resort, with premium
          off-plan pricing, self-sustaining utilities and a product mix built
          for both owner-occupation and short-stay income.
        </p>

        <div className="mt-12 flex flex-col gap-12 md:mt-20 md:flex-row md:items-end md:justify-between md:gap-8">
          {introStats.map((stat) => (
            <IntroStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
