import { Value } from "./PickerContext";

type Gap = "sm" | "lg";

interface PickerProps {
  /**
   * 내부 상태로 관리하는 선택된 값(들)과 외부 변수를 연결하는 함수입니다.
   */
  onSelectedChange?: (selectedValue: Value | Value[]) => void;

  /**
   * 단일 선택/다중 선택을 지정합니다.
   */
  isMulti?: boolean;

  /**
   * Pick 간의 gap을 지정합니다.
   * - "sm": 4px
   * - "lg": 12px
   */
  gap?: Gap;

  /**
   * 초기 선택 값(들)을 지정합니다.
   * - 단일 선택 시 : Value(string | number) 전달
   * - 다중 선택 시 : Value[] 전달
   */
  defaultValue?: Value | Value[];

  /**
   * Picker 내부에 들어가는 Pick 컴포넌트 입니다.
   */
  children?: React.ReactNode;
}

export type { PickerProps };
