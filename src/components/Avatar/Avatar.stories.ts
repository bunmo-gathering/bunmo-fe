import Avatar from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { cats } from "../../../.storybook/assets/avatars";

const meta = {
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
    },

    status: {
      options: ["none", "indicator", "button"],
      if: { arg: "size", neq: "xs" },
    },

    indicatorPosition: {
      options: ["top-right", "bottom-right", "top-left", "bottom-left"],
      if: { arg: "status", eq: "indicator" },
    },
  },
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: "md",
    status: "none",
    imageUrl: undefined,
  },
};

export const WithImage: Story = {
  args: {
    size: "md",
    status: "none",
    imageUrl: cats[4].src,
  },
};

export const WithIndicatorBottomRight: Story = {
  args: {
    size: "md",
    status: "indicator",
    indicatorPosition: "bottom-right",
    imageUrl: undefined,
  },
};

export const WithIndicatorBottomLeft: Story = {
  args: {
    size: "md",
    status: "indicator",
    indicatorPosition: "bottom-left",
    imageUrl: undefined,
  },
};

export const WithIndicatorTopRight: Story = {
  args: {
    size: "md",
    status: "indicator",
    indicatorPosition: "top-right",
    imageUrl: undefined,
  },
};

export const WithIndicatorTopLeft: Story = {
  args: {
    size: "md",
    status: "indicator",
    indicatorPosition: "top-left",
    imageUrl: undefined,
  },
};

export const ImageWithIndicatorBottomRight: Story = {
  args: {
    size: "md",
    status: "indicator",
    indicatorPosition: "bottom-right",
    imageUrl: cats[4].src,
  },
};

export const ImageWithIndicatorBottomLeft: Story = {
  args: {
    size: "md",
    status: "indicator",
    indicatorPosition: "bottom-left",
    imageUrl: cats[4].src,
  },
};

export const ImageWithIndicatorTopRight: Story = {
  args: {
    size: "md",
    status: "indicator",
    indicatorPosition: "top-right",
    imageUrl: cats[4].src,
  },
};

export const ImageWithIndicatorTopLeft: Story = {
  args: {
    size: "md",
    status: "indicator",
    indicatorPosition: "top-left",
    imageUrl: cats[4].src,
  },
};
