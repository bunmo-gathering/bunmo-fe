import { MouseEvent, ReactElement } from "react";
import { LucideProps } from "lucide-react";

type IconButtonVariant = "primary" | "secondary";
type IconButtonSize = "sm" | "md" | "lg";

interface IconButtonProps {
  /**
   * 컴포넌트 스타일 설정
   */
  variant?: IconButtonVariant;
  /**
   * 컴포넌트 크기 설정
   */
  size?: IconButtonSize;
  /**
   * 컴포넌트의 자식 요소
   * - `LucideIcon` 컴포넌트를 children으로 받음
   */
  children: ReactElement<LucideProps>;
  /**
   * 컴포넌트 클릭 시 실행되는 함수
   */
  onTap?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export type { IconButtonProps };
