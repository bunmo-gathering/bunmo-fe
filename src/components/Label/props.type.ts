import { LucideIcon } from "lucide-react";
import { MouseEvent } from "react";

type LabelVariant = "default" | "destructive";

interface LabelProps {
  /**
   * 라벨 왼쪽에 표시될 아이콘 (Lucide 아이콘 컴포넌트)
   */
  icon?: LucideIcon;

  /**
   * 라벨의 색상 타입(default | destructive)
   */
  variant?: LabelVariant;

  /**
   * 라벨 클릭 시 실행될 이벤트 핸들러
   */
  onTap?: (e: MouseEvent<HTMLDivElement>) => void;

  /**
   * 라벨 내부에 표시될 텍스트 내용 (필수)
   */
  children: string;
}

export type { LabelProps };
