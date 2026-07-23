export const heroNavLinks = [
  { label: "Off-plan homes", href: "#off-plan-homes" },
  { label: "Cabins", href: "#cabins" },
  { label: "About", href: "#about" },
  { label: "Contact us", href: "#contact" },
] as const;

export const heroLeftNavLinks = heroNavLinks.slice(0, 2);
export const heroRightNavLinks = heroNavLinks.slice(2);
