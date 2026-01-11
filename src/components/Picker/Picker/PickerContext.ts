import { createContext, useContext } from "react";

// Pick의 Value에 들어올 수 있는 타입
export type Value = string | number | null;

export const PickerContext = createContext<{
  selectedValue: Value | Value[] | null;
  isMulti: boolean;
  onSelect: (val: Value) => void;
} | null>(null);

export const usePicker = () => {
  const context = useContext(PickerContext);
  if (!context)
    throw new Error("Pick 컴포넌트는 Picker 안에서 사용되어야 합니다.");
  return context;
};
