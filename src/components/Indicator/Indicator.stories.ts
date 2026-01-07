import Indicator from ".";
import type { Meta } from "@storybook/react";

const meat = {
  component: Indicator,
  tags: ["autodocs"],
} satisfies Meta<typeof Indicator>;

export const Default = {
  args: {
    size: "md",
  },
};
