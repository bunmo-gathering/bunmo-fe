import { useArgs } from "storybook/internal/preview-api";
import Radio from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    handleChange: { action: "changed" },
  },
} satisfies Meta<typeof Radio>;
export default meta;

type Story = StoryObj<typeof Radio>;

// 클릭 이벤트 -> 선택된 값 변경을 위한 Story
export const Interactive: Story = {
  args: {
    name: "radio-group",
    value: "option1",
    selectedValue: "",
  },
  render: (args) => {
    const [{ selectedValue }, updatedArgs] = useArgs();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      args.handleChange(e);
      updatedArgs({ selectedValue: e.target.value });
    };
    return (
      <Radio
        {...args}
        selectedValue={selectedValue}
        handleChange={handleChange}
      />
    );
  },
};

export const Unselected: Story = {
  args: {
    name: "radio-group",
    value: "radio1",
    selectedValue: "radio2",
  },
};

export const Selected: Story = {
  args: {
    name: "radio-group",
    value: "radio1",
    selectedValue: "radio1",
  },
};
