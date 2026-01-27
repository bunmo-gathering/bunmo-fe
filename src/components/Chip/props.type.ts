import { ReactNode, MouseEvent } from "react";

type ChipVariant = "default" | "selected";

/**
 * Chip 왼쪽에 표시될 아이콘의 타입입니다.
 * 새로운 아이콘을 추가할 때는 이 타입을 확장하고,
 * index.tsx의 iconMap에 대응하는 아이콘을 추가하세요.
 */
type ChipIconType = "plus" | "check";

/**
 * Chip 우측에 표시될 액션 아이콘의 타입입니다.
 * - `more` - 더보기(kebab) 버튼
 * - `close` - 닫기(X) 버튼
 */
type ChipRightActionType = "more" | "close";

interface ChipProps {
  /**
   * Chip 내부에 표시될 텍스트입니다.
   */
  text: string;

  /**
   * Chip의 스타일 변형(variant)입니다.
   * - `default` - 기본 상태
   * - `selected` - 선택된 상태
   * @default "default" -
   */
  variant?: ChipVariant;

  /**
   * Chip 왼쪽에 표시될 아이콘입니다.
   * 직접 lucide 아이콘을 전달할 수도 있고,
   * ChipIconType을 문자열로 전달하면 미리 정의된 아이콘이 사용됩니다.
   * @example
   * // 직접 아이콘 전달
   * <Chip icon={<Plus size={20} />} text="Add" />
   * // 또는 타입 사용
   * <Chip icon="plus" text="Add" />
   * @default - -
   */
  icon?: ReactNode | ChipIconType;

  /**
   * Chip 우측에 표시될 액션 아이콘입니다.
   * - `more` - 더보기(kebab) 버튼을 표시합니다. onMore 콜백이 실행됩니다.
   * - `close` - 닫기(X) 버튼을 표시합니다. onClose 콜백이 실행됩니다.
   * - 명시하지 않으면 variant가 'selected'일 경우 기본적으로 'close'가 표시됩니다.
   * @default - -
   */
  rightAction?: ChipRightActionType;

  /**
   * Chip 전체를 클릭했을 때 실행되는 콜백 함수입니다.
   * 주로 Chip을 'selected' 상태로 변경(활성화)할 때 사용합니다.
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;

  /**
   * 우측 액션 아이콘을 클릭했을 때 실행되는 콜백 함수입니다.
   * 클릭된 액션의 타입(more 또는 close)을 파라미터로 전달받습니다.
   * @example
   * <Chip rightAction="more" onRightActionClick={(action) => {
   *   if (action === "more") {
   *     // 더보기 로직
   *   } else if (action === "close") {
   *     // 닫기 로직
   *   }
   * }} />
   */
  onRightActionClick?: (action: ChipRightActionType) => void;

  /**
   * 추가적인 CSS 클래스입니다.
   */
  className?: string;
}

export type { ChipProps, ChipIconType, ChipRightActionType };
