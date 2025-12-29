import { tv } from "tailwind-variants/lite";

const buttonStyle = tv({
  base: "rounded-lg",
  variants: {
    variant: {
      primary: "bg-primary text-onPrimary",
      secondary: "bg-secondary text-onSecondary",
      disabled: "bg-surfaceContainer text-onSurface",
      destructive: "bg-error text-onError",
      border: "bg-surface border border-outline text-onSurface",
    },
    size: {
      sm: "text-body2-medium px-3.5 py-2",
      md: "text-body1-bold px-4.5 py-2.5",
      lg: "text-title5-bold px-4.5 py-3",
      xl: "text-title4-semibold px-7 py-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export default buttonStyle;
