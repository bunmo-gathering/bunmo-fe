import { tv } from "tailwind-variants/lite";

const titleContainerStyle = tv({
  base: "flex flex-1",
  variants: {
    direction: {
      vertical: "flex-col",
      horizon: "justify-between items-center",
      center: "flex-col items-center",
    },
    size: {
      sm: "gap-1",
      md: "gap-1",
      lg: "gap-2",
    },
  },
  defaultVariants: {
    direction: "vertical",
    size: "md",
  },
});

const titleStyle = tv({
  base: "flex",
  variants: {
    size: {
      sm: "text-body1-bold",
      md: "text-title5-bold",
      lg: "text-title4-semibold",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const subtitleStyle = tv({
  variants: {
    size: {
      sm: "text-body2-medium",
      md: "text-body2-medium",
      lg: "text-body2-medium",
    },
    color: {
      primary: "text-primary",
      gray: "text-[#667085]",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export { titleStyle, titleContainerStyle, subtitleStyle };
