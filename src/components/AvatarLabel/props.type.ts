import { ReactElement } from "react";
import { LucideProps } from "lucide-react";

type AvatarLabelSize = "sm" | "md" | "lg";
export type AvatarLabelType = "avatar" | "button";
type AvatarLabelDirection = "vertical" | "horizon";
type AvatarLabelColor = "onSurface" | "onPrimary";

export interface UserInfo {
  avatarUrl?: string;
  nickName: string;
}

interface BaseAvatarLabelProps {
  size?: AvatarLabelSize;
  direction?: AvatarLabelDirection;
  color?: AvatarLabelColor;

  /** 텍스트 영역 */
  description?: string;
}

/** avatar 타입 */
interface AvatarTypeProps extends BaseAvatarLabelProps {
  type: "avatar";
  user: UserInfo;
  icon?: never;
}

/** button 타입 */
interface ButtonTypeProps extends BaseAvatarLabelProps {
  type: "button";
  icon: ReactElement<LucideProps>;
  user?: never;
}

export type AvatarLabelProps = AvatarTypeProps | ButtonTypeProps;
