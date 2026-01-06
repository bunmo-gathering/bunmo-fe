"use client";
import { motion } from "motion/react";
import { RadioProps } from "./props.type";
import { radioStyle, radioBorderStyle, labelStyle } from "./style";
import radioAnimation from "./animate";

const Radio = ({ name, value, selectedValue, handleChange }: RadioProps) => {
  const isSelected = value === selectedValue;

  return (
    <label className={labelStyle()}>
      <input
        type="radio"
        className="sr-only"
        name={name}
        value={value}
        checked={isSelected}
        onChange={handleChange}
      />

      {/* 바깥쪽 원 */}
      <motion.div className={radioBorderStyle({ isSelected })}>
        {/* 안쪽 점 */}
        <motion.div
          className={radioStyle({ isSelected })}
          initial={false}
          animate={isSelected ? "selected" : "unselected"}
          {...radioAnimation}
        />
      </motion.div>
    </label>
  );
};

export default Radio;
