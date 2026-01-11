import { ReactNode } from "react";
import { PickValue } from "./PickerContext";

type Gap = "sm" | "lg";

interface PickerProps {
  /**
   * 내부 상태로 관리하는 선택된 값(들)과 외부 변수를 연결하는 함수입니다.
   */
  onSelectedChange?: (selectedValue: PickValue | PickValue[] | null) => void;

  /**
   * 단일 선택/다중 선택을 지정합니다.
   */
  isMultiSelect?: boolean;

  /**
   * Pick 간의 gap을 지정합니다.
   * - "sm": 4px
   * - "lg": 12px
   */
  gap?: Gap;

  /**
   * 초기 선택 값(들)을 지정합니다.
   * - 단일 선택 시 : PickValue(string | number) 전달
   * - 다중 선택 시 : PickValue[] 전달
   */
  defaultValue?: PickValue | PickValue[];

  /**
   * Picker 내부에 들어가는 Pick 컴포넌트 입니다.
   */
  children?: ReactNode;
}

export type { PickerProps };
