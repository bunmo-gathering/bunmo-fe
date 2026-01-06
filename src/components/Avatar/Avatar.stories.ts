import Avatar from ".";
import type { Meta } from "@storybook/react";

const meta = {
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;
export default meta;

export const Default = {
  args: {
    size: "md",
    avatarUrl: null,
    status: null,
  },
};
