import Image from "next/image";
import Link from "next/link";

import livingsCabinsImg from "@/assets/img/livings-cabins.png";
import livingsHomesImg from "@/assets/img/livings-homes.png";

import { livingsCards } from "./livings-cards";

const livingsImages = {
  "livings-homes": livingsHomesImg,
  "livings-cabins": livingsCabinsImg,
} as const;

function LivingsCard({
  label,
  image,
  href,
}: (typeof livingsCards)[number]) {
  return (
    <Link
      href={href}
      className="group relative block h-[244px] overflow-hidden rounded-none md:h-[286px] md:flex-1 md:rounded-lg"
    >
      <Image
        src={livingsImages[image]}
        alt={label}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 536px"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-transparent to-black/80"
      />
      <div className="absolute bottom-0 left-0 flex items-center gap-2 p-4 md:gap-3 md:p-[26px]">
        <span
          aria-hidden
          className="size-2 shrink-0 bg-[#f38213] md:size-3"
        />
        <span className="font-zodiak text-base italic leading-[1.2] text-white md:text-xl">
          {label}
        </span>
      </div>
    </Link>
  );
}

export function LivingsSection() {
  return (
    <section className="bg-[#000c04] text-white">
      <div className="mx-auto pb-20 pt-16 md:px-[60px] md:pb-28 md:pt-24">
      <p className="font-zodiak text-sm font-light italic leading-[1.2] text-[#f38213] md:text-base mb-5 px-4 md:px-0">
              OUR LIVINGS
            </p>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-8">

          
          <div className="flex max-w-[343px] flex-col gap-2.5 px-4 md:max-w-[261px] md:shrink-0 md:gap-4 md:px-0">
           
            <h2 className="font-zodiak text-[32px] font-normal italic leading-[1.2] capitalize md:text-[50px]">
              timeless design wellness-focused living
            </h2>
          </div>

          <div className="flex flex-col gap-8 md:min-w-0 md:flex-1 md:flex-row">
            {livingsCards.map((card) => (
              <div
                key={card.label}
                id={card.href === "#cabins" ? "cabins" : undefined}
                className="scroll-mt-24 md:flex-1"
              >
                <LivingsCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
