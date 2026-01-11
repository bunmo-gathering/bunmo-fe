import { tv } from "tailwind-variants";

const pickerStyle = tv({
  base: "flex flex-wrap",
  variants: {
    gap: {
      sm: "gap-1",
      lg: "gap-3",
    },
  },
});

export default pickerStyle;
