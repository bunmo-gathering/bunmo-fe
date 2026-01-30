import { tv } from "tailwind-variants";

const avatarLabelWrapperStyle = tv({
  base: "flex w-full",

  variants: {
    direction: {
      vertical: "gap-2 flex-col items-center",
      horizon: "gap-6 flex-row items-center",
    },
  },

  defaultVariants: {
    direction: "horizon",
  },
});

const avatarLabelNameStyle = tv({
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

    color: {
      onSurface: "text-onSurface",
      onPrimaryContainer: "text-onPrimaryContainer",
    },
  },

  compoundVariants: [
    {
      direction: "vertical",
      size: "sm",
      class: "text-caption-regular!",
    },

    {
      direction: "vertical",
      size: "md",
      class: "text-caption-regular!",
    },

    {
      direction: "vertical",
      size: "lg",
      class: "text-caption-regular!",
    },
  ],

  defaultVariants: {
    size: "md",
    direction: "vertical",
    color: "onSurface",
  },
});

const avatarLabelDescriptionStyle = tv({
  base: "flex flex-col text-caption-regular",

  variants: {
    direction: {
      vertical: "items-center",
      horizon: "",
    },

    color: {
      onSurface: "text-onSurface",
      onPrimaryContainer: "text-onPrimaryContainer",
    },
  },

  defaultVariants: {
    color: "onSurface",
  },
});

export {
  avatarLabelWrapperStyle,
  avatarLabelNameStyle,
  avatarLabelDescriptionStyle,
};
