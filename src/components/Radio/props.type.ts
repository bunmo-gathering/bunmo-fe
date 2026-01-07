import { ChangeEvent } from "react";

type Type = "first" | "second";

interface RadioProps {
  /**
   * Radio 요소의 고유 식별자(ID)입니다.
   */
  id: string;

  /**
   * Radio 그룹의 이름입니다. 동일한 name을 가진 Radio끼리 하나의 그룹으로 묶입니다.
   */
  name: string;

  /**
   * Radio 요소가 선택되었을 때 전달될 값입니다.
   */
  value: string;

  /**
   * 현재 그룹에서 선택된 값입니다.
   * 이 값이 `value`와 일치하면 Radio가 활성화(checked) 상태가 됩니다.
   */
  selectedValue?: string;

  /**
   * Radio의 선택 상태가 변경될 때 실행되는 콜백 함수입니다.
   */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Radio 컴포넌트의 들여쓰기 스타일을 결정합니다.
   * - 'first': 기본 들여쓰기가 적용된 타입
   * - 'second': 추가적인 들여쓰기가 적용된 타입
   */
  type: "first" | "second";

  /**
   * 사용자에게 노출될 주요 텍스트 라벨입니다.
   */
  label: string;

  /**
   * 라벨 하단에 추가로 표시되는 상세 설명입니다.
   */
  description?: string;
}

export type { RadioProps };
