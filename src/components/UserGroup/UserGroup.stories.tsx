import UserGroup from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: UserGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof UserGroup>;
export default meta;
type Story = StoryObj<typeof UserGroup>;
