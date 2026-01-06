import { tv } from "tailwind-variants";

const buttonGroupProviderStyle = tv({
  base: "flex gap-3",

  variants: {
    type: {
      normal: "",
      action: "w-full pb-9 pt-3 px-4",
    },
    stroke: { true: "border-t border-outlineVariant", false: "" },
  },

  defaultVariants: {
    type: "normal",
  },
});

export default buttonGroupProviderStyle;
