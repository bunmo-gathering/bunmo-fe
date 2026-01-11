import { createContext, useContext } from "react";

// Pick의 Value에 들어올 수 있는 타입
type PickValue = string | number;

interface PickerContextData {
  selectedValue: PickValue | PickValue[] | null;
  isMultiSelect: boolean;
  onSelect: (value: PickValue) => void;
}

const PickerContext = createContext<PickerContextData | null>(null);

const usePicker = () => {
  const context = useContext(PickerContext);

  if (!context)
    throw new Error("Pick 컴포넌트는 Picker 안에서 사용되어야 합니다.");

  return context;
};

export { PickerContext, usePicker };
export type { PickValue };
