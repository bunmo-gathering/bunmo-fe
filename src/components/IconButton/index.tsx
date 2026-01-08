"use client";

import { cloneElement, isValidElement } from "react";
import { IconButtonProps } from "./props.type";
import { motion } from "motion/react";
import icnoButtonStyle from "./style";
import iconButtonAnimation from "./animate";

const IconButton = ({ variant, size, children, onTap }: IconButtonProps) => {
  if (typeof children !== typeof LucideIcon)
    throw new Error(
      "IconButton 컴포넌트는 Lucide Icon만 자식으로 가질 수 있습니다.",
    );
  return (
    <motion.button
      className={icnoButtonStyle({
        variant,
        size,
      })}
      onClick={onTap}
      {...iconButtonAnimation}
    >
      {cloneElement(children, { size: "auto" })}
    </motion.button>
  );
};

export default IconButton;
