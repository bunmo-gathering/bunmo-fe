import { tv } from "tailwind-variants";

const pickStyle = tv({
  base: "inline-flex px-3 py-1 text-caption-medium rounded-xl cursor-pointer",
  variants: {
    isSelected: {
      true: "bg-primary text-onPrimary",
      false: "bg-surfaceContainerHighest text-onSurfaceVariant",
    },
  },
});

export default pickStyle;
