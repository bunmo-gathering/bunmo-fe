"use client";
import { motion } from "motion/react";
import { RadioProps } from "./props.type";
import { radioStyle, radioBorderStyle, radioWrapperStyle } from "./style";
import { radioAnimation, radioBorderAnimation } from "./animate";

const Radio = ({
  id,
  name,
  value,
  selectedValue,
  onChange,
  type,
  label,
  description,
}: RadioProps) => {
  const isSelected = value === selectedValue;

  return (
    <div className={radioWrapperStyle({ type })}>
      <label className="inline-flex items-center cursor-pointer mt-0.5">
        <input
          id={id}
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
          htmlFor={id}
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
