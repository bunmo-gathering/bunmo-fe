import Indicator from ".";
import type { Meta } from "@storybook/react";

const meta = {
  component: Indicator,
  tags: ["autodocs"],
} satisfies Meta<typeof Indicator>;
export default meta;

export const Default = {
  args: {
    size: "md",
    position: "bottom",
  },
};
