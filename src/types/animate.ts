import {
  VariantLabels,
  TargetAndTransition,
  Transition as MotionTransition,
} from "motion";

type Animate = VariantLabels | TargetAndTransition;
type Transition = MotionTransition;

export type { Animate, Transition };
