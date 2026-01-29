import { InputHTMLAttributes } from "react";

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
   * 입력 필드에서 키가 눌릴 때 호출되는 콜백 함수입니다.
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  /**
   * 입력 필드의 현재 값입니다.
   */
  value?: string;

  /**
   * 입력 필드를 비활성화할지 여부를 지정합니다.
   */
  disabled?: boolean;

  /**
   * 추가적인 HTML 속성을 입력 필드에 전달합니다.
   */
  inputOptions?: Omit<
    InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    "className" | "style" | "id"
  >;
}
