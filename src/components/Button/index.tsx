"use client";

import buttonAnimation from "./animate";
import { ButtonProps } from "./props.type";
import { motion } from "motion/react";
import buttonStyle from "./style";

const Button = ({
  variant,
  size,
  children,
  onTap,
  type = "button",
}: ButtonProps) => {
  return (
    <motion.button
      type={type}
      className={buttonStyle({
        variant,
        size,
      })}
      onClick={onTap}
      {...buttonAnimation}
    >
      {children}
    </motion.button>
  );
};

export default Button;
