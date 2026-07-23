import Image from "next/image";
import { ApexCabinsPortrait, ApexCabinsWide } from "@/assets";
import { Button } from "./ui/button";

const ApexCabins = () => {
  return (
    <section
      id="apex-cabins"
      className="flex flex-col gap-8 px-4 py-10 md:px-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-12 lg:py-24 lg:pr-15 lg:pl-0 xl:gap-16"
    >
      <div className="relative w-full shrink-0 lg:w-[min(100%,546px)]">
        <div className="relative h-[381px] w-full overflow-hidden rounded-lg lg:aspect-[546/519] lg:h-auto lg:rounded-l-none lg:rounded-r-lg">
          <Image
            src={ApexCabinsWide}
            alt="Apex Cabins eco-lodge landscape"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 546px"
            priority
          />
        </div>
        <div className="absolute top-[10%] right-0 hidden w-[48%] max-w-[291px] overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)] xl:block xl:right-[-12%] 2xl:right-[-18%]">
          <Image
            src={ApexCabinsPortrait}
            alt="Apex Cabin exterior"
            width={291}
            height={400}
            className="h-auto w-full object-cover"
            sizes="291px"
          />
        </div>
      </div>

      <div className="flex w-full min-w-0 flex-col justify-between gap-8 lg:max-w-[602px] lg:flex-1 lg:shrink">
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
          <Button
            type="button"
            className="w-full flex-1 text-sm lg:text-base xl:text-lg"
          >
            Join waitlist to book
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApexCabins;
