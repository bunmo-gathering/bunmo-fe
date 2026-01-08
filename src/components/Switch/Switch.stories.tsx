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
    defalutValue: false,
    label: "토글 레이블",
    description: "이건 토글 레이블 입니다.",
  },
  render: (args) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.checked);
    };
    return <Switch {...args} onChange={handleChange} />;
  },
};

export const Activated = {
  args: {
    defalutValue: true,
    label: "활성화 상태",
  },
};

export const WithDescription = {
  args: {
    defalutValue: false,
    label: "알림 설정",
    description: "새로운 소식과 마케팅 정보를 푸시 알림으로 받아봅니다.",
  },
};

export const OnlySwitch = {
  args: {
    defalutValue: false,
  },
};

export const ActiveWithDescription = {
  args: {
    defalutValue: true,
    label: "위치 정보 권한",
    description: "내 주변 맛집 추천을 위해 위치 정보 사용에 동의합니다.",
  },
};

export const AlignLeftSwitch = {
  args: {
    defalutValue: false,
    label: "토글 레이블",
    align: "left",
  },
};
