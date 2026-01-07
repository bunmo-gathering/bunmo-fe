import { tv } from "tailwind-variants/lite";

const indicatorStlye = tv({
  base: "rounded-full bg-error absolute right-0",
  variants: {
    size: {
      xs: "hidden",
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
      xl: "size-7",
    },
    position: {
      top: "top-0",
      bottom: "bottom-0",
    },
  },
  defaultVariants: {
    size: "md",
    positon: "bottom",
  },
});

export { indicatorStlye };
