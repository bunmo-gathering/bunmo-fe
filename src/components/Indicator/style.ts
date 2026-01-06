import { tv } from "tailwind-variants/lite";

const indicatorStlye = tv({
  base: "rounded-full bg-error absolute bottom-0 right-0",
  variants: {
    size: {
      xs: "hidden",
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
      xl: "size-7",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export { indicatorStlye };
