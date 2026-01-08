"use client";

import { cloneElement } from "react";
import { IconButtonProps } from "./props.type";
import { motion } from "motion/react";
import icnoButtonStyle from "./style";
import iconButtonAnimation from "./animate";

const IconButton = ({ variant, size, children, onTap }: IconButtonProps) => {
  return (
    <motion.button
      className={icnoButtonStyle({
        variant,
        size,
      })}
      aria-label="icon button"
      onClick={onTap}
      {...iconButtonAnimation}
    >
      {cloneElement(children, { size: "auto" })}
    </motion.button>
  );
};

export default IconButton;
