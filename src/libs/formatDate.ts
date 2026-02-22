/**
 * ISO 날짜 문자열에서 "HH:mm"만 추출
 * 예: "2026-02-20T14:30:00" -> "14:30"
 */
const formatTimeOnly = (dateStr: string): string => {
  // 'T'를 기준으로 자르고, 시간:분(5글자)만 가져옴
  return dateStr.split("T")[1].slice(0, 5);
};

/**
 * ISO 날짜 문자열을 한국어 읽기 형식으로 변환
 * 예: "2026-02-20T14:30:00" -> "2월 20일 금요일 오후 2시 30분"
 */
const formatKoreanDateTime = (dateStr: string): string => {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "오후" : "오전";

  // 12시간제로 변경 (0시와 12시는 12로 표시)
  hours = hours % 12 || 12;

  return `${month}월 ${day}일 ${dayOfWeek}요일 ${ampm} ${hours}시 ${minutes}분`;
};

/**
 * Date 객체를 'YY-MM-DD' 형식의 문자열로 변환합니다.
 */
export const formatDate = (date: Date) => {
  const yy = String(date.getFullYear()).slice(-2);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  return `${yy}-${mm}-${dd}`;
};

/**
 * 현재 시간 대비 남은 시간을 계산하여 문자열 반환
 * - 1시간 미만: "N분"
 * - 24시간 미만: "N시간"
 * - 24시간 이상: "N일"
 * - 과거 시간 혹은 유효하지 않음: null
 */
const getRemainingTime = (dateStr: string): string | null => {
  const targetDate = new Date(dateStr);
  const now = new Date();

  if (isNaN(targetDate.getTime())) return null;

  const diffMs = targetDate.getTime() - now.getTime();
  if (diffMs <= 0) return null;

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  // 1. 1시간 미만일 때 (60분 미만)
  if (diffMinutes < 60) {
    return `${Math.max(diffMinutes, 1)}분`; // 0분 방지를 위해 최소 1분 표시
  }

  // 2. 24시간 미만일 때
  if (diffHours < 24) {
    return `${diffHours}시간`;
  }

  // 3. 24시간 이상일 때
  return `${diffDays}일`;
};

export { formatTimeOnly, formatKoreanDateTime, getRemainingTime };
