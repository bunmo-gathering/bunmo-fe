import { useState } from "react";
import { UseSegmentControlData } from "./props.type";

const useSegmentControl = ({
  defaultIndex = 0,
  selectedIndex: controlledIndex,
}: UseSegmentControlData) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  const handleTabChange = (index: number) => {
    setSelectedIndex(index);
  };

  return { selectedIndex: controlledIndex ?? selectedIndex, handleTabChange };
};

export default useSegmentControl;
