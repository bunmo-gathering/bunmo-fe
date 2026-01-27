import { Animate, Transition } from "@/types/animate";

const iconButtonAnimation = {
  whileHover: {
    scale: 1.05,
  } as Animate,

  whileTap: {
    scale: 0.98,
  } as Animate,

  transition: {
    duration: 0.1,
  } as Transition,
};

export default iconButtonAnimation;
