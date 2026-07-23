import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const ComponentLayout = ({ children, className, id }: Props) => {
  return (
    <section
      id={id}
      className={cn("w-full px-4 md:px-10 lg:px-15 mx-auto", className)}>
      {children}
    </section>
  );
};

export default ComponentLayout;
