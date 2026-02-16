import { tv } from "tailwind-variants";

const pickerStyle = tv({
  base: "flex",

  variants: {
    gap: {
      sm: "gap-1",
      lg: "gap-3",
    },

    wrap: {
      true: "flex-wrap",
      false: "overflow-x-scroll scrollbar-hide",
    },
  },
});

export default pickerStyle;
