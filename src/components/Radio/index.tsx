"use client";
import { motion } from "motion/react";
import { RadioProps } from "./props.type";
import {
  radioStyle,
  radioBorderStyle,
  radioWrapperLabelStyle,
  radioWrapperStyle,
  radioTextWrapperStyle,
  radioLabelStyle,
  radioDescriptionStyle,
} from "./style";
import { radioAnimation, radioBorderAnimation } from "./animate";

const Radio = ({
  id,
  name,
  value,
  selectedValue,
  handleChange,
  type,
  label,
  description,
}: RadioProps) => {
  const isSelected = value === selectedValue;

  return (
    <div className={radioWrapperStyle({ type })}>
      <label className={radioWrapperLabelStyle()}>
        <input
          id={id}
          type="radio"
          className="sr-only"
          name={name}
          value={value}
          checked={isSelected}
          onChange={handleChange}
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
      <div className={radioTextWrapperStyle()}>
        <label htmlFor={id} className={radioLabelStyle()}>
          {label}
        </label>
        <span className={radioDescriptionStyle()}>{description}</span>
      </div>
    </div>
  );
};

export default Radio;
