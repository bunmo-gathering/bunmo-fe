import { LucideIcon } from "lucide-react";

type IconColor = "primary" | "onPrimary" | "onSurface" | "secondary";
type IconSize = "sm" | "md" | "lg" | "auto";

interface IconProps {
  /**
   * Icon 컴포넌트 Props로 LucideIcon 사용
   */
  icon: LucideIcon;

  /**
   * Icon 컴포넌트의 크기를 조정
   * default : 'md'
   */
  size?: IconSize;

  /**
   * 루시드 아이콘의 색상을 조정
   * default: 'onPrimary'
   */
  color?: IconColor;

  /**
   * 루시드 아이콘의 선의 굵기를 조정
   */
  strokeWidth?: number;

  /**
   * 아이콘 컴포넌트의 인디케이터가 붙는지 판단하는 props
   */
  hasIndicator?: boolean;
}

export default IconProps;
