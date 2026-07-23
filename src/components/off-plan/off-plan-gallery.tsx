"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import offPlanCenterImg from "@/assets/img/offplan-center.png";
import offPlanLeftImg from "@/assets/img/offplan-left.png";
import offPlanRightImg from "@/assets/img/offplan-right.png";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 3000;

const slides = [
  {
    src: offPlanLeftImg,
    alt: "Giveon Court off-plan home exterior",
    desktopClassName: "mt-[82px] h-[373px] rounded-r-lg",
  },
  {
    src: offPlanCenterImg,
    alt: "Giveon Court off-plan home rendering",
    desktopClassName: "h-[455px] rounded-lg",
  },
  {
    src: offPlanRightImg,
    alt: "Giveon Court off-plan home interior",
    desktopClassName: "mt-[82px] h-[373px] rounded-l-lg",
  },
] as const;

function OffPlanGalleryImage({
  src,
  alt,
  className,
}: {
  src: (typeof slides)[number]["src"];
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
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

export function OffPlanGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className="mt-10 overflow-hidden md:hidden"
        aria-roledescription="carousel"
        aria-label="Off-plan home gallery"
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          aria-live="polite"
        >
          {slides.map((slide) => (
            <OffPlanGalleryImage
              key={slide.alt}
              src={slide.src}
              alt={slide.alt}
              className="h-[221px] w-full shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="mt-10 hidden w-full gap-10 md:mt-14 md:grid md:grid-cols-[513fr_632fr_513fr] md:items-start">
        {slides.map((slide) => (
          <OffPlanGalleryImage
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            className={slide.desktopClassName}
          />
        ))}
      </div>
    </>
  );
}
