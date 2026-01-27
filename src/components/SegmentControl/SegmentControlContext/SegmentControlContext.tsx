import { createContext } from "react";
import { SegmentControlCotextData } from "./context.type";

const SegmentControlContext = createContext<SegmentControlCotextData | null>(
  null,
);

export default SegmentControlContext;
