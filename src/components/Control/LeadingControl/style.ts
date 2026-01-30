import { tv } from "tailwind-variants";

const leadingControlStyle = tv({
  base: "flex w-fit pl-4 py-4 min-w-10 min-h-14",
  variants: {
    isPressable: {
      true: "cursor-pointer",
      false: "",
    },
    contentGap: {
      true: "gap-2",
      false: "",
    },
  },
});

const leadingControlLabelStyle = tv({
  base: "text-onSurface",
  variants: {
    size: {
      sm: "text-body1-medium",
      lg: "text-title5-bold",
    },
  },
});

export { leadingControlStyle, leadingControlLabelStyle };
