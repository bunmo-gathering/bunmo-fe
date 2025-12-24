import React from "react";
import { ButtonProps } from "./props.type";

const Button = (props: ButtonProps) => {
  return <button type="button">{props.label}</button>;
};

export default Button;
