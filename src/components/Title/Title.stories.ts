import Title from ".";
import type { Meta } from "@storybook/react";

const meta = {
  component: Title,
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;
export default meta;

export const Default = {
  args: {
    title: "This is a Title",
    subtitle: "This is a subtitle",
    subtitleColor: "primary",
    direction: "vertical",
    size: "md",
  },
};

export const Horizontal = {
  args: {
    title: "This is a Title",
    subtitle: "This is a subtitle",
    subtitleColor: "gray",
    direction: "horizon",
    size: "lg",
  },
};
