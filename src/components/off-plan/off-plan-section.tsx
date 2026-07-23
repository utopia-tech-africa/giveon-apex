import Image from "next/image";
import Link from "next/link";

import blueprintImg from "@/assets/img/blueprint.png";
import giveonCourtLogo from "@/assets/svg/giveon-court-logo.svg";
import { buttonVariants } from "@/components/ui/button";
import { scrollTargetClassName } from "@/lib/site-links";
import { cn } from "@/lib/utils";

import { offPlanBullets } from "./off-plan-content";
import { OffPlanGallery } from "./off-plan-gallery";

export function OffPlanSection() {
  return (
    <>
      <div
        aria-hidden
        className="relative h-[380px] w-full opacity-40 md:h-[669px]"
      >
        <Image
          src={blueprintImg}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000c04_0%,transparent_16%,transparent_90%,#000c04_98%)]" />
      </div>

      <section
        id="off-plan-homes"
        className={cn("bg-[#000c04] text-white", scrollTargetClassName)}
      >
        <div className="mx-auto px-4 md:px-[60px]">
          <div className="relative mx-auto flex max-w-[856px] flex-col items-center">
            <Image
              src={giveonCourtLogo}
              alt=""
              aria-hidden
              className="h-auto w-full max-w-[343px] md:max-w-[977px]"
            />
            <h2 className="relative z-10 -mt-6 w-full text-center font-zodiak text-xl leading-[1.2] md:-mt-16 md:text-left md:text-[32px]">
              Off-Plan Homes (Detached & Semi-Detached)
            </h2>
          </div>
        </div>

        <OffPlanGallery />

        <div className="mx-auto max-w-[1420px] px-4 pb-10 md:px-[60px] md:pb-16">
          <div className="mt-8 flex flex-col gap-3 md:mt-10 md:gap-6 lg:mt-12 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <p className="font-chillax text-sm leading-[1.2] text-[#d7d7d7] md:text-base lg:max-w-[597px] lg:text-lg">
              Reserve your home before construction completes and buy at
              off-plan pricing. Choose between detached and semi-detached
              designs within the gated Giveon Court estate, each built to the
              same standard of modern, thoughtful architecture.
            </p>

            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8 lg:contents">
              <p className="whitespace-pre-line font-chillax text-sm leading-[1.2] text-[#d7d7d7] md:flex-1 md:text-base lg:max-w-[414px] lg:flex-none lg:text-lg">
                {offPlanBullets.map((item) => `  • ${item}`).join("\n")}
              </p>

              <Link
                href="#contact"
                className={cn(
                  buttonVariants(),
                  "w-full shrink-0 md:w-auto lg:w-fit",
                )}
              >
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
