import { tv } from "tailwind-variants/lite";

const chipStyle = tv({
  base: "inline-flex items-center gap-2 px-3 h-7 rounded-full cursor-pointer select-none transition-colors ring-1 ring-inset",

  variants: {
    variant: {
      default: "bg-surface ring-outline text-onSurface",
      selected: "bg-primaryContainer text-onPrimaryContainer ring-outline",
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

export default chipStyle;
