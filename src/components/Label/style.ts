import { tv } from "tailwind-variants";

const labelStyle = tv({
  base: "flex items-center w-full gap-3 text-body2-medium! py-2.5 cursor-pointer",
  variants: {
    variant: {
      default: "text-onSurfaceVariant",
      destructive: "text-error",
    },
  },
});

export default labelStyle;
