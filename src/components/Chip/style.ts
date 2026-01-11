import { tv } from "tailwind-variants/lite";

const chipStyle = tv({
  base: "inline-flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer select-none transition-colors",
  variants: {
    variant: {
      default: "bg-surface border border-outline text-onSurface",
      selected:
        "bg-primaryContainer text-onPrimaryContainer border border-outline",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default chipStyle;
