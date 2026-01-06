import { tv } from "tailwind-variants/lite";

const radioWrapperStyle = tv({
  base: "flex items-start gap-3",
  variants: {
    type: {
      first: "",
      second: "pl-8",
    },
  },
});

const radioWrapperLabelStyle = tv({
  base: "inline-flex items-center cursor-pointer mt-0.5",
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
      true: "bg-onPrimaryContainer",
      false: "",
    },
  },
});

const radioTextWrapperStyle = tv({
  base: "flex flex-col gap-1",
});

const radioLabelStyle = tv({
  base: "text-body1-medium text-onSurface cursor-pointer",
});

const radioDescriptionStyle = tv({
  base: "text-caption-regular text-onSurfaceVariant",
});

export {
  radioWrapperStyle,
  radioWrapperLabelStyle,
  radioBorderStyle,
  radioStyle,
  radioTextWrapperStyle,
  radioLabelStyle,
  radioDescriptionStyle,
};
