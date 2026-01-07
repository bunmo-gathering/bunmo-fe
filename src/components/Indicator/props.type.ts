type IndicatorSize = "xs" | "sm" | "md" | "lg" | "xl";
type IndicatorPosition = "top" | "bottom";
type IndicatorTargetType = "icon" | "avatar";

interface IndicatorProps {
  size?: IndicatorSize;
  position?: IndicatorPosition;
  type?: IndicatorTargetType;
}

export type { IndicatorProps };
