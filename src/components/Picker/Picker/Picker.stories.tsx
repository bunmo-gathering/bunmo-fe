import type { Meta, StoryObj } from "@storybook/react";
import Picker from "./index";
import Pick from "../Pick/Pick";

const meta: Meta<typeof Picker> = {
  title: "Components/Picker",
  component: Picker,
  tags: ["autodocs"],
  argTypes: {
    gap: { control: "radio", options: ["sm", "lg"] },
    isMulti: { control: "boolean" },
    onSelectedChange: { action: "onSelectedChange" },
  },
};

export default meta;
type Story = StoryObj<typeof Picker>;

// 공통으로 사용할 자식 컴포넌트 뭉치
const DefaultChildren = [
  <Pick key="1" label="React" />,
  <Pick key="2" label="Next.js" />,
  <Pick key="3" label="TypeScript" />,
  <Pick key="4" label="Tailwind" />,
];

export const Single: Story = {
  args: {
    isMulti: false,
    gap: "sm",
  },
  render: (args) => <Picker {...args}>{DefaultChildren}</Picker>,
};

export const Multi: Story = {
  args: {
    isMulti: true,
    gap: "lg",
    defaultValue: ["React", "TypeScript"],
  },
  render: (args) => <Picker {...args}>{DefaultChildren}</Picker>,
};

/**
 * 직접 자식을 구성하고 싶을 때의 예시
 */
export const CustomChildren: Story = {
  args: { isMulti: true, defaultValue: ["세윤"] },
  render: (args) => (
    <Picker {...args}>
      <Pick label="종원" />
      <Pick label="세윤" />
      <Pick label="승일" />
      <Pick label="성훈" />
    </Picker>
  ),
};
