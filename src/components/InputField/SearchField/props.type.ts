export interface SearchFieldProps {
  /**
   * 입력 필드에 표시되는 플레이스홀더 텍스트입니다.
   */
  placeholder?: string;

  /**
   * 입력 필드의 값이 변경될 때 호출되는 콜백 함수입니다.
   */
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;

  /**
   * 검색 버튼이 탭될 때 호출되는 콜백 함수입니다.
   */
  onSearchButtonTap?: () => void;

  /**
   * 입력 필드의 현재 값입니다.
   */
  value?: string;

  /**
   * 입력 필드를 비활성화할지 여부를 지정합니다.
   */
  disabled?: boolean;
}
