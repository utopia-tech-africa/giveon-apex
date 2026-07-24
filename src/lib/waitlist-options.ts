export const waitlistPriceRanges = [
  {
    value: "1500-2500-ghs",
    label: "GHS 1,500 – 2,500 (~$125 – $208) / night",
  },
  {
    value: "2500-3500-ghs",
    label: "GHS 2,500 – 3,500 (~$208 – $292) / night",
  },
] as const;

export type WaitlistPriceRange =
  (typeof waitlistPriceRanges)[number]["value"];

export const waitlistCountries = [
  "Ghana",
  "Nigeria",
  "Kenya",
  "South Africa",
  "United Kingdom",
  "United States",
  "Canada",
  "Germany",
  "Netherlands",
  "France",
  "United Arab Emirates",
  "Australia",
  "Other",
] as const;

export type WaitlistCountry = (typeof waitlistCountries)[number];

export function getWaitlistPriceLabel(value: string) {
  return (
    waitlistPriceRanges.find((range) => range.value === value)?.label ?? value
  );
}
