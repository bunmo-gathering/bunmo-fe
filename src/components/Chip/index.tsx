"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { XIcon } from "lucide-react";
import chipStyle from "./style";
import { chipAnimation } from "./animate";
import type { ChipProps } from "./props.type";

const Chip = ({
  children,
  icon: Icon,
  defaultValue = false,
  onChange,
}: ChipProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(defaultValue);

  const handleTap = () => {
    const nextValue = !isSelected;
    setIsSelected(nextValue);
    if (onChange) {
      onChange(nextValue);
    }
  };

  return (
    <motion.button
      type="button"
      className={chipStyle({ isSelected })}
      initial={false}
      whileTap={chipAnimation.whileTap}
      aria-pressed={isSelected}
      onClick={handleTap}
    >
      {/* 왼쪽 아이콘 */}
      {Icon && <Icon size={20} />}

      <span className="text-body2-medium">{children}</span>

      {/* 우측 아이콘 */}
      {isSelected && <XIcon size={14} />}
    </motion.button>
  );
};

export default Chip;
