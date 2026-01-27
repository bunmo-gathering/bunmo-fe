import { Animate } from "@/types/animate";

const chipAnimation = {
  whileTap: { scale: 0.95 } as Animate,
  variants: {
    selected: { scale: 1 } as Animate,
    unselected: { scale: 1 } as Animate,
  },
};

export { chipAnimation };
