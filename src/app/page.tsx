import Faq from "@/components/faq";
import Prefooter from "@/components/prefooter";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Faq />
      <Prefooter />
    </main>
  );
}
