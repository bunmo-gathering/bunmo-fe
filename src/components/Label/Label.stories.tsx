import { DogIcon, LogOutIcon } from "lucide-react";
import Label from ".";
import type { Meta } from "@storybook/react";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: false,
      table: {
        type: { summary: "LucideIcon" },
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

/**
 * 가장 기본적인 형태의 라벨입니다.
 */
export const Default = {
  args: {
    icon: DogIcon,
    variant: "default",
    children: "보리에요",
    onTap: () => console.log("멍"),
    isBlock: false,
  },
};

/**
 * 주의나 삭제가 필요한 상황에서 사용하는 위험 강조 라벨입니다.
 */
export const Destructive = {
  args: {
    icon: LogOutIcon,
    variant: "destructive",
    children: "로그아웃",
    onTap: () => console.log("로그아웃됨"),
  },
};

/**
 * 아이콘 없이 텍스트만 표시되는 형태입니다.
 */
export const WithoutIcon = {
  args: {
    children: "맛있는 한솥",
  },
};

/**
 * 텍스트의 너비만큼만 차지하는 라벨입니다.
 */
export const BlockLabel = {
  args: {
    children: "맛있는 밥스볼",
    isBlock: true,
  },
};
