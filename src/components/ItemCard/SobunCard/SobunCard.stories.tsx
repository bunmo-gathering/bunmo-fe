// SobunCard.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import SobunCard from ".";
import { SobunCardProps } from "./props.type";
import { cats } from "../../../../.storybook/assets/avatars";
import { UserInfo } from "@/components/UserGroup/props.type";
import { product } from "../../../../.storybook/assets/products";

/**
 * Storybook Meta
 */
const meta: Meta<typeof SobunCard> = {
  title: "Components/SobunCard",
  component: SobunCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof SobunCard>;

/**
 * Mock Users
 */
const mockUsers: UserInfo[] = cats.map((cat, index) => ({
  userId: index + 1,
  avatarUrl: cat,
}));

/**
 * extendMockUsers: 총 N명 유저 생성
 * - 처음 2번 반복 후 초과분은 avatarUrl=null
 */
const extendMockUsers = (total: number): UserInfo[] =>
  Array.from({ length: total }, (_, index) => {
    const baseUser = mockUsers[index % mockUsers.length];
    return {
      userId: index + 1,
      avatarUrl: index < mockUsers.length * 2 ? baseUser.avatarUrl : null,
    };
  });

/**
 * 기본 props
 */
const defaultArgs: SobunCardProps = {
  sobunTitle: "삼겹살 대량 구매 하실분",
  meetingPlace: "합정역 2번 출구",
  meetingTime: "2026-02-12 11:00",
  totalPrice: 75000,
  imageUrl: product[2], // public 폴더 기준
  entryUsers: mockUsers.slice(0, 3),
};

// 1명 유저
export const SingleUser: Story = {
  args: {
    ...defaultArgs,
    entryUsers: mockUsers.slice(0, 1),
  },
};

// 2명 유저
export const TwoUsers: Story = {
  args: {
    ...defaultArgs,
    entryUsers: mockUsers.slice(0, 2),
  },
};

// 3명 유저
export const ThreeUsers: Story = {
  args: {
    ...defaultArgs,
    entryUsers: mockUsers.slice(0, 3),
  },
};

// 5명 유저 (+2 표시)
export const FiveUsers: Story = {
  args: {
    ...defaultArgs,
    entryUsers: mockUsers,
  },
};

// 13명 유저 (overflow 테스트)
export const ManyUsers: Story = {
  args: {
    ...defaultArgs,
    entryUsers: extendMockUsers(13),
  },
};
