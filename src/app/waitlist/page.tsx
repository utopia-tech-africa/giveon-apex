import type { Metadata } from "next";
import { WaitlistSection } from "@/components/waitlist";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Join the Apex Cabins waitlist to be among the first to book a short-let stay near Safari Valley Eco Resort in Adukrom-Dawu.",
  alternates: {
    canonical: "/waitlist",
  },
};

export default function WaitlistPage() {
  return (
    <main className="flex flex-1 flex-col">
      <WaitlistSection />
    </main>
  );
}
