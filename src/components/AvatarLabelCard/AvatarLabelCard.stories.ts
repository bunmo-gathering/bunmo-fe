import type { Meta, StoryObj } from "@storybook/react";
import { UserInfo } from "../UserGroup/props.type";
import AvatarLabelCard from ".";

const meta: Meta<typeof AvatarLabelCard> = {
  title: "Components/AvatarLabelCard",
  component: AvatarLabelCard,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "카드의 상단 제목 입니다.",
    },
    maxEntry: {
      control: "number",
      description: "소분 모임 최대 인원 수 입니다.",
    },
    entryUsers: {
      control: false,
      description: "참여 중인 유저들의 정보 입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarLabelCard>;

// Mock 데이터: 더미 유저 리스트
const mockUsers: UserInfo[] = [
  {
    userId: 1,
    userName: "김철수",
    avatarUrl: "https://picsum.photos/id/1/200",
  },
  {
    userId: 2,
    userName: "이영희",
    avatarUrl: "https://picsum.photos/id/2/200",
  },
  {
    userId: 3,
    userName: "박지성",
    avatarUrl: "https://picsum.photos/id/3/200",
  },
  {
    userId: 4,
    userName: "손흥민",
    avatarUrl: "https://picsum.photos/id/4/200",
  },
];

/**
 * 기본 상태 (4명의 유저)
 */
export const Default: Story = {
  args: {
    title: "참여 중인 멤버",
    entryUsers: mockUsers,
    maxEntry: 8,
  },
};

/**
 * 인원이 많아 줄바꿈이 발생하는 상태 (grid-cols-4 확인용)
 */
export const ManyUsers: Story = {
  args: {
    title: "팀원 목록 (전체)",
    maxEntry: 12,
    entryUsers: [
      ...mockUsers,
      {
        userId: 5,
        userName: "황희찬",
        avatarUrl: "https://picsum.photos/id/5/200",
      },
      {
        userId: 6,
        userName: "이강인",
        avatarUrl: "https://picsum.photos/id/6/200",
      },
      {
        userId: 7,
        userName: "김민재",
        avatarUrl: "https://picsum.photos/id/7/200",
      },
    ],
  },
};

/**
 * 참여자가 없는 빈 상태
 */
export const Empty: Story = {
  args: {
    title: "대기 중인 멤버",
    entryUsers: [],
    maxEntry: 4,
  },
};
