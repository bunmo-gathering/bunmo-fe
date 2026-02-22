type SortOption =
  | "RECOMMEND"
  | "NEWEST"
  | "OLDEST"
  | "CHEAP"
  | "EXPENSIVE"
  | "DEFAULT";

const SortOptionMap: Record<SortOption, string> = {
  RECOMMEND: "추천 순",
  NEWEST: "최신 순",
  OLDEST: "오래된 순",
  CHEAP: "낮은 가격 순",
  EXPENSIVE: "높은 가격 순",
  DEFAULT: "최신 순",
};

export type { SortOption };
export { SortOptionMap };
