import { z } from "zod/v3";

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number"),
  message: z
    .string()
    .trim()
    .min(10, "Please share a bit more about what you need"),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
