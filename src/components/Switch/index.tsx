"use client";

import { useState } from "react";
import { SwitchProps } from "./props.type";
import { motion } from "motion/react";
import { wrapperStyle, switchStyle } from "./style";
import switchAnimation from "./animate";

const Switch = ({
  defalutValue = false,
  onChange,
  label,
  description,
  align = "right",
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(defalutValue);

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
          readOnly={!onChange}
          checked={isChecked}
          onChange={handleToggle}
        />

        <motion.div className={switchStyle({ isChecked })}>
          <motion.div
            className="w-5 h-5 bg-white rounded-full shadow-sm"
            layout
            {...switchAnimation(isChecked)}
          />
        </motion.div>
      </label>

      <div className="flex flex-col gap-1 flex-1">
        {/* 스위치 옆에 표시될 메인 라벨 텍스트 */}
        <span className="text-body1-medium text-onSurface">{label}</span>
        {/* 스위치에 대한 부가적인 설명 문구 */}
        <span className="text-caption-regular text-onSurfaceVariant">
          {description}
        </span>
      </div>
    </div>
  );
};

export default Switch;
