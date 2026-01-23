import { tv } from "tailwind-variants";

const labelStyle = tv({
  base: "flex items-center gap-3 text-body2-medium! py-2.5",
  variants: {
    variant: {
      default: "text-onSurfaceVariant",
      destructive: "text-error",
    },

    isPressable: {
      true: "cursor-pointer",
      false: "",
    },

    isBlock: {
      true: "w-fit",
      false: "flex-1",
    },
  },
});

export default labelStyle;
