import { tv } from "tailwind-variants";

const avatarLabelNameStyle = tv({
  variants: {
    size: {
      sm: "text-body1-medium ",
      md: "text-caption-regular ",
      lg: "text-title4-semibold ",
    },

    color: {
      onSurface: "text-onSurface",
      onPrimary: "text-onPrimary",
    },
  },

  defaultVariants: {
    size: "md",
  },
});

const avatarLabelDescriptionStyle = tv({
  base: "text-caption-regular",

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

const avatarLabelWrapperStyle = tv({
  base: "flex",
});
