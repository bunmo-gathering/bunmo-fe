import Indicator from ".";
import type { Meta } from "@storybook/react";

const meta = {
  component: Indicator,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg", "xl"],
    },

    position: {
      option: ["top-left", "top-right", "bottom-right", "bottom-left"],
      if: { arg: "type", eq: "avatar" },
    },
  },
} satisfies Meta<typeof Indicator>;
export default meta;

export const Default = {
  args: {
    size: "md",
    position: "bottom-right",
    type: "avatar",
  },
};
