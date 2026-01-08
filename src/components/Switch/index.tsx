"use client";

import { useState } from "react";
import { SwitchProps } from "./props.type";
import { motion } from "motion/react";
import { wrapperStyle, switchStyle } from "./style";
import switchAnimation from "./animate";

const Switch = ({
  initValue = false,
  onChange,
  label,
  description,
  align = "right",
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(initValue);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);

    // 외부에서 onChange를 넘겨줬을 때만 실행
    if (onChange) {
      onChange(e);
    }
  };

  if (!label && description) {
    throw new Error("Label 없이 Description 단독으로 사용할 수 없습니다.");
  }

  return (
    <div className={wrapperStyle({ align })}>
      <label>
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />

        <motion.div className={switchStyle({ isChecked })}>
          <motion.div
            className="w-5 h-5 bg-white rounded-full shadow-sm"
            layout
            {...switchAnimation(isChecked)}
          ></motion.div>
        </motion.div>
      </label>

      <div className="flex flex-col gap-1 flex-1">
        <span className="text-body1-medium text-onSurface">{label}</span>
        <span className="text-caption-regular text-onSurfaceVariant">
          {description}
        </span>
      </div>
    </div>
  );
};

export default Switch;
