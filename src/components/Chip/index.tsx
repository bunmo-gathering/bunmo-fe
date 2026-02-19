"use client";
import { motion } from "motion/react";
import chipStyle from "./style";
import { chipAnimation } from "./animate";
import type { ChipProps } from "./props.type";

const Chip = ({
  value,
  defaultValue,
  icon: Icon,
  iconPosition = "right",
  onTap,
}: ChipProps) => {
  const isActive = value ? value !== defaultValue : false;

  return (
    <motion.button
      type="button"
      className={chipStyle({ isActive })}
      initial={false}
      whileTap={chipAnimation.whileTap}
      aria-pressed={isActive}
      onClick={onTap}
    >
      {/* 왼쪽 아이콘 */}
      {Icon && iconPosition === "left" && <Icon size={16} />}

      {/* Chip 텍스트 */}
      <span className="text-body2-medium whitespace-nowrap">
        {isActive ? value : defaultValue}
      </span>

      {/* 오른쪽 아이콘 */}
      {Icon && iconPosition === "right" && <Icon size={16} />}
    </motion.button>
  );
};

export default Chip;
