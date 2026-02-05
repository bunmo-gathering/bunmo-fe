import Chip from "./index";
import { Plus, MoreHorizontalIcon, CheckIcon } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof Chip>;

/** 기본 상태의 Chip입니다. */
export const Default: Story = {
  args: {
    children: "Category",
    onChange: (isSelected) => console.log(isSelected),
  },
};

/** 선택된 상태이며 기본적으로 닫기 버튼이 있는 변형입니다. */
export const Selected: Story = {
  args: {
    children: "Category",
    defaultValue: true,
  },
};

/** 기본 상태에서 더보기 아이콘이 표시되는 변형입니다. */
export const WithMore: Story = {
  args: {
    children: "Category",
    icon: MoreHorizontalIcon,
  },
};
