import Image from "next/image";
import { Logo2 } from "@/assets";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image src={Logo2} alt="Logo" />
    </div>
  );
}
