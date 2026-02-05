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

/** 선택된 상태의 Chip입니다. */
export const Selected: Story = {
  args: {
    children: "Category",
    defaultValue: true,
  },
};

/** 왼쪽 아이콘이 포함된 Chip 입니다. */
export const WithLeftIcon: Story = {
  args: {
    children: "Category",
    icon: MoreHorizontalIcon,
  },
};
