import type { Meta, StoryObj } from "@storybook/react";
import { Smile } from "lucide-react";
import LeadingControl from ".";

const meta: Meta<typeof LeadingControl> = {
  title: "Components/Control/LeadingControl",
  component: LeadingControl,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: false,
      description: "컨트롤에 사용할 루시드 아이콘입니다.",
    },
    iconPosition: {
      control: "radio",
      options: ["left", "right"],
      description: "아이콘의 배치 위치를 결정합니다.",
    },
    size: {
      control: "select",
      options: ["sm", "lg"],
      description: "텍스트 크기를 설정합니다.",
    },
    onTap: { action: "clicked", description: "클릭 시 실행되는 함수입니다." },
  },
};

export default meta;
type Story = StoryObj<typeof LeadingControl>;

/**
 * 기본형 (아이콘 + 라벨)
 */
export const Default: Story = {
  args: {
    icon: Smile,
    label: "기본 컨트롤",
    iconPosition: "left",
    size: "sm",
  },
};

/**
 * 아이콘이 오른쪽에 배치된 경우
 */
export const RightIcon: Story = {
  args: {
    icon: Smile,
    label: "오른쪽 아이콘",
    iconPosition: "right",
    size: "sm",
  },
};

/**
 * 큰 사이즈 (lg)
 */
export const Large: Story = {
  args: {
    icon: Smile,
    label: "큰 사이즈 컨트롤",
    size: "lg",
  },
};

/**
 * 아이콘만 있는 경우
 */
export const IconOnly: Story = {
  args: {
    icon: Smile,
    iconPosition: "left",
  },
};

/**
 * 라벨만 있는 경우
 */
export const LabelOnly: Story = {
  args: {
    label: "라벨만 표시",
  },
};

/**
 * 클릭이 가능한 상태 (isPressable)
 */
export const Clickable: Story = {
  args: {
    icon: Smile,
    label: "나를 눌러보세요",
    onTap: () => alert("클릭되었습니다!"),
  },
};
