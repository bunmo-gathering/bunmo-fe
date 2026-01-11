import Chip from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof Chip>;

/** 기본 상태의 Chip입니다. (아무 액션 없음) */
export const Default: Story = {
  args: {
    text: "Category",
    variant: "default",
    more: false,
    close: false,
  },
};

/** 선택된 상태이며 닫기 버튼이 있는 변형입니다. */
export const SelectedWithClose: Story = {
  args: {
    text: "Category",
    variant: "selected",
    more: false,
    close: true,
  },
};

/** 기본 상태에서 더보기 아이콘이 표시되는 변형입니다. */
export const DefaultWithMore: Story = {
  args: {
    text: "Category",
    variant: "default",
    more: true,
    close: false,
  },
};
