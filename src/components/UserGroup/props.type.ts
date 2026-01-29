interface UserInfo {
  /**
   * - 유저 아이디 값
   */
  userId: number;

  /**
   * - 유저 아바타 url
   */
  avatarUrl: string | null;
}

interface UserGroupProps {
  /**
   * - UserGroup Props에 대한 정의
   */
  entryUsers: UserInfo[];
}

export type { UserGroupProps, UserInfo };
