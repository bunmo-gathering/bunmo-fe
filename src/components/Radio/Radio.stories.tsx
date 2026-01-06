import { useArgs } from "storybook/internal/preview-api";
import Radio from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof Radio>;

/**
 * 두 개의 라디오 버튼이 하나의 상태를 공유하며 작동하는 실습용 스토리입니다. (최상단에서 진행)
 */
export const Default: Story = {
  args: {
    name: "radio-group",
    type: "first",
  },
  render: (args) => {
    const [{ selectedValue }, updateArgs] = useArgs();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      updateArgs({ selectedValue: e.target.value });
    };

    return (
      <div className="flex flex-col gap-4">
        <Radio
          {...args}
          id="option-1"
          value="option1"
          label="옵션 1 (Value: option1)"
          description="첫 번째 옵션입니다."
          selectedValue={selectedValue}
          onChange={onChange}
        />
        <Radio
          {...args}
          id="option-2"
          value="option2"
          label="옵션 2 (Value: option2)"
          description="두 번째 옵션입니다."
          selectedValue={selectedValue}
          onChange={onChange}
        />
      </div>
    );
  },
};

/**
 * 미선택 상태의 고정된 스타일을 보여줍니다.
 */
export const Unselected: Story = {
  args: {
    id: "unselected",
    label: "미선택 상태",
    value: "radio1",
    selectedValue: "radio2",
    description: "현재 선택되지 않은 기본 상태입니다.",
  },
};

/**
 * 선택된 상태의 고정된 스타일을 보여줍니다.
 */
export const Selected: Story = {
  args: {
    id: "selected",
    label: "선택된 상태",
    value: "radio1",
    selectedValue: "radio1",
    description: "현재 선택되어 강조된 상태입니다.",
  },
};
