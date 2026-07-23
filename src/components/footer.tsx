"use client";
import ComponentLayout from "./component-layout";
import Image from "next/image";
import { Logo2 } from "@/assets";
import { footerUtils } from "@/lib/footer-utils";
import Link from "next/link";

const Footer = () => {
  const linkColumns = footerUtils.filter((item) => item.title !== "Follow us");
  const followUs = footerUtils.find((item) => item.title === "Follow us");

  return (
    <footer className="mt-auto">
      <ComponentLayout className="py-10 flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4">
          <Image
            src={Logo2}
            alt="Giveon Apex logo"
            className="w-[69px] h-[52px]"
          />
          <p className="font-chillax text-white/50 text-sm font-semibold leading-[1.1]">
            Elevated Living...
          </p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:gap-x-30">
          <div className="flex gap-x-[120px] md:gap-x-30">
            {linkColumns.map((item, idx) => (
              <div className="flex flex-col gap-2" key={idx}>
                <h3 className="font-chillax font-medium text-lg text-white">
                  {item.title}
                </h3>
                <ul className="flex flex-col gap-4">
                  {item.items.map((linkItem, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={linkItem.link}
                        className="font-chillax text-base text-white/70 hover:text-white transition-colors whitespace-nowrap">
                        {linkItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {followUs && (
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <h3 className="font-chillax font-medium text-lg text-white">
                {followUs.title}
              </h3>
              <ul className="flex items-center justify-between gap-2 md:flex-col md:items-start md:justify-start md:gap-4">
                {followUs.items.map((linkItem, linkIdx) => {
                  const Icon = "icon" in linkItem ? linkItem.icon : null;

                  return (
                    <li key={linkIdx} className="shrink-0">
                      <Link
                        href={linkItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 py-1.5 font-chillax text-base text-white/70 hover:text-white transition-colors whitespace-nowrap">
                        {Icon && <Icon size={16} weight="bold" />}
                        {linkItem.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </ComponentLayout>
    </footer>
  );
};

export default Footer;
