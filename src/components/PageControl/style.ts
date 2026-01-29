import clsx from "clsx";
import { tv } from "tailwind-variants";

const pageControlDotStyle = tv({
  base: clsx(
    "w-2 h-2 rounded-full shrink-0 pointer-events-auto",
    "transition-all duration-300",
  ),
  variants: {
    isSelected: {
      true: "bg-primaryFixedDim",
      false: "bg-primaryFixed",
    },
  },
});

export default pageControlDotStyle;
