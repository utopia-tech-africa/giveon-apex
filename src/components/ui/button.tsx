import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center cursor-pointer justify-center rounded-lg border border-transparent bg-clip-padding font-chillax whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-3 focus-visible:ring-[#e38837]/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-[#e38837] bg-transparent text-white hover:bg-[#f38213] hover:border-[#f38213]",
        filled:
          "border-[#f38213] bg-[#f38213] text-white hover:bg-[#e38837] hover:border-[#e38837]",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",
        ghost: "hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-white underline-offset-4 hover:text-[#f38213] hover:underline",
      },
      size: {
        default: "px-6 py-3 text-lg leading-[1.2]",
        sm: "px-4 py-2 text-sm leading-[1.2]",
        lg: "px-8 py-3.5 text-lg leading-[1.2]",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
