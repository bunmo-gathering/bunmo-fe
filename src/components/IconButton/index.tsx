"use client";

import { cloneElement, isValidElement } from "react";
import { IconButtonProps } from "./props.type";
import { motion } from "motion/react";
import icnoButtonStyle from "./style";
import iconButtonAnimation from "./animate";
import { LucideType } from "lucide-react";

const IconButton = ({ variant, size, children, onTap }: IconButtonProps) => {
  if (isValidElement(children)) {
    if (typeof children.type !== typeof LucideType)
      throw new Error(
        "IconButton의 자식은 LucideIcon 컴포넌트 외 사용할 수 없습니다.",
      );
  }

  return (
    <motion.button
      className={icnoButtonStyle({
        variant,
        size,
      })}
      aria-label="Button"
      onClick={onTap}
      {...iconButtonAnimation}
    >
      {cloneElement(children, { size: "size-full" })}
    </motion.button>
  );
};

export default IconButton;
