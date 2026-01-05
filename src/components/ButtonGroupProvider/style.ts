import { tv } from "tailwind-variants";

const buttonGroupProviderStyle = tv({
  base: "flex gap-3",

  variants: {
    type: {
      normal: "",
      action: "w-full",
    },
  },

  defaultVariants: {
    type: "normal",
  },
});

export default buttonGroupProviderStyle;
