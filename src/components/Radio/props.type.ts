import { ChangeEvent } from "react";

interface RadioProps {
  /**
   * Radio 그룹의 이름입니다. 동일한 name을 가진 Radio끼리 하나의 그룹으로 묶입니다.
   */
  name: string;

  /**
   * Radio 요소가 나타내는 고유한 값입니다.
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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Radio 컴포넌트의 들여쓰기 여부를 결정합니다.
   */
  indent?: boolean;

  /**
   * 사용자에게 노출될 주요 텍스트 라벨입니다. 클릭 시 해당 라디오 요소가 선택됩니다.
   */
  label: string;

  /**
   * 라벨 하단에 추가로 표시되는 상세 설명입니다.
   */
  description?: string;
}

export type { RadioProps };
