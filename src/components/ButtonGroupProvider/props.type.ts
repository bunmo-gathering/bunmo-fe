import { PropsWithChildren, ReactNode } from "react";
import { ButtonSize } from "../Button/props.type";

type ButtonGroupProviderType = "normal" | "action";

interface ButtonGroupProviderProps {
  /**
   * Button 컴포넌트 자식 요소들입니다.
   */
  children: PropsWithChildren<ReactNode>;

  /**
   * 버튼 그룹의 타입을 지정합니다.
   * - normal: 기본 버튼 그룹 스타일
   * - action: 액션 버튼 그룹 스타일 (Bottom Sheet 등에서 사용)
   */
  type?: ButtonGroupProviderType;

  /**
   * 버튼 그룹 내 모든 버튼의 크기를 지정합니다.
   * - `type`이 action일 경우, size prop을 사용할 수 없습니다.
   */
  size?: ButtonSize;
}

export type { ButtonGroupProviderProps };
