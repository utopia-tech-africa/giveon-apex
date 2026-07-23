import {
  HeroSection,
  IntroSection,
  LivingsSection,
  OffPlanSection,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <IntroSection />
      <LivingsSection />
      <OffPlanSection />
    </main>
  );
}

