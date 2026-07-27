import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const APEX_CABINS_VIDEO_SRC =
  "https://res.cloudinary.com/dan9camhs/video/upload/v1785155682/APEX_CABINS_e0k2of.mp4";

const ApexCabins = () => {
  return (
    <section
      id="apex-cabins"
      className="flex flex-col gap-8 px-4 py-10 md:px-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-12 lg:py-24 lg:pr-15 lg:pl-0 xl:gap-16"
    >
      <div className="relative w-full min-w-0 lg:flex-[1.25] xl:flex-[1.4]">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg lg:rounded-l-none lg:rounded-r-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="Apex Cabins eco-lodge landscape"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={APEX_CABINS_VIDEO_SRC} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="flex w-full min-w-0 flex-col justify-between gap-8 lg:max-w-[520px] lg:shrink-0 xl:max-w-[560px]">
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <div className="relative flex w-full flex-col items-center lg:items-start">
            <img
              src="/apex-cabins-script.svg"
              alt="Apex Cabins"
              className="h-auto w-full max-w-[320px] opacity-70 lg:max-w-[380px] xl:max-w-[467px]"
            />
            <h2 className="relative z-10 -mt-6 max-w-[254px] font-zodiak text-xl leading-[1.2] text-white capitalize lg:-mt-8 lg:max-w-none lg:text-[28px] xl:-mt-10 xl:text-[32px]">
              Adukrom-Dawu&apos;s Newest Eco-Lodge
            </h2>
          </div>

          <div className="w-full font-chillax text-sm leading-[1.2] text-[#d7d7d7] capitalize lg:text-left lg:text-base xl:text-lg">
            <p>
              Apex Cabins is a premium eco-lodge development of 5 cabins for
              short-let (Airbnb), a two-minute walk from Safari Valley Eco
              Resort. We&apos;re building in two phases:
            </p>
            <ul className="my-3 list-disc space-y-1 pl-5 text-left lg:pl-6">
              <li>
                Phase 1: 2 cabins, built first to generate early revenue and
                prove the concept — ready and live on Airbnb from November
                [2026].
              </li>
              <li>
                Phase 2: The remaining 3 cabins, completed once Phase 1 is
                proven out.
              </li>
            </ul>
            <p className="mb-3">
              Whether you&apos;re looking to invest or planning a stay,
              there&apos;s a way in:
            </p>
            <p>
              Investors: We&apos;re seeking 5 investors to co-fund the full
              development. Each investment is anchored by real property
              ownership — not just a share in future income, but a stake in a
              physical, income-generating asset in one of Adukrom-Dawu&apos;s
              most desirable spots.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 lg:flex-row lg:gap-8">
          <Button
            type="button"
            className="w-full flex-1 text-sm lg:text-base xl:text-lg"
          >
            Invest in Cabins
          </Button>
          <Link
            href="/waitlist"
            className={cn(
              buttonVariants(),
              "w-full flex-1 text-center text-sm lg:text-base xl:text-lg",
            )}
          >
            Join waitlist to book
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApexCabins;
