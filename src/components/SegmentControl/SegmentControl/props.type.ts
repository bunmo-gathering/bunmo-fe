import { ReactElement } from "react";

interface TabData {
  label: string;
}

interface SegmentControlProps {
  data: TabData[];
  defaultIndex?: number;
  onTabChange?: (index: number) => void;
  children?: ReactElement;
}

interface UseSegmentControlData {
  defaultIndex?: number;
  selectedIndex?: number;
}

export type { SegmentControlProps, UseSegmentControlData };
