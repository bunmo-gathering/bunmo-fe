import { StaticImageData } from "next/image";

interface UserInfo {
  /**
   * - 유저 아이디 값
   */
  userId: number;

  /**
   * - 유저 닉네임
   */
  userName: string;

  /**
   * - 유저 아바타 url
   */
  avatarUrl: StaticImageData | string | null;
}

interface UserGroupProps {
  /**
   * - UserGroup Props에 대한 정의
   */
  entryUsers: UserInfo[];
}

export type { UserGroupProps, UserInfo };
