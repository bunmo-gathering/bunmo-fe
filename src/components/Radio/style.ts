import { tv } from "tailwind-variants/lite";

const radioWrapperStyle = tv({
  base: "flex items-start gap-3",
  variants: {
    indent: {
      false: "",
      true: "pl-8",
    },
  },
});

const radioBorderStyle = tv({
  base: "flex items-center justify-center w-5 h-5 rounded-full border border-outline",
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
      true: "bg-onPrimaryContainer",
      false: "",
    },
  },
});

export { radioWrapperStyle, radioBorderStyle, radioStyle };
