import { tv } from "tailwind-variants";

const avatarLabelWrapperStyle = tv({
  base: "flex justify-center items-center w-fit h-fit",

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

    {
      direction: "horizon",
      size: "lg",
      class: "h-20 justify-between ",
    },

    { direction: "vertical", class: "items-center" },
  ],
});

const avatarLabelNameStyle = tv({
  base: "text-onSurface",

  variants: {
    size: {
      sm: "text-body1-medium!",
      md: "",
      lg: "text-title4-semibold!",
    },

    direction: {
      vertical: "text-caption-regular!",
      horizon: "",
    },
  },

  compoundVariants: [
    {
      direction: "vertical",
      class: "text-caption-regular!",
    },
  ],

  defaultVariants: {
    size: "md",
    direction: "vertical",
  },
});

const avatarLabelDescriptionStyle = tv({
  base: "flex flex-col text-caption-regular text-onSurfaceVariant justify-center",

  variants: {
    direction: {
      vertical: "justify-center",
      horizon: "justify-center",
    },
  },
});

export {
  avatarLabelWrapperStyle,
  avatarLabelNameStyle,
  avatarLabelDescriptionStyle,
  avatarTextWrapper,
};
