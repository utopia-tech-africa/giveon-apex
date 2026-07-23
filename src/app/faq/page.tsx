import type { Metadata } from "next";
import Faq from "@/components/faq";
import Prefooter from "@/components/prefooter";

export const metadata: Metadata = {
  title: "FAQ's | Giveon Apex",
  description:
    "Answers to common questions about Giveon Court, off-plan homes, payments, and Apex Cabins investments.",
};

export default function FaqPage() {
  return (
    <main className="flex flex-1 flex-col">
      <Faq />
      <Prefooter />
    </main>
  );
}
