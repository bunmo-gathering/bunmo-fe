type Align = "left" | "right";

interface SwitchProps {
  /**
   * 스위치의 초기 온/오프(On/Off) 상태를 결정합니다.
   */
  defalutValue?: boolean;

  /**
   * 스위치의 상태가 변경될 때 실행되는 콜백 함수입니다.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * 스위치 옆에 표시될 주요 라벨 텍스트입니다.
   */
  label?: string;

  /**
   * 스위치에 대한 부가적인 설명 문구입니다. Label 없이 단독으로 사용할 수 없습니다.
   */
  description?: string;

  /**
   * 스위치의 위치를 지정할 수 있는 타입입니다.
   *  - left: 스위치를 왼쪽에 위치시킵니다.
   *  - right: 스위치를 오른쪽에 위치시킵니다.
   */
  align?: Align;
}

export type { SwitchProps };
