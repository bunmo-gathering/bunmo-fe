import { MouseEvent } from "react";
import { LucideIcon } from "lucide-react";

type AvatarLabelSize = "sm" | "md" | "lg";
type AvatarLabelDirection = "vertical" | "horizon";

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
   * - 화면에 표시되는 유저 닉네임 | 버튼 명
   */
  displayName?: string;

  /**
   * - 클릭시 실행할 함수
   */
  onTap?: (e: MouseEvent<HTMLButtonElement>) => void;
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
   * - 유저 아바타 url
   */
  avatarUrl?: string | null;

  /**
   * ReactNode 형태의 텍스트
   * - 최대 2개 까지만
   */

  description?: string[];

  /**
   * Lucide Icon
   * - type === avatar 일 경우 never
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
   * - 유저 아바타 url
   * - type === button 일 경우 never
   */
  avatarUrl?: never;

  /**
   * - 아바타 Description
   * - type === button 일 경우 never
   */
  description?: never;

  /**
   * type button 일 경우 icon 사용
   */
  icon?: LucideIcon;
}

export type AvatarLabelProps = AvatarTypeProps | ButtonTypeProps;
