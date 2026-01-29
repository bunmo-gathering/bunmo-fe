import { ReactNode } from "react";

interface NavigationBarProps {
  /**
   * NavigationBar에 표시될 요소들 입니다.
   * LeadingControl, TrailingControl이 없으면 빈 Control이 삽입됩니다.
   * 나머지 Node 요소들의 경우 마지막 하나만 반영됩니다
   */
  children: ReactNode[] | ReactNode;
}

export type { NavigationBarProps };
