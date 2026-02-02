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
};
