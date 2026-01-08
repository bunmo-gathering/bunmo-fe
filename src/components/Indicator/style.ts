import { tv } from "tailwind-variants/lite";

const indicatorStlye = tv({
  base: "rounded-full bg-error absolute",

  variants: {
    size: {
      xs: "hidden",
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
      xl: "size-7",
    },

    position: {
      "top-right": "top-0  right-0",
      "top-left": "top-0 left-0",
      "bottom-right": "bottom-0  right-0",
      "bottom-left": "bottom-0 left-0",
    },
  },

  defaultVariants: {
    size: "md",
    positon: "bottom-right",
  },
});

export { indicatorStlye };
