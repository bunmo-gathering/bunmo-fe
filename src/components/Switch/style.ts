import clsx from "clsx";
import { tv } from "tailwind-variants";

const wrapperStyle = tv({
  base: "flex items-start gap-3 w-full",
  variants: {
    align: {
      left: "",
      right: "flex-row-reverse",
    },
  },
});

const switchStyle = tv({
  base: clsx(
    // style
    "flex items-center w-11 h-6 p-0.5 rounded-xl cursor-pointer",
    // animation
    "transition-colors duration-500",
  ),
  variants: {
    isChecked: {
      true: "bg-primary",
      false: "bg-inversePrimary",
    },
  },
});

export { wrapperStyle, switchStyle };
