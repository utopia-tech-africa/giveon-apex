import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const footerUtils = [
  {
    title: "Quick links",
    items: [
      {
        label: "Off-plan homes",
        link: "#",
      },
      {
        label: "Apex cabins",
        link: "#",
      },
      {
        label: "Contact us",
        link: "#",
      },
    ],
  },
  {
    title: "Legal",
    items: [
      {
        label: "Privacy Policy",
        link: "#",
      },
      {
        label: "Terms of Use",
        link: "#",
      },
    ],
  },
  {
    title: "Follow us",
    items: [
      {
        label: "Facebook",
        icon: FacebookLogoIcon,
        link: "#",
      },
      {
        label: "Instagram",
        icon: InstagramLogoIcon,
        link: "#",
      },
      {
        label: "Youtube",
        icon: YoutubeLogoIcon,
        link: "#",
      },
    ],
  },
];
