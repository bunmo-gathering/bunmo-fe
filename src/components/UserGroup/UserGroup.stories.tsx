import type { Meta, StoryObj } from "@storybook/react";
import { UserInfo } from "./props.type";
import UserGroup from ".";
import { cats } from "../../../.storybook/assets/avatars";

/**
 * Storybook Meta
 */
const meta: Meta<typeof UserGroup> = {
  title: "Components/UserGroup",
  component: UserGroup,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof UserGroup>;

/**
 * Mock Data
 */
const mockUsers: UserInfo[] = cats.map((cat, index) => ({
  userId: index + 1,
  avatarUrl: cat.src,
}));

/**
 * mockUsers(5개)를 기반으로
 * - 이미지는 2번 반복
 * - 초과분은 avatarUrl = null
 */
const extendMockUsers = (total: number): UserInfo[] =>
  Array.from({ length: total }, (_, index) => {
    const baseUser = mockUsers[index % mockUsers.length];

    return {
      userId: index + 1,
      avatarUrl: index < mockUsers.length * 2 ? baseUser.avatarUrl : null,
    };
  });

// 1명
export const SingleUser: Story = {
  args: {
    entryUsers: mockUsers.slice(0, 1),
  },
};

// 2명
export const TwoUsers: Story = {
  args: {
    entryUsers: mockUsers.slice(0, 2),
  },
};

// 3명 (최대 표시)
export const ThreeUsers: Story = {
  args: {
    entryUsers: mockUsers.slice(0, 3),
  },
};

// 5명 (+2 표시)
export const FiveUsers: Story = {
  args: {
    entryUsers: mockUsers,
  },
};

export const ManyUser: Story = {
  args: {
    entryUsers: extendMockUsers(13),
  },
};
