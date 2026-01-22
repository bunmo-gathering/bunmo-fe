import { useRef } from "react";
import Tab from "../Tab";
import { AnimatePresence, motion } from "motion/react";
import SegmentControlContext from "../SegmentControlContext/SegmentControlContext";
import useSegmentControl from "./useSegmentControl";
import { SegmentControlProps } from "./props.type";
import SegmentControlView from "../SegmentControlView";
import {
  segmentControlAnimation,
  segmentControlUnderbarAnimation,
} from "./animate";

const SegmentControl = ({
  data,
  defaultIndex = 0,
  onTabChange,
  children,
}: SegmentControlProps) => {
  const { selectedIndex, handleTabChange } = useSegmentControl({
    defaultIndex,
  });
  const prevIndexRef = useRef(selectedIndex);
  const direction = selectedIndex > prevIndexRef.current ? -1 : 1;

  return (
    <SegmentControlContext value={{ selectedIndex, onTabChange }}>
      <AnimatePresence>
        <div className="flex flex-col w-125">
          <div className="flex relative">
            {/* 탭 */}
            {data.map((data, index) => (
              <Tab
                key={index}
                {...data}
                onTap={() => {
                  prevIndexRef.current = selectedIndex;
                  handleTabChange(index);
                  onTabChange && onTabChange(index);
                }}
              />
            ))}

            {/* 밑 줄 */}
            <motion.div
              className="absolute bottom-0 h-0.5 bg-primary"
              animate={{
                x: `${selectedIndex * 100}%`,
                width: `${100 / data.length}%`,
              }}
              {...segmentControlUnderbarAnimation}
            />
          </div>

          <SegmentControlView>
            <motion.div
              key={selectedIndex}
              className="flex-1"
              initial={{ opacity: 0, x: direction * 12 }}
              exit={{
                opacity: 0,
                x: direction * -12,
              }}
              {...segmentControlAnimation}
            >
              {children}
            </motion.div>
          </SegmentControlView>
        </div>
      </AnimatePresence>
    </SegmentControlContext>
  );
};

export default SegmentControl;
