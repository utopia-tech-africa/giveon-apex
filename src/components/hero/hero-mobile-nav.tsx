"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { CloseIcon, Logo, MenuIcon } from "@/assets";
import { cn } from "@/lib/utils";

import { heroNavLinks } from "./hero-nav-links";

const mobileHeaderClassName =
  "flex items-center justify-between px-4 py-3 pt-[43px] md:hidden";

export function HeroMobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (!open) {
      return;
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className={mobileHeaderClassName}>
        <Link href="/" aria-label="Apex home">
          <Logo className="h-[26.53px] w-[82.71px]" />
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="hero-mobile-menu"
          onClick={() => setOpen(true)}
          className="flex size-6 items-center justify-center text-white"
        >
          <MenuIcon className="size-6" />
        </button>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-[#000c04] transition-opacity duration-300 md:hidden",
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav
          id="hero-mobile-menu"
          className="flex h-full flex-col"
          aria-label="Mobile navigation"
        >
          <header className={mobileHeaderClassName}>
            <Link
              href="/"
              aria-label="Apex home"
              onClick={() => setOpen(false)}
            >
              <Logo className="h-[26.53px] w-[82.71px]" />
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex size-6 items-center justify-center text-white"
            >
              <CloseIcon className="size-6" />
            </button>
          </header>

          <ul className="flex flex-col gap-8 px-4 pt-10">
            {heroNavLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-chillax text-lg uppercase tracking-wide text-white transition-colors hover:text-[#f38213]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
