import { tv } from "tailwind-variants";

const avatarLabelWrapperStyle = tv({
  base: "flex w-fit",

  variants: {
    direction: {
      vertical: "gap-6 items-center",
      horizon: "gap-1 flex-col justify-center items-center",
    },
  },

  defaultVariants: {
    direction: "vertical",
  },
});

const avatarLabelNameStyle = tv({
  variants: {
    size: {
      sm: "text-body1-medium!",
      md: "text-caption-regular!",
      lg: "text-title4-semibold!",
    },

    direction: {
      vertical: "",
      horizon: "text-caption-regular!",
    },

    color: {
      onSurface: "text-onSurface",
      onPrimary: "text-onPrimary",
    },
  },

  /**
   * horizon일 때 size 무조건 무시
   */
  compoundVariants: [
    {
      direction: "horizon",
      size: "sm",
      class: "text-caption-regular!",
    },
    {
      direction: "horizon",
      size: "md",
      class: "text-caption-regular!",
    },
    {
      direction: "horizon",
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
  base: "text-caption-regular!",

  variants: {
    color: {
      onSurface: "text-onSurface",
      onPrimary: "text-onPrimary",
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
