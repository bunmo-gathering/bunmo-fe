import { useArgs } from "storybook/internal/preview-api";
import Switch from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    activate: false,
    label: "토글 레이블",
  },
  render: (args) => {
    const [{ activate }, updateArgs] = useArgs();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      updateArgs({ activate: e.target.checked });
    };
    return <Switch {...args} activate={activate} onChange={handleChange} />;
  },
};

export const Activated = {
  args: {
    activate: true,
    label: "활성화 상태",
    onChange: () => {},
  },
};

export const WithDescription = {
  args: {
    activate: false,
    label: "알림 설정",
    description: "새로운 소식과 마케팅 정보를 푸시 알림으로 받아봅니다.",
    onChange: () => {},
  },
};

export const OnlySwitch = {
  args: {
    activate: false,
    onChange: () => {},
  },
};

export const ActiveWithDescription = {
  args: {
    activate: true,
    label: "위치 정보 권한",
    description: "내 주변 맛집 추천을 위해 위치 정보 사용에 동의합니다.",
    onChange: () => {},
  },
};
