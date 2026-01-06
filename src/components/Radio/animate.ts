import { Animate } from "@/types/animate";

const radioAnimation = {
  whileTap: {
    scale: 0.95,
  } as Animate,
  variants: {
    selected: { scale: 1 },
    unselected: { scale: 0 },
  },
};

const radioBorderAnimation = {
  whileTap: {
    scale: 0.95,
  } as Animate,
};

export { radioAnimation, radioBorderAnimation };
