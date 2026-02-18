import { tv } from "tailwind-variants";

const avatarLabelWrapperStyle = tv({
  base: "flex items-center w-fit",

  variants: {
    direction: {
      vertical: "gap-2 flex-col",
      horizon: "gap-4 flex-row",
    },

    // compoundVariant 용 빈 값
    size: { sm: "", md: "", lg: "" },
  },

  compoundVariants: [
    { direction: "vertical", size: "sm", class: "w-10" },
    { direction: "vertical", size: "md", class: "w-15" },
    { direction: "vertical", size: "lg", class: "w-20" },
    { direction: "horizon", size: "sm", class: "h-10" },
    { direction: "horizon", size: "md", class: "h-15" },
    { direction: "horizon", size: "lg", class: "h-20" },
  ],
});

const avatarTextWrapper = tv({
  base: "flex flex-col h-full justify-center",

  variants: {
    direction: { vertical: "items-center", horizon: "" },
    size: { sm: "gap-0", md: "gap-1", lg: "gap-1" },
  },
});

const avatarLabelNameStyle = tv({
  variants: {
    size: {
      sm: "text-body1-medium!",
      md: "text-title5-bold!",
      lg: "text-title4-semibold!",
    },

    direction: {
      vertical: "text-caption-regular! text-onSurfaceVariant text-center!",
      horizon: "text-onSurface",
    },
  },
});

export { avatarLabelWrapperStyle, avatarLabelNameStyle, avatarTextWrapper };
