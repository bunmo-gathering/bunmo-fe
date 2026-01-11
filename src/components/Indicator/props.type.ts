type IndicatorSize = "xs" | "sm" | "md" | "lg" | "xl";
type IndicatorPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";
type IndicatorTargetType = "icon" | "avatar";

interface IndicatorProps {
  /**
   * Avatar로 내려받는 size와 동일하게 indicator에 적용
   */
  size?: IndicatorSize;

  /**
   * Indicator 위치 조정 (사용시 Avatar에서 IndicatorPositon props로 설정)
   */
  position?: IndicatorPosition;
}

export type { IndicatorProps, IndicatorPosition };
