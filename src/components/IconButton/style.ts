import { tv } from "tailwind-variants/lite";

const iconButtonStyle = tv({
  base: "cursor-pointer ",
  variants: {
    variant: {
      primary: "bg-primary",
      secondary: "bg-secondary",
    },
    size: {
      sm: "w-10 h-10 p-2.5 rounded-2xl",
      md: "w-15 h-15 p-4.5 rounded-3xl",
      lg: "w-20 h-20 p-5.5 rounded-4xl",
    },
    iconColor: {
      primary: "text-primary",
      secondary: "text-secondary",
      onPrimary: "text-primary",
      onSurface: "text-onSurface",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
    iconColor: "onSurface",
  },
});

export default iconButtonStyle;
