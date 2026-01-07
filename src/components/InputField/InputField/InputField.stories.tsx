import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../index";
import { useState } from "react";

const meta = {
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["input", "textarea"],
      description: "입력 필드의 스타일을 지정합니다.",
    },
    label: {
      control: "text",
      description: "입력 필드 위에 표시되는 라벨 텍스트입니다.",
    },
    placeholder: {
      control: "text",
      description: "입력 필드에 표시되는 플레이스홀더 텍스트입니다.",
    },
    hint: {
      control: "text",
      description: "입력 필드 아래에 표시되는 힌트 또는 에러 메시지입니다.",
    },
    value: {
      control: "text",
      description: "입력 필드의 현재 값입니다.",
    },
    disabled: {
      control: "boolean",
      description: "입력 필드를 비활성화할지 여부를 지정합니다.",
    },
    error: {
      control: "boolean",
      description: "에러 상태 여부를 지정합니다.",
    },
    maxLength: {
      control: "number",
      description: "입력 필드에 허용되는 최대 문자 수를 지정합니다.",
    },
    rows: {
      control: "number",
      description: "textarea 타입일 때 표시할 행 수를 지정합니다.",
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Controlled component wrapper for interactive stories
const ControlledInputField = (args: any) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <div style={{ width: "300px" }}>
      <InputField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

/**
 * 기본 Input 필드입니다.
 */
export const DefaultInput: Story = {
  args: {
    type: "input",
    label: "Label",
    placeholder: "Placeholder",
    hint: "Hint text",
  },
  render: (args) => <ControlledInputField {...args} />,
};

/**
 * 값이 입력된 상태의 Input 필드입니다.
 */
export const InputWithValue: Story = {
  args: {
    type: "input",
    label: "Label",
    placeholder: "Placeholder",
    hint: "Hint text",
    value: "내용을 입력했을 때",
  },
  render: (args) => <ControlledInputField {...args} />,
};

/**
 * 기본 Textarea 필드입니다.
 */
export const DefaultTextarea: Story = {
  args: {
    type: "textarea",
    label: "Label",
    placeholder: "Placeholder",
    hint: "Hint text",
    rows: 3,
  },
  render: (args) => <ControlledInputField {...args} />,
};

/**
 * 값이 입력된 상태의 Textarea 필드입니다.
 */
export const TextareaWithValue: Story = {
  args: {
    type: "textarea",
    label: "Label",
    placeholder: "Placeholder",
    hint: "Hint text",
    value: "내용을 입력했을 때",
    rows: 3,
  },
  render: (args) => <ControlledInputField {...args} />,
};

/**
 * 에러 상태의 Input 필드입니다.
 */
export const ErrorInput: Story = {
  args: {
    type: "input",
    label: "Label",
    placeholder: "Placeholder",
    hint: "Hint text",
    error: true,
  },
  render: (args) => <ControlledInputField {...args} />,
};

/**
 * 에러 상태에서 값이 입력된 Input 필드입니다.
 */
export const ErrorInputWithValue: Story = {
  args: {
    type: "input",
    label: "Label",
    placeholder: "Placeholder",
    hint: "Hint text",
    value: "내용을 입력했을 때",
    error: true,
  },
  render: (args) => <ControlledInputField {...args} />,
};

/**
 * 에러 상태의 Textarea 필드입니다.
 */
export const ErrorTextarea: Story = {
  args: {
    type: "textarea",
    label: "Label",
    placeholder: "Placeholder",
    hint: "Hint text",
    error: true,
    rows: 3,
  },
  render: (args) => <ControlledInputField {...args} />,
};

/**
 * 에러 상태에서 값이 입력된 Textarea 필드입니다.
 */
export const ErrorTextareaWithValue: Story = {
  args: {
    type: "textarea",
    label: "Label",
    placeholder: "Placeholder",
    hint: "Hint text",
    value: "내용을 입력했을 때",
    error: true,
    rows: 3,
  },
  render: (args) => <ControlledInputField {...args} />,
};

/**
 * 비활성화된 Input 필드입니다.
 */
export const DisabledInput: Story = {
  args: {
    type: "input",
    label: "Label",
    placeholder: "Placeholder",
    hint: "Hint text",
    disabled: true,
  },
  render: (args) => <ControlledInputField {...args} />,
};

/**
 * 최대 길이가 제한된 Input 필드입니다.
 */
export const MaxLengthInput: Story = {
  args: {
    type: "input",
    label: "Username",
    placeholder: "Enter your username",
    hint: "Maximum 20 characters",
    maxLength: 20,
  },
  render: (args) => <ControlledInputField {...args} />,
};

/**
 * 행 수가 많은 Textarea 필드입니다.
 */
export const LongTextarea: Story = {
  args: {
    type: "textarea",
    label: "Label",
    placeholder: "Placeholder",
    hint: "Hint text",
    rows: 6,
  },
  render: (args) => <ControlledInputField {...args} />,
};
