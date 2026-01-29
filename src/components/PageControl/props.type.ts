import { ReactNode } from "react";

interface PageControlProps {
  /**
   * 각 페이지에 표시할 단일 ReactNode 혹은 ReactNode 배열입니다.
   * 배열의 순서가 페이지의 순서로 적용됩니다.
   */
  children: ReactNode;
}

export type { PageControlProps };
