import { tv } from "tailwind-variants";

const toggleStyle = tv({
  base: "flex items-center w-11 h-6 p-0.5 rounded-xl cursor-pointer transition-colors duration-500",
  variants: {
    activate: {
      true: "bg-primary",
      false: "bg-inversePrimary",
    },
  },
});

export default toggleStyle;
