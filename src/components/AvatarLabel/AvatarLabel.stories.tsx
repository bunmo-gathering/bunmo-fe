import type { Meta, StoryObj, StoryFn, StoryContext } from "@storybook/react";
import { Plus, User, Settings } from "lucide-react";
import AvatarLabel from ".";

/**
 * Storybook Decorator
 * - type 값에 따라 유효하지 않은 props를 자동으로 제거
 * - Button / Avatar 모드별 UI 규칙을 강제 적용하여
 *   Storybook Controls 상태와 실제 컴포넌트 동작을 일치시킴
 */
const forceButtonRules = (Story: StoryFn, context: StoryContext) => {
  const args = { ...context.args };

  /**
   * Button 타입일 때 규칙
   * - direction 고정
   * - avatar 전용 props 제거
   * - children 배열일 경우 첫 번째 요소만 사용
   */
  if (args.type === "button") {
    args.direction = "vertical"; // direction 강제 고정
    delete args.user; // avatar 전용 prop 제거
    delete args.direction; // direction 선택 비활성화

    if (args.children) {
      args.children = Array.isArray(args.children)
        ? args.children[0]
        : args.children;
    }
  }

  /**
   * Avatar 타입일 때 규칙
   * - size가 md인 경우 direction 옵션 제거
   */
  if (args.type === "avatar") {
    if (args.size === "md") {
      delete args.direction;
    }
  }

  return Story(args, context);
};

const meta: Meta<typeof AvatarLabel> = {
  component: AvatarLabel,
  tags: ["autodocs"],
  // 기본 아이콘 설정
  args: {
    icon: Plus,
  },
  argTypes: {
    /**
     * 컴포넌트 타입 선택
     * - avatar: 프로필 라벨
     * - button: 액션 버튼
     */
    type: {
      control: "radio",
      description: `컴포넌트의 타입을 지정합니다. avatar, button 중 선택합니다.`,
      options: ["avatar", "button"],
    },

    /**
     * 컴포넌트 크기 옵션
     */
    size: {
      control: "radio",
      description: "컴포넌트의 크기를 지정합니다. sm, md, lg 중 선택합니다.",
      options: ["sm", "md", "lg"],
    },

    /**
     * 레이아웃 방향
     * - button 타입일 때는 숨김 처리
     */
    direction: {
      control: "radio",
      description:
        "컴포넌트의 방향을 지정합니다. vertical, horizon 중 선택합니다.",
      options: ["vertical", "horizon"],
      if: { arg: "type", neq: "button" },
    },

    /**
     * 아이콘 요소이므로 Controls에서 직접 수정 불가
     */
    icon: {
      control: false,
      description: "type이 button인 경우 표시할 LucideIcon 입니다.",
      table: {
        defaultValue: { summary: "Plus" },
      },
    },

    displayName: {
      description: "표시할 유저의 닉네임입니다.",
    },

    avatarUrl: {
      description: "표시할 유저의 프로필 사진 URL입니다.",
    },
  },

  decorators: [forceButtonRules],
};

export default meta;

type Story = StoryObj<typeof AvatarLabel>;

/**
 * Avatar - 세로 레이아웃 기본 케이스
 * - 프로필 이미지 + 이름 표시
 */
export const AvatarVertical: Story = {
  args: {
    type: "avatar",
    size: "md",
    direction: "vertical",
    displayName: "홍길동",
    avatarUrl: "",
  },
};

/**
 * Avatar - 세로 레이아웃 (설명 없음)
 * - description 없이 이름만 표시되는 경우
 */
export const AvatarVerticalNoDescription: Story = {
  args: {
    type: "avatar",
    size: "lg",
    direction: "vertical",
    displayName: "홍길동",
    avatarUrl: "",
  },
};

/**
 * Avatar - 가로 레이아웃 (Small, 설명 한 줄)
 */
export const AvatarHorizonSingleLineWithSm: Story = {
  args: {
    type: "avatar",
    size: "sm",
    direction: "horizon",
    displayName: "홍길동",
    avatarUrl: "",
    description: ["12번 참여함"],
  },
};

/**
 * Avatar - 가로 레이아웃 (Medium, 설명 한 줄)
 */
export const AvatarHorizonSingleLineWithMd: Story = {
  args: {
    type: "avatar",
    size: "md",
    direction: "horizon",
    displayName: "홍길동",
    avatarUrl: "",
    description: ["12번 참여함"],
  },
};

/**
 * Avatar - 가로 레이아웃 (Medium, 설명 두 줄)
 */
export const AvatarHorizonTwoLinesWithMd: Story = {
  args: {
    type: "avatar",
    size: "md",
    direction: "horizon",
    displayName: "홍길동",
    avatarUrl: "",
    description: ["12번 참여함", "평가 나쁨"],
  },
};

/**
 * Avatar - 가로 레이아웃 (Large, 설명 두 줄)
 */
export const AvatarHorizonTwoLinesWithLg: Story = {
  args: {
    type: "avatar",
    size: "lg",
    direction: "horizon",
    displayName: "홍길동",
    avatarUrl: "",
    description: ["12번 참여함", "평가 나쁨"],
  },
};

/**
 * 엣지 케이스 테스트
 * - description 값이 랜덤하거나 예상치 못한 길이일 때
 * - UI 깨짐 여부 확인용 QA 스토리
 */
export const AvatarHorizonTwoLinesErrorWithDescriptionRandomNumber: Story = {
  args: {
    type: "avatar",
    size: "lg",
    direction: "horizon",
    displayName: "홍길동",
    avatarUrl: "",
    description: ["12번 참여함", "평가 나쁨"],
  },
};

/**
 * Button - 기본 크기 버튼
 * - 신규 유저 추가 액션 예시
 */
export const ButtonDefault: Story = {
  args: {
    type: "button",
    size: "md",
    direction: "horizon",
    displayName: "새 유저 추가",
  },
};

/**
 * Button - Small 버튼
 */
export const ButtonSmall: Story = {
  args: {
    type: "button",
    size: "sm",
    direction: "horizon",
    icon: Settings,
    displayName: "설정",
  },
};

/**
 * Button - Large 버튼
 */
export const ButtonLarge: Story = {
  args: {
    type: "button",
    size: "lg",
    direction: "horizon",
    icon: User,
    displayName: "유저 관리",
  },
};
