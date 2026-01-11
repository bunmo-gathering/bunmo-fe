import { PickProps } from "./props.type";
import { motion } from "motion/react";
import pickStyle from "./style";
import PickAnimation from "./animate";
import { usePicker, Value } from "../Picker/PickerContext";

const Pick = ({ label }: PickProps) => {
  const { selectedValue, isMulti, onSelect } = usePicker();

  // 단일 선택/다중 선택 => 선택 여부 로직 분기
  const isSelected = isMulti
    ? (selectedValue as Value[]).includes(label)
    : selectedValue === label;

  return (
    <motion.div
      className={pickStyle({ isSelected })}
      onClick={() => onSelect(label)}
      {...PickAnimation}
    >
      {label}
    </motion.div>
  );
};

export default Pick;
