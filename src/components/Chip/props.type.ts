import { LucideIcon } from "lucide-react";

interface ChipProps {
  /**
   * Chip 내부에 표시할 텍스트입니다.
   */
  children: string;

  /**
   * Chip 좌측에 표시할 아이콘입니다.
   */
  icon?: LucideIcon;

  /**
   * 초기 선택 여부를 설정하는 값입니다. (기본적으로 false)
   */
  defaultValue?: boolean;

  /**
   * 선택 여부가 변경될 시 실행되는 함수입니다.
   */
  onChange?: (isSelected: boolean) => void;
}

export type { ChipProps };
