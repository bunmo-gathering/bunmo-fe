"use client";

import { SwitchProps } from "./props.type";
import { motion } from "motion/react";
import switchStyle from "./style";
import switchAnimation from "./animate";

const Switch = ({ activate, onChange, label, description }: SwitchProps) => {
  if (!label && description) {
    throw new Error("Label 없이 Description 단독으로 사용할 수 없습니다.");
  }
  return (
    <div className="flex items-start gap-3">
      <label>
        <input
          type="checkbox"
          className="sr-only"
          checked={activate}
          onChange={onChange}
        />
        <motion.div className={switchStyle({ activate })}>
          <motion.div
            className="w-5 h-5 bg-white rounded-full shadow-sm"
            layout
            {...switchAnimation(activate)}
          ></motion.div>
        </motion.div>
      </label>
      <div className="flex flex-col gap-1">
        <span className="text-body1-medium text-onSurface">{label}</span>
        <span className="text-caption-regular text-onSurfaceVariant">
          {description}
        </span>
      </div>
    </div>
  );
};

export default Switch;
