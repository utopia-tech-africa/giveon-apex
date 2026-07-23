import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TiktokLogoIcon,
} from "@phosphor-icons/react";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/1MyE2sCbbP/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/giveon_apex/",
  tiktok: "https://www.tiktok.com/@giveon_apex",
} as const;


export const footerUtils = [
  {
    title: "Quick links",
    items: [
      {
        label: "Off-plan homes",
        link: "#off-plan-homes",
      },
      {
        label: "Apex cabins",
        link: "#cabins",
      },
      {
        label: "Contact us",
        link: "#contact",
      },
    ],
  },
  {
    title: "Follow us",
    items: [
      {
        label: "Facebook",
        icon: FacebookLogoIcon,
        link: SOCIAL_LINKS.facebook,
      },
      {
        label: "Instagram",
        icon: InstagramLogoIcon,
        link: SOCIAL_LINKS.instagram,
      },
      {
        label: "TikTok",
        icon: TiktokLogoIcon,
        link: SOCIAL_LINKS.tiktok,
      },
    ],
  },
];
