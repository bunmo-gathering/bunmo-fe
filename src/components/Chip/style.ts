import { tv } from "tailwind-variants/lite";

const chipStyle = tv({
  base: "inline-flex items-center gap-2 px-2.5 py-0.5 h-7 rounded-xl cursor-pointer select-none transition-colors ring-1 ring-inset whitespace-nowrap",

  variants: {
    isActive: {
      true: "bg-primaryContainer text-onPrimaryContainer ring-outline",
      false: "bg-surface ring-outline text-onSurface",
    },
  },
});

export default chipStyle;
