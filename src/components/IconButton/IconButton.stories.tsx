import { Plus } from "lucide-react";
import IconButton from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: IconButton,
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "primary",
  },

  argTypes: {
    children: { control: false },
  },

  render: (args) => (
    <IconButton {...args}>
      <Plus color="white" />
    </IconButton>
  ),
};
