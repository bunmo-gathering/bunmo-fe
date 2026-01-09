import { MouseEvent, ReactElement } from "react";
import { LucideProps } from "lucide-react";

type IconButtonVariant = "primary" | "secondary";
type IconButtonSize = "sm" | "md" | "lg";

interface IconButtonProps {
  /**
   * IconButton의 배경 색상을 설정
   * default : 'primary'
   */
  variant?: IconButtonVariant;

  /**
   * IconButton의 크기를 설정
   * default: 'md'
   */
  size?: IconButtonSize;

  /**
   * IconButton 컴포넌트의 자식으로 들어오는 항목
   * ex) LucideIcon  | SVG
   */
  children: ReactElement<LucideProps>;

  /**
   * HTMLButtonElement
   */
  onTap?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export type { IconButtonProps, IconButtonSize };
