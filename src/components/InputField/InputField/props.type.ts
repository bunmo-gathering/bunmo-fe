import React from "react";

export interface InputFieldProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    "type" | "onChange"
  > {
  /**
   * 입력 필드의 스타일을 지정합니다.
   * - 'input': 단일 라인 입력 필드
   * - 'textarea': 멀티라인 입력 필드
   */
  type?: "input" | "textarea";

  /**
   * 입력 필드 위에 표시되는 라벨 텍스트입니다.
   */
  label?: string;

  /**
   * 입력 필드에 표시되는 플레이스홀더 텍스트입니다.
   */
  placeholder?: string;

  /**
   * 입력 필드 아래에 표시되는 힌트 또는 에러 메시지입니다.
   */
  hint?: string;

  /**
   * 입력 필드의 값이 변경될 때 호출되는 콜백 함수입니다.
   */
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  /**
   * 입력 필드의 현재 값입니다.
   */
  value?: string;

  /**
   * 입력 필드를 비활성화할지 여부를 지정합니다.
   */
  disabled?: boolean;

  /**
   * 입력 필드에 허용되는 최대 문자 수를 지정합니다.
   */
  maxLength?: number;

  /**
   * textarea 타입일 때 표시할 행 수를 지정합니다.
   */
  rows?: number;

  /**
   * 에러 상태 여부를 지정합니다. (Destructive state)
   */
  error?: boolean;
}
