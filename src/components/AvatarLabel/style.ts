import { tv } from "tailwind-variants";

const avatarLabelWrapperStyle = tv({
  base: "flex  w-fit h-fit items-center",

  variants: {
    direction: {
      vertical: "gap-2 flex-col ",
      horizon: "gap-6 flex-row",
    },
  },

  defaultVariants: {
    direction: "horizon",
  },
});

const avatarTextWrapper = tv({
  base: "flex flex-col h-full",

  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },

    direction: {
      vertical: "",
      horizon: "",
    },
  },

  compoundVariants: [
    { direction: "horizon", size: "sm", class: "h-10" },

    { direction: "horizon", size: "md", class: "justify-between h-15" },
    {
      direction: "horizon",
      size: "lg",
      class: "h-20 justify-between ",
    },

    { direction: "vertical", class: "items-center" },
  ],
});

const avatarLabelNameStyle = tv({
  variants: {
    size: {
      sm: "text-body1-medium!",
      md: "text-title5-bold!",
      lg: "text-title4-semibold!",
    },

    direction: {
      vertical: "text-caption-regular! text-onSurfaceVariant",
      horizon: "text-onSurface",
    },
  },

  defaultVariants: {
    size: "md",
    direction: "vertical",
  },
});

export { avatarLabelWrapperStyle, avatarLabelNameStyle, avatarTextWrapper };
