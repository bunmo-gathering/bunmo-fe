import { LucideIcon } from "lucide-react";

type IconPosition = "left" | "right";

type ControlTextSize = "sm" | "lg";

interface LeadingControlProps {
  /**
   * 표시할 Lucide 아이콘 컴포넌트
   */
  icon?: LucideIcon;

  /**
   * 아이콘 위치
   * - left: 왼쪽
   * - right: 오른쪽
   */
  iconPosition?: IconPosition;

  /**
   * 텍스트 사이즈의 크기
   * - sm: text-body1-medium
   * - lg: text-title5-bold
   */
  size?: ControlTextSize;

  /**
   * 라벨 텍스트
   */
  label?: string;

  /**
   * 클릭/터치 시 실행될 이벤트 핸들러
   */
  onTap?: () => void;
}

export type { LeadingControlProps };
