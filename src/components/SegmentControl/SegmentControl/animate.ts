import { Animate, Transition } from "@/types/animate";

const segmentControlAnimation = {
  animate: {
    opacity: 1,
    x: 0,
  } as Animate,
  transition: {
    type: "spring",
    damping: 25,
    stiffness: 300,
  } as Transition,
};

const segmentControlUnderbarAnimation = {
  initial: false,
  transition: {
    type: "spring",
    duration: 0.3,
  } as Transition,
};

export { segmentControlAnimation, segmentControlUnderbarAnimation };
