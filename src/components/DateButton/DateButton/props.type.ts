type DateButtonType = "default" | "month";

interface DateButtonProps {
  /**
   * 버튼에 표시할 날짜 객체
   * @default new Date()
   */
  date?: Date;

  /**
   * 해당 날짜가 현재 선택된 상태인지 여부
   * @default false
   */
  isSelected?: boolean;

  /**
   * DateButton의 타입을 지정 (날짜 표시용, Month 표시용)
   * - default : 날짜 표시
   * - month : 월 표시
   */
  type?: DateButtonType;

  /**
   * 사용자가 날짜 버튼을 클릭했을 때 호출되는 핸들러 함수
   * @param date 클릭된 버튼의 {@link Date} 객체
   */
  onTap?: (date: Date) => void;
}

export type { DateButtonProps };
