import { Animate, Transition } from "@/types/animate";

const switchAnimation = (isChecked: boolean) => ({
  animate: {
    x: isChecked ? 20 : 0,
  } as Animate,

  transition: {
    type: "spring",
    duration: 0.25,
  } as Transition,
});

export default switchAnimation;
