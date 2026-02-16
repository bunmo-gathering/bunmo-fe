import { tv } from "tailwind-variants/lite";

const avatarStyle = tv({
  base: "flex items-center justify-center bg-outlineVariant overflow-hidden relative text-onSurface",

  variants: {
    size: {
      xs: "rounded-full size-6 border border-outline p-1",
      sm: "size-10 rounded-2xl p-2",
      md: "size-15 rounded-3xl p-3",
      lg: "size-20 rounded-4xl p-4",
      xl: "size-25 rounded-full p-5",
    },

    hasImage: {
      true: "p-0!",
      false: "",
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export { avatarStyle };
