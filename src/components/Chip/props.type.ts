import { MouseEvent } from "react";

type ChipVariant = "default" | "selected";

interface ChipProps {
  /**
   * Chip 내부에 표시될 텍스트입니다.
   */
  text: string;

  /**
   * Chip의 스타일 변형(variant)입니다.
   * - `default` : 기본 상태
	 * - `selected` : 선택된 상태
   */
  variant?: ChipVariant;

  /**
   * 더보기(kebab) 아이콘 표시 여부입니다.
   * true일 경우 칩 우측에 더보기 버튼이 표시됩니다.
   * @default false
   */
  more?: boolean;

  /**
   * 닫기(X) 아이콘 표시 여부입니다.
   * true일 경우 칩 우측에 닫기 버튼이 표시됩니다.
   * variant가 'selected'일 경우 기본값은 true이며, 그 외에는 false입니다.
   */
  close?: boolean;

  /**
   * Chip 전체를 클릭했을 때 실행되는 콜백 함수입니다.
   * 주로 Chip을 'selected' 상태로 변경(활성화)할 때 사용합니다.
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;

  /**
   * 더보기 아이콘을 클릭했을 때 실행되는 콜백 함수입니다.
   */
  onMore?: () => void;

  /**
   * 닫기 아이콘을 클릭했을 때 실행되는 콜백 함수입니다.
   * 주로 Chip을 'default' 상태로 되돌리거나(비활성화), 목록에서 제거할 때 사용합니다.
   */
  onClose?: () => void;

  /**
   * 추가적인 CSS 클래스입니다.
   */
  className?: string;
}

export type { ChipProps };
