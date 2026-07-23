import ApexCabins from "@/components/apex-cabins";
import Features from "@/components/features";
import Faq from "@/components/faq";
import Prefooter from "@/components/prefooter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 overflow-hidden">
          <Image
            src="/cabins-pattern.svg"
            alt=""
            className="h-auto w-full max-w-none select-none"
          />
        </div>

        <div className="relative z-10">
          <ApexCabins />
          <Features />
        </div>
      </div>

      <Faq />
      <Prefooter />
    </main>
  );
}
