import { ReactElement } from "react";
import { LucideProps } from "lucide-react";

type AvatarLabelSize = "sm" | "md" | "lg";
type AvatarLabelDirection = "vertical" | "horizon";
type AvatarLabelColor = "onSurface" | "onPrimaryContainer";

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
  children?: never;
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
  children: ReactElement<LucideProps>;

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
   * - 화면에 표시되는 유저 닉네임
   * - type === button 일 경우 never
   */
  nickName?: never;
}

export type AvatarLabelProps = AvatarTypeProps | ButtonTypeProps;
