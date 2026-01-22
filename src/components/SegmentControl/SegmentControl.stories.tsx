import SegmentControl from "./SegmentControl";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: SegmentControl,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <div className="flex flex-col gap-3">
          <div className="w-full bg-gray-300 rounded-md text-neutral-700 p-3">
            Title
          </div>

          <div className="w-full h-60 bg-gray-300 rounded-md text-neutral-700 p-3">
            Body
          </div>
        </div>
      </>
    ),
  },
  argTypes: {
    onTabChange: { control: false },
    children: { control: false },
    defaultIndex: { control: false },
    data: { control: false },
  },
} satisfies Meta<typeof SegmentControl>;
export default meta;
type Story = StoryObj<typeof SegmentControl>;

export const Default: Story = {
  render: (args) => (
    <SegmentControl
      {...args}
      data={[{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }]}
    />
  ),
};

export const TwoTabs: Story = {
  render: (args) => (
    <SegmentControl {...args} data={[{ label: "Tab 1" }, { label: "Tab 2" }]} />
  ),
};
