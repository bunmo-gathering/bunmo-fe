import Chip from "./index";
import { ChevronDownIcon, DogIcon } from "lucide-react";
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
    defaultValue: "카테고리",
    value: "카테고리",
    onTap: () => console.log("카테고리"),
  },
};

/** 선택된 상태의 Chip입니다. */
export const Selected: Story = {
  args: {
    defaultValue: "카테고리",
    value: "식품",
    onTap: () => console.log("식품"),
  },
};

/** 왼쪽 아이콘이 포함된 Chip 입니다. */
export const WithLeftIcon: Story = {
  args: {
    defaultValue: "보리",
    icon: DogIcon,
    iconPosition: "left",
  },
};

/** 오른쪽 아이콘이 포함된 Chip 입니다. */
export const WithRightIcon: Story = {
  args: {
    defaultValue: "최신 순",
    icon: ChevronDownIcon,
    iconPosition: "right",
  },
};
