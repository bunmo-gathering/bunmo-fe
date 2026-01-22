interface UserInfo {
  /**
   * 유저 아이디 값
   */
  userId: number;

  /**
   * 유저 아바타 url
   */
  avatarUrl: string;
}

interface UserGroupProps {
  entryUsers: UserInfo[];
}

export type { UserGroupProps, UserInfo };
