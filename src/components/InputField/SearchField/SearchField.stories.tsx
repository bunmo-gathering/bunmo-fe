import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import SearchField from "./";

const meta: Meta<typeof SearchField> = {
  title: "Components/InputField/SearchField",
  component: SearchField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "입력 필드에 표시되는 플레이스홀더 텍스트입니다.",
    },
    value: {
      control: "text",
      description: "입력 필드의 현재 값입니다.",
    },
    disabled: {
      control: "boolean",
      description: "입력 필드를 비활성화할지 여부를 지정합니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: {
    placeholder: "원하는 상품 및 마트 이름을 입력",
    disabled: false,
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: "원하는 상품 및 마트 이름을 입력",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "원하는 상품 및 마트 이름을 입력",
    disabled: true,
    value: "검색어",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <div className="w-100">
        <SearchField
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p className="mt-4 text-sm text-on-surface-variant">
          현재 값: {value || "(없음)"}
        </p>
      </div>
    );
  },
  args: {
    placeholder: "원하는 상품 및 마트 이름을 입력",
  },
};
