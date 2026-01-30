import { tv } from "tailwind-variants";

const dateButtonStyle = tv({
  base: "flex flex-col items-center justify-center w-11 h-11 px-2.5 py-0.5 rounded-2xl shrink-0 snap-center",
  variants: {
    isSelected: {
      true: "bg-primary text-onPrimary",
      false: "bg-transparent text-onSurface",
    },

    isPressable: {
      true: "cursor-pointer",
      false: "",
    },
  },
});

export default dateButtonStyle;
