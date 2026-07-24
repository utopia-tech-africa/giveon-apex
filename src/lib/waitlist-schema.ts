import { z } from "zod/v3";
import {
  waitlistCountries,
  waitlistPriceRanges,
} from "@/lib/waitlist-options";

export const waitlistSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name"),
  country: z
    .string()
    .min(1, "Please select your country")
    .refine(
      (value) => (waitlistCountries as readonly string[]).includes(value),
      "Please select your country",
    ),
  email: z.string().trim().email("Please enter a valid email address"),
  priceRange: z
    .string()
    .min(1, "Please select a price range")
    .refine(
      (value) => waitlistPriceRanges.some((range) => range.value === value),
      "Please select a price range",
    ),
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;
