import { Animate, Transition } from "@/types/animate";

const switchAnimation = (activate: boolean) => ({
  animate: {
    x: activate ? 20 : 0,
  } as Animate,
  transition: {
    type: "spring",
    stiffness: 500,
    damping: 50,
  } as Transition,
});

export default switchAnimation;
