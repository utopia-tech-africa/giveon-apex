import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const faqUtils = [
  {
    question: "What is Giveon Court?",
    answer:
      "Giveon Court is an 8-acre gated estate in Adukrom-Dawu, developed by Alpha Construction & Roofing Works and managed by Giveon Apex. It includes off-plan detached and semi-detached homes, and Apex Cabins — a 5-cabin eco-lodge investment and short-let development.",
  },
  {
    question: 'What does "off-plan" mean?',
    answer:
      "You reserve and purchase your home before construction is complete, at pricing set ahead of the final build.",
  },
  {
    question: "What's the payment process?",
    answer:
      "Payment is staged across the construction period rather than paid in full upfront.",
  },
  {
    question: "What am I actually investing in?",
    answer:
      "Each investment is anchored by real property ownership in the cabins, not just a share of future rental income.",
  },
];
