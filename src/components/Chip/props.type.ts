import { LucideIcon } from "lucide-react";
import { MouseEvent } from "react";

type IconPosition = "left" | "right";

interface ChipProps {
  /**
   * 현재 값과 비교할 디폴트 값입니다. 현재 값과 같은 경우 inactive 상태가 됩니다.
   */
  defaultValue: string;

  /**
   * 현재 선택된 값입니다.
   */
  value?: string;

  /**
   * Chip에 표시할 아이콘입니다.
   */
  icon?: LucideIcon;

  /**
   * Chip에 표시할 아이콘의 위치입니다.
   * - left: 왼쪽
   * - right: 오른쪽
   */
  iconPosition?: IconPosition;

  /**
   * 클릭 시 실행되는 콜백 함수입니다.
   */
  onTap?: () => void;
}

export type { ChipProps };
