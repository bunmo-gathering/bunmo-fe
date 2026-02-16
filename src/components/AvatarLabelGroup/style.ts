import clsx from "clsx";
import { tv } from "tailwind-variants";

const avatarLabelGroupWrapperStyle = tv({
  base: clsx(
    "flex w-full justify-between items-center",
    "transition-all duration-100",
  ),

  variants: {
    isActive: {
      true: "",
      false: "opacity-38",
    },
  },
});

export default avatarLabelGroupWrapperStyle;
