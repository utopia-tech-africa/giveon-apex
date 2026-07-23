import Image from "next/image";
import Link from "next/link";

import blueprintImg from "@/assets/img/blueprint.png";
import offPlanCenterImg from "@/assets/img/offplan-center.png";
import offPlanLeftImg from "@/assets/img/offplan-left.png";
import offPlanRightImg from "@/assets/img/offplan-right.png";
import giveonCourtLogo from "@/assets/svg/giveon-court-logo.svg";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { offPlanBullets } from "./off-plan-content";

function OffPlanGalleryImage({
  src,
  alt,
  className,
}: {
  src: typeof offPlanLeftImg;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 632px"
      />
    </div>
  );
}

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

      <section id="off-plan-homes" className="bg-[#000c04] text-white">
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

          <div className="mt-10 hidden gap-10 md:mt-14 md:grid md:grid-cols-[513fr_632fr_513fr] md:items-start">
            <OffPlanGalleryImage
              src={offPlanLeftImg}
              alt="Giveon Court off-plan home exterior"
              className="mt-[82px] h-[373px]"
            />
            <OffPlanGalleryImage
              src={offPlanCenterImg}
              alt="Giveon Court off-plan home rendering"
              className="h-[455px]"
            />
            <OffPlanGalleryImage
              src={offPlanRightImg}
              alt="Giveon Court off-plan home interior"
              className="mt-[82px] h-[373px]"
            />
          </div>
        </div>

        <div className="relative mt-10 h-[221px] w-full overflow-hidden md:hidden">
          <Image
            src={offPlanCenterImg}
            alt="Giveon Court off-plan home rendering"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="mx-auto max-w-[1420px] px-4 pb-20 md:px-[60px] md:pb-28">
          <div className="mt-8 flex flex-col gap-3 md:mt-12 md:flex-row md:items-end md:justify-between md:gap-8">
            <p className="max-w-[597px] font-chillax text-sm leading-[1.2] text-[#d7d7d7] md:text-lg">
              Reserve your home before construction completes and buy at
              off-plan pricing. Choose between detached and semi-detached
              designs within the gated Giveon Court estate, each built to the
              same standard of modern, thoughtful architecture.
            </p>

            <p className="max-w-[414px] whitespace-pre-line font-chillax text-sm leading-[1.2] text-[#d7d7d7] md:text-lg">
              {offPlanBullets.map((item) => `  - ${item}`).join("\n")}
            </p>

            <Link
              href="#contact"
              className={cn(
                buttonVariants(),
                "w-full shrink-0 md:w-fit",
              )}
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
