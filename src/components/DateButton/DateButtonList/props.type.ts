interface DateButtonListProps {
  /**
   * 리스트가 시작되는 기준 날짜입니다.
   */
  initialDate?: Date;

  /**
   * 특정 날짜를 선택했을 때 실행되는 콜백 함수입니다.
   */
  onSelect?: (date: Date) => void;

  /**
   * 리스트에 표시할 전체 날짜의 범위(일수)입니다.
   */
  range?: number;

  /**
   * 월 표시(Month Label) 버튼을 리스트에 포함할지 여부입니다.
   */
  showMonth?: boolean;
}

export type { DateButtonListProps };
