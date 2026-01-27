import { tv } from "tailwind-variants/lite";

const iconStyle = tv({
  base: "inline-flex shrink-0 relative",

  variants: {
    size: {
      sm: "w-5 h-5",
      md: "w-6 h-6",
      lg: "w-7 h-7",
      auto: "auto",
    },

    color: {
      primary: "text-primary",
      onPrimary: "text-onPrimary",
      onSurface: "text-onSurface",
      secondary: "text-secondary",
    },
  },

  defaultVariants: {
    size: "md",
    color: "onPrimary",
  },
});

export default iconStyle;
