import { MouseEvent, ReactElement } from "react";
import { LucideProps } from "lucide-react";

type IconButtonVariant = "primary" | "secondary";
type IconButtonSize = "sm" | "md" | "lg";

interface IconButtonProps {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  children: ReactElement<LucideProps>;
  onTap?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export type { IconButtonProps, IconButtonSize };
