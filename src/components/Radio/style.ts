import { tv } from "tailwind-variants/lite";

const labelStyle = tv({
  base: "inline-flex items-center cursor-pointer",
});

const radioBorderStyle = tv({
  base: "flex items-center justify-center w-5 h-5 rounded-full border-1 border-outline",
  variants: {
    isSelected: {
      true: "bg-primaryContainer",
      false: "bg-transparent",
    },
  },
  defaultVariants: {
    isSelected: false,
  },
});

const radioStyle = tv({
  base: "w-2 h-2 rounded-full",
  variants: {
    isSelected: {
      true: "bg-onPrimary",
      false: "",
    },
  },
});

export { labelStyle, radioBorderStyle, radioStyle };
