import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

interface InfoOption {
  /** 표시될 이름 */
  name: string;

  /** 이름 하단에 보일 추가 설명 */
  description?: string;

  /** 아바타 이미지 경로 */
  avatarUrl?: StaticImageData | string | null;

  /** 우측에 표시될 가격 정보 */
  price?: number;
}

/** 기본형 */
interface BlankProps {
  type: "blank";
}

/** 버튼형 */
interface ButtonProps {
  type: "button";

  actionOption: {
    /** 버튼 내부 텍스트 */
    label: string;
    /** 클릭 이벤트 핸들러 */
    onTap?: () => void;
  };
}

/** 아이콘형 */
interface IconProps {
  type: "icon";

  actionOption: {
    /** 표시할 Lucide 아이콘 */
    icon: LucideIcon;
    /** 아이콘 클릭 핸들러 */
    onTap?: () => void;
  };
}

/** 토글형 */
interface ToggleProps {
  type: "toggle";

  toggleOption: {
    /** 활성화 여부 */
    isActive: boolean;
    /** 상태 변경 콜백 */
    onChange?: (isActive: boolean) => void;
  };
}

/** AvatarLabelGroup 컴포넌트의 속성 정의 */
export type AvatarLabelGroupProps = {
  /** 공통 정보 옵션 */
  infoOption: InfoOption;
} & (BlankProps | ButtonProps | IconProps | ToggleProps);
