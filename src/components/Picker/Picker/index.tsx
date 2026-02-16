import { Children, isValidElement, useState } from "react";
import { PickerProps } from "./props.type";
import pickerStyle from "./style";
import Pick from "../Pick/Pick";
import { PickerContext, PickValue } from "./PickerContext";

const Picker = ({
  onSelectedChange,
  isMultiSelect = false,
  gap = "sm",
  children,
  defaultValue,
  wrap = true,
}: PickerProps) => {
  if (
    Children.toArray(children).some((child) => {
      if (isValidElement(child)) return typeof child.type !== typeof Pick;

      return true;
    })
  ) {
    throw new Error(
      "Picker 컴포넌트는 Pick 컴포넌트만 자식으로 가질 수 있습니다.",
    );
  }

  // Picker 내부에서 상태 관리
  const [selectedValue, setSelectedValue] = useState<
    PickValue | PickValue[] | null
  >(defaultValue ?? (isMultiSelect ? [] : null));

  const handleChange = (clickedValue: PickValue) => {
    let changedValue: PickValue | PickValue[] | null;

    if (isMultiSelect) {
      // 다중 선택 로직
      // 타입 안정성을 위해 non-null check (includes 등의 함수 사용 위함)
      const currentValues = Array.isArray(selectedValue) ? selectedValue : [];
      changedValue = currentValues.includes(clickedValue)
        ? currentValues.filter((v) => v !== clickedValue)
        : [...currentValues, clickedValue];
    } else {
      // 단일 선택 로직
      if (selectedValue === clickedValue) {
        // 이미 선택된 값인 경우 선택 취소
        changedValue = null;
      } else {
        changedValue = clickedValue;
      }
    }

    setSelectedValue(changedValue);

    if (onSelectedChange) {
      onSelectedChange(changedValue);
    }
  };

  return (
    <PickerContext.Provider
      value={{
        selectedValue /* 내부에서 관리되는 선택된 값들 */,
        isMultiSelect,
        onSelect: handleChange,
      }}
    >
      <div className={pickerStyle({ gap, wrap })}>{children}</div>
    </PickerContext.Provider>
  );
};

export default Picker;
