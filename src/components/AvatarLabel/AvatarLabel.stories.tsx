import type { Meta, StoryObj, StoryFn, StoryContext } from "@storybook/react";
import { Plus, User, Settings } from "lucide-react";
import AvatarLabel from ".";

const forceButtonRules = (Story: StoryFn, context: StoryContext) => {
  const args = { ...context.args };

  if (args.type === "button") {
    args.direction = "vertical"; // 강제 horizon
    delete args.user; // user 제거
    delete args.direction;

    if (args.children) {
      args.children = Array.isArray(args.children)
        ? args.children[0]
        : args.children;
    }
  }

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

  args: {
    children: <Plus />, // ✅ 실제 기본 렌더값
  },

  argTypes: {
    children: {
      control: false, // JSX는 컨트롤 숨김 권장
      table: {
        defaultValue: { summary: "<Plus />" }, // ✅ Docs 표시용
      },
    },

    type: {
      control: "radio",
      options: ["avatar", "button"],
    },

    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },

    direction: {
      control: "radio",
      options: ["vertical", "horizon"],
      if: { arg: "type", neq: "button" },
    },
  },

  decorators: [forceButtonRules],
};

export default meta;

type Story = StoryObj<typeof AvatarLabel>;

export const AvatarVertical: Story = {
  args: {
    type: "avatar",
    size: "md",
    direction: "vertical",
    color: "onSurface",
    displayName: "홍길동",
    avatarUrl: "",
  },
};

export const AvatarVerticalNoDescription: Story = {
  args: {
    type: "avatar",
    size: "lg",
    direction: "vertical",
    color: "onPrimaryContainer",
    displayName: "홍길동",
    avatarUrl: "",
  },
};

export const AvatarHorizonSingleLineWithSm: Story = {
  args: {
    type: "avatar",
    size: "sm",
    direction: "horizon",
    color: "onSurface",
    displayName: "홍길동",
    avatarUrl: "",
    description: ["12번 참여함"],
  },
};

export const AvatarHorizonSingleLineWithMd: Story = {
  args: {
    type: "avatar",
    size: "md",
    direction: "horizon",
    color: "onSurface",
    displayName: "홍길동",
    avatarUrl: "",
    description: ["12번 참여함"],
  },
};

export const AvatarHorizonTwoLinesWithMd: Story = {
  args: {
    type: "avatar",
    size: "md",
    direction: "horizon",
    color: "onSurface",
    displayName: "홍길동",
    avatarUrl: "",
    description: ["12번 참여함", "평가 나쁨"],
  },
};

export const AvatarHorizonTwoLinesWithLg: Story = {
  args: {
    type: "avatar",
    size: "lg",
    direction: "horizon",
    color: "onSurface",
    displayName: "홍길동",
    avatarUrl: "",
    description: ["12번 참여함", "평가 나쁨"],
  },
};

export const AvatarHorizonTwoLinesErrorWithDescriptionRandomNumber: Story = {
  args: {
    type: "avatar",
    size: "lg",
    direction: "horizon",
    color: "onSurface",
    displayName: "홍길동",
    avatarUrl: "",
    description: ["12번 참여함", "평가 나쁨"],
  },
};

export const ButtonDefault: Story = {
  args: {
    type: "button",
    size: "md",
    direction: "horizon",
    children: <Plus />,
    displayName: "새 유저 추가",
  },
};

export const ButtonSmall: Story = {
  args: {
    type: "button",
    size: "sm",
    direction: "horizon",
    children: <Settings />,
    displayName: "설정",
  },
};

export const ButtonLarge: Story = {
  args: {
    type: "button",
    size: "lg",
    direction: "horizon",
    children: <User />,
    displayName: "유저 관리",
  },
};
