import ComponentLayout from "./component-layout";
import { cn, faqUtils } from "@/lib/utils";

const Faq = () => {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <ComponentLayout className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-4">
          <p className="font-zodiak text-sm font-light italic leading-[1.2] text-[#f38213] md:text-base">
            FAQ&apos;s
          </p>
          <h2 className="max-w-[404px] font-zodiak text-[32px] italic leading-[1.2] text-white capitalize md:text-[50px]">
            Your Questions,
            <br />
            Answered
          </h2>
        </div>

        <div className="flex w-full flex-col">
          {faqUtils.map((item, index) => (
            <div
              key={item.question}
              className={cn(
                "flex flex-col gap-6 border-[#464646] py-6 capitalize md:flex-row md:items-start md:justify-between md:gap-10",
                index === 0 ? "border-y" : "border-b",
                index === 0
                  ? "md:h-[136px]"
                  : "h-[136px]",
              )}
            >
              <h3 className="shrink-0 font-chillax text-lg font-medium leading-[1.2] text-white md:max-w-[420px] md:text-2xl">
                {item.question}
              </h3>
              <p className="max-w-[736px] font-chillax text-sm leading-[1.2] text-[#d7d7d7] md:text-lg">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </ComponentLayout>
    </section>
  );
};

export default Faq;
