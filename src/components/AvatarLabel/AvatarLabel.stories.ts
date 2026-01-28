import AvatarLabel from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: AvatarLabel,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
} satisfies Meta<typeof AvatarLabel>;
export default meta;
