import { ButtonHTMLAttributes, MouseEvent } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "disabled"
  | "destructive"
  | "border";
type ButtonSize = "sm" | "md" | "lg" | "xl";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;

  children: string;
  type?: ButtonType;

  //HTMLButtonElement
  onTap?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export type { ButtonProps };
