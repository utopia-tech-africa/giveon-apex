import Image from "next/image";
import Link from "next/link";
import { Logo, PrefooterBg } from "@/assets";
import ComponentLayout from "@/components/component-layout";
import { WaitlistForm } from "./waitlist-form";

export function WaitlistSection() {
  return (
    <section className="relative isolate min-h-[calc(100dvh-8rem)] overflow-hidden">
      <Image
        src={PrefooterBg}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-[#000C04] via-[#000C04]/55 to-[#000C04]"
      />

      <ComponentLayout className="relative z-10 flex flex-col gap-10 py-10 lg:gap-14 lg:py-16">
        <header className="flex items-center justify-between">
          <Link href="/" aria-label="Apex home">
            <Logo />
          </Link>
          <Link
            href="/#cabins"
            className="font-chillax text-sm text-white/70 transition-colors hover:text-[#f38213] md:text-base">
            Back to cabins
          </Link>
        </header>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="flex max-w-md flex-col gap-3 capitalize lg:max-w-lg lg:gap-4 lg:pt-6">
            <p className="font-chillax text-sm tracking-wide text-[#f38213] uppercase">
              Apex Cabins
            </p>
            <h1 className="font-zodiak text-3xl italic leading-[1.2] text-white md:text-[42px]">
              Be first to book a stay
            </h1>
            <p className="font-chillax text-sm leading-[1.35] text-white/80 md:text-lg">
              Join the Apex Cabins waitlist and we&apos;ll reach out when
              short-let stays open near Safari Valley Eco Resort. Tell us your
              preferred nightly budget so we can match you with the right cabin
              experience.
            </p>
          </div>

          <WaitlistForm />
        </div>
      </ComponentLayout>
    </section>
  );
}
