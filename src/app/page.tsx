import Faq from "@/components/faq";
import Prefooter from "@/components/prefooter";
import { HeroSection } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <Faq />
      <Prefooter />
  </main>
  );
}
