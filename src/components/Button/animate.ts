import { Animate, Transition } from "@/types/animate";
import { TargetAndTransition, VariantLabels } from "motion/react";

const buttonAnimation = {
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

export default buttonAnimation;
