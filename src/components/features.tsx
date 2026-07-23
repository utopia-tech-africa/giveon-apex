import ComponentLayout from "./component-layout";
import { featuresUtils } from "@/lib/features";
import { cn } from "@/lib/utils";

const FeatureCard = ({
  title,
  description,
  icon,
  iconAlt,
  className,
}: {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-start justify-center gap-3 rounded-lg border border-[#414141] p-3 lg:w-auto lg:p-6",
        className,
      )}
    >
      <div className="relative size-10 shrink-0 overflow-clip lg:size-[60px]">
        <img
          src={icon}
          alt={iconAlt}
          width={60}
          height={60}
          className="size-full"
        />
      </div>
      <div className="flex w-full flex-col gap-1 lg:max-w-[250px] lg:gap-2">
        <h3 className="font-zodiak text-lg font-light italic leading-[1.2] text-[#f38213] lg:text-2xl">
          {title}
        </h3>
        <p className="font-chillax text-sm leading-[1.2] text-[#d7d7d7] capitalize lg:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  const [smartHomes, security, utilities, lifestyle, services] = featuresUtils;

  return (
    <section id="features" className="py-16 lg:py-24">
      <ComponentLayout className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8 xl:gap-12">
        <p className="max-w-[319px] shrink-0 font-zodiak text-base font-light italic leading-[1.2] text-white lg:text-xl">
          Our mission is to immerse you
          <br />
          in a lifestyle that balances refined aesthetics, architectural
          excellence, and a profound sense of community.
        </p>

        {/* Mobile: 2x2 + full-width Services */}
        <div className="flex w-full flex-col gap-3.5 lg:hidden">
          <div className="grid grid-cols-2 gap-3">
            <FeatureCard {...smartHomes} />
            <FeatureCard {...security} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FeatureCard {...lifestyle} />
            <FeatureCard {...utilities} />
          </div>
          <FeatureCard {...services} />
        </div>

        {/* Desktop: 3 + 2 staggered */}
        <div className="hidden w-full flex-col items-end gap-[38px] lg:flex lg:max-w-[970px] lg:shrink-0">
          <div className="flex w-full items-center gap-[38px]">
            <FeatureCard {...smartHomes} />
            <FeatureCard {...security} />
            <FeatureCard {...utilities} />
          </div>
          <div className="flex items-center gap-[38px]">
            <FeatureCard {...lifestyle} />
            <FeatureCard {...services} />
          </div>
        </div>
      </ComponentLayout>
    </section>
  );
};

export default Features;
