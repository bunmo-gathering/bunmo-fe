import Chip from "./index";
import { Plus, Check } from "lucide-react";
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
  },
};

/** 선택된 상태이며 기본적으로 닫기 버튼이 있는 변형입니다. */
export const Selected: Story = {
  args: {
    text: "Category",
    variant: "selected",
  },
};

/** 기본 상태에서 더보기 아이콘이 표시되는 변형입니다. */
export const WithMore: Story = {
  args: {
    text: "Category",
    variant: "default",
    rightAction: "more",
    onRightActionClick: (action) => {
      console.log(`${action} button clicked`);
    },
  },
};

/** 왼쪽에 아이콘이 있는 기본 Chip입니다. (문자열 타입 사용) */
export const WithIconTypeString: Story = {
  args: {
    text: "Add Item",
    variant: "default",
    icon: "plus",
    onIconClick: (iconType) => {
      console.log(`${iconType} icon clicked`);
    },
  },
};

/** 왼쪽에 Check 아이콘이 있는 선택 상태 Chip입니다. (문자열 타입 사용) */
export const SelectedWithCheckIcon: Story = {
  args: {
    text: "Done",
    variant: "selected",
    icon: "check",
  },
};

/** 왼쪽에 lucide 아이콘을 직접 전달하는 예제입니다. */
export const WithLucideIcon: Story = {
  args: {
    text: "Add New",
    variant: "default",
    icon: <Plus size={20} />,
  },
};

/** 왼쪽 아이콘과 더보기 액션이 모두 있는 Chip입니다. */
export const WithIconAndMore: Story = {
  args: {
    text: "Selected Item",
    variant: "default",
    icon: "check",
    rightAction: "more",
    onIconClick: (iconType) => {
      console.log(`${iconType} icon clicked`);
    },
  },
};
