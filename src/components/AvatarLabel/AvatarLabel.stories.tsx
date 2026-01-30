import type { Meta, StoryObj, StoryFn, StoryContext } from "@storybook/react";
import { Plus, User, Settings } from "lucide-react";
import AvatarLabel from ".";

const forceButtonRules = (Story: StoryFn, context: StoryContext) => {
  const args = { ...context.args };

  if (args.type === "button") {
    args.direction = "vertical"; // 강제 horizon
    delete args.user; // user 제거

    if (args.children) {
      args.children = Array.isArray(args.children)
        ? args.children[0]
        : args.children;
    }
  }

  return Story(args, context);
};

const DEFAULT_USER = { nickName: "홍길동", avatarUrl: "" };

const meta: Meta<typeof AvatarLabel> = {
  component: AvatarLabel,

  tags: ["autodocs"],

  argTypes: {
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

    color: {
      control: "radio",
      options: ["onSurface", "onPrimaryContainer"],
      if: { arg: "type", neq: "button" },
    },

    user: {
      control: false,
      table: { disable: true },
    }, // button일 때 user 제거
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
    user: DEFAULT_USER,
  },
};

export const AvatarVerticalNoChildren: Story = {
  args: {
    type: "avatar",
    size: "lg",
    direction: "vertical",
    color: "onPrimaryContainer",
    user: DEFAULT_USER,
  },
};

export const AvatarHorizonSingleLine: Story = {
  args: {
    type: "avatar",
    size: "sm",
    direction: "horizon",
    color: "onSurface",
    user: DEFAULT_USER,
    children: <span>12번 참여함</span>,
  },
};

export const AvatarHorizonTwoLines: Story = {
  args: {
    type: "avatar",
    size: "lg",
    direction: "horizon",
    color: "onSurface",
    user: DEFAULT_USER,
    children: (
      <>
        <span>12번 참여함</span>
        <span>최근 거래량: 3</span>
      </>
    ),
  },
};

export const ButtonDefault: Story = {
  args: {
    type: "button",
    size: "md",
    direction: "horizon",
    icon: <Plus color="white" />,
    children: <span>새 사용자 추가</span>,
  },
};

export const ButtonSmall: Story = {
  args: {
    type: "button",
    size: "sm",
    direction: "horizon",
    icon: <User color="white" />,
    children: <span>유저 관리</span>,
  },
};

export const ButtonLarge: Story = {
  args: {
    type: "button",
    size: "lg",
    direction: "horizon",
    icon: <Settings className="colors-primary" />,
    children: <span>설정</span>,
  },
};
