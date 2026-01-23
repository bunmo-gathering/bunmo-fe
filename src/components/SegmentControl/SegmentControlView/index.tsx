import { useContext } from "react";
import SegmentControlContext from "../SegmentControlContext/SegmentControlContext";
import { SegmentControlViewProps } from "./props.type";

const SegmentControlView = ({ children }: SegmentControlViewProps) => {
  const segmentContext = useContext(SegmentControlContext);

  if (!segmentContext) {
    throw new Error(
      "SegmentControlView 컴포넌트는 SegmentControlContext 안에서 사용되어야 합니다.",
    );
  }

  return <div className="px-4 py-5">{children}</div>;
};

export default SegmentControlView;
