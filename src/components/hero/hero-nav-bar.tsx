"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { CloseIcon, Logo, MenuIcon } from "@/assets";
import { cn } from "@/lib/utils";

import {
  heroLeftNavLinks,
  heroNavLinks,
  heroRightNavLinks,
} from "./hero-nav-links";

const navLinkClassName =
  "text-lg uppercase tracking-wide text-white transition-colors hover:text-[#f38213]";

function NavLinks({
  links,
  className,
}: {
  links: readonly { label: string; href: string }[];
  className?: string;
}) {
  return (
    <nav className={cn("flex items-center gap-6", className)}>
      {links.map(({ label, href }) => (
        <Link key={href} href={href} className={navLinkClassName}>
          {label}
        </Link>
      ))}
    </nav>
  );
}

const mobileHeaderClassName =
  "flex items-center justify-between px-4 py-3 pt-[43px] md:hidden";

const blurredNavClassName = "bg-[#000c04]/30 backdrop-blur-md";

export function HeroNavBar() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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

  const isPastHero = scrollY > 24;

  const headerBackgroundClassName = cn(
    "transition-[background-color,backdrop-filter] duration-300",
    open
      ? "bg-[#000c04] backdrop-blur-none"
      : !isPastHero
        ? "bg-transparent backdrop-blur-none"
        : blurredNavClassName,
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4 md:px-[60px] md:pt-6",
          headerBackgroundClassName,
        )}
      >
        <NavLinks links={heroLeftNavLinks} />

        <Link
          href="/"
          aria-label="Apex home"
          className="justify-self-center md:col-start-2"
        >
          <Logo />
        </Link>

        <NavLinks links={heroRightNavLinks} className="justify-self-end" />
      </header>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 md:hidden",
          headerBackgroundClassName,
        )}
      >
        <div className={mobileHeaderClassName}>
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
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-[#000c04] transition-opacity duration-300 md:hidden",
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
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
