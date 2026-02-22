type MeetingType = "MART" | "ONLINE" | "CUSTOM" | "DEFAULT";

const MeetingTypeMap: Record<MeetingType, string> = {
  MART: "대형 마트",
  ONLINE: "온라인 쇼핑몰",
  CUSTOM: "자유 상품",
  DEFAULT: "모임 유형",
};

export type { MeetingType };
export { MeetingTypeMap };
