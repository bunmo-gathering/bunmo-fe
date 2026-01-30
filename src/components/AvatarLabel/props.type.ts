import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { LucideProps } from "lucide-react";
import { IconButtonColor } from "../IconButton/props.type";

type AvatarLabelSize = "sm" | "md" | "lg";
export type AvatarLabelType = "avatar" | "button";
type AvatarLabelDirection = "vertical" | "horizon";
type AvatarLabelColor = "onSurface" | "onPrimaryContainer";

export interface UserInfo {
  /**
   * - 유저 아바타 url
   */
  avatarUrl?: string | null;

  /**
   * - 화면에 표시되는 유저 닉네임
   */
  nickName: string;
}

interface BaseAvatarLabelProps {
  /**
   * Avatar 및 IconButton의 사이즈
   * - sm
   * - md
   * - lg
   */
  size?: AvatarLabelSize;

  /**
   * Avatar, IconButton 과 nickName,children 과의 방향 설정
   * - vertical : 가로로 배치
   * - horizon : 세로로 배치
   */
  direction?: AvatarLabelDirection;

  /**
   * 텍스트 색상 지정
   * - onSurface
   * - onPrimary
   */
  color?: AvatarLabelColor;

  /**
   * ReactNode 형태의 텍스트
   * - 최대 2개 까지만
   */
  children?: PropsWithChildren<ReactNode>;
}

/** avatar 타입 */
interface AvatarTypeProps extends BaseAvatarLabelProps {
  /**
   * Avatar Type 설정
   * - avatar
   * - button
   */
  type: "avatar";

  /**
   * 유저 정보
   * - type avatar 일경우 유저 정보 사용
   */
  user: UserInfo;

  /**
   * type이 아바타일 경우 icon 사용 x
   */
  icon?: never;
}

/** button 타입 */
interface ButtonTypeProps extends BaseAvatarLabelProps {
  /**
   * Avatar Type 설정
   */
  type: "button";

  /**
   * type button 일 경우 icon 사용
   */
  icon: ReactElement<LucideProps>;

  /**
   * type이 button 일 경우 유저 정보 사용 x
   */
  user?: never;
}

export type AvatarLabelProps = AvatarTypeProps | ButtonTypeProps;
