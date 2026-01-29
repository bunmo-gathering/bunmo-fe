import type { Meta, StoryObj } from "@storybook/react";
import { Bell, Settings, MoreVertical, Search, Share } from "lucide-react";
import TrailingControl from ".";

const meta: Meta<typeof TrailingControl> = {
  title: "Components/Control/TrailingControl",
  component: TrailingControl,
  tags: ["autodocs"],
  argTypes: {
    actions: {
      control: false,
      description: `
   표시할 액션 버튼들의 배열입니다.
   다음과 같은 TrailingAction 요소들의 배열로 구성됩니다.
   
   - icon: LucideIcon
   - onTap: 클릭 시 실행될 함수
   - label: aria-label용 텍스트
   `,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TrailingControl>;

/**
 * 아이콘 1개 (기본 설정 등)
 */
export const SingleAction: Story = {
  args: {
    actions: [
      { icon: Settings, onTap: () => console.log("Settings"), label: "설정" },
    ],
  },
};

/**
 * 아이콘 2개 (알림 및 설정)
 */
export const DoubleActions: Story = {
  args: {
    actions: [
      { icon: Bell, onTap: () => console.log("Notification"), label: "알림" },
      { icon: Settings, onTap: () => console.log("Settings"), label: "설정" },
    ],
  },
};

/**
 * 아이콘 3개 (이미지 디자인 가이드 케이스)
 */
export const TripleActions: Story = {
  args: {
    actions: [
      { icon: Search, onTap: () => console.log("Search"), label: "검색" },
      { icon: Share, onTap: () => console.log("Share"), label: "공유" },
      { icon: MoreVertical, onTap: () => console.log("More"), label: "더보기" },
    ],
  },
};

/**
 * 비어있는 상태
 * 컴포넌트 내부에서 min-w-10(40px), min-h-14(56px)가 적용된 빈 공간을 확인할 수 있습니다.
 */
export const Empty: Story = {
  args: {
    actions: [],
  },
};

/**
 * 클릭이 불가능한 아이콘 (onTap 미전달)
 * cursor-pointer가 적용되지 않는지 확인합니다.
 */
export const ReadOnly: Story = {
  args: {
    actions: [{ icon: Bell, label: "알림 전용" }],
  },
};
