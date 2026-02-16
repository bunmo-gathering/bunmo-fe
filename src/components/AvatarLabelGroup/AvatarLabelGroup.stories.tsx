import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/internal/preview-api";
import { Settings, Trash2 } from "lucide-react";
import AvatarLabelGroup from ".";
import { AvatarLabelGroupProps } from "./props.type";

const meta: Meta<typeof AvatarLabelGroup> = {
  title: "Components/AvatarLabelGroup",
  component: AvatarLabelGroup,
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "blank, button, icon, toggle 중 타입을 선택합니다.",
    },

    // 공통 infoOption 설정
    infoOption: {
      description: "사용자 정보 및 가격 옵션을 작성합니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarLabelGroup>;

/**
 * 1. 기본형 (Blank)
 */
export const Blank: Story = {
  args: {
    type: "blank",
    infoOption: {
      name: "김철수",
      description: "프론트엔드 개발자",
      avatarUrl: "https://picsum.photos/id/64/200",
    },
  },
};

/**
 * 2. 버튼형 (Button)
 */
export const WithButton: Story = {
  args: {
    type: "button",
    infoOption: {
      name: "이영희",
      description: "디자이너",
      avatarUrl: "https://picsum.photos/id/65/200",
      price: 50000,
    },
    actionOption: {
      label: "수정하기",
      onTap: () => alert("수정 버튼 클릭"),
    },
  },
};

/**
 * 3. 아이콘형 (Icon)
 */
export const WithIcon: Story = {
  args: {
    type: "icon",
    infoOption: {
      name: "관리자",
      avatarUrl: null,
    },
    actionOption: {
      icon: Settings,
      onTap: () => alert("설정 아이콘 클릭"),
    },
  },
};

/**
 * 4. 토글 활성화 상태 (Active)
 * - X 아이콘 표시
 * - 가격 정보 표시됨
 */
export const ToggleActive: Story = {
  args: {
    type: "toggle",
    infoOption: {
      name: "박지성",
      description: "활동 중인 멤버",
      price: 12000,
      avatarUrl: "https://picsum.photos/id/10/200",
    },
    toggleOption: {
      isActive: true,
      onChange: () => {}, // 정적 확인용이므로 빈 함수
    },
  },
};

/**
 * 5. 토글 비활성화 상태 (Inactive)
 * - Plus 아이콘 표시
 * - 가격 정보 숨김
 */
export const ToggleInactive: Story = {
  args: {
    type: "toggle",
    infoOption: {
      name: "박지성",
      description: "대기 중인 멤버",
      price: 12000,
      avatarUrl: "https://picsum.photos/id/10/200",
    },
    toggleOption: {
      isActive: false,
      onChange: () => {},
    },
  },
};
