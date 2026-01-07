"use client";
import { motion } from "motion/react";
import { RadioProps } from "./props.type";
import { radioStyle, radioBorderStyle, radioWrapperStyle } from "./style";
import { radioAnimation, radioBorderAnimation } from "./animate";

const Radio = ({
  name,
  value,
  selectedValue,
  onChange,
  indent = false,
  label,
  description,
}: RadioProps) => {
  const isSelected = value === selectedValue;

  if (!label && description) {
    throw new Error("Label 없이 Description 단독으로 사용할 수 없습니다.");
  }

  return (
    <div className={radioWrapperStyle({ indent })}>
      <label className="inline-flex items-center cursor-pointer mt-0.5">
        <input
          id={value}
          type="radio"
          className="sr-only"
          name={name}
          value={value}
          checked={isSelected}
          onChange={onChange}
        />

        {/* 바깥쪽 원 */}
        <motion.div
          className={radioBorderStyle({ isSelected })}
          initial={false}
          {...radioBorderAnimation}
        >
          {/* 안쪽 점 */}
          <motion.div
            className={radioStyle({ isSelected })}
            initial={false}
            animate={isSelected ? "selected" : "unselected"}
            {...radioAnimation}
          />
        </motion.div>
      </label>
      <div className="flex flex-col gap-1">
        <label
          htmlFor={value}
          className="text-body1-medium text-onSurface cursor-pointer"
        >
          {label}
        </label>
        <span className="text-caption-regular text-onSurfaceVariant">
          {description}
        </span>
      </div>
    </div>
  );
};

export default Radio;
