import Button from ".";
import type { Meta } from "@storybook/react";

const meta = {
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;
export default meta;

export const Primary = {
  args: {
    variant: "primary",
    size: "md",
    children: "Button",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    size: "md",
    children: "Button",
  },
};

export const Disabled = {
  args: {
    variant: "disabled",
    size: "md",
    children: "Button",
  },
};

export const Destructive = {
  args: {
    variant: "destructive",
    size: "md",
    children: "Button",
  },
};

export const Border = {
  args: {
    variant: "border",
    size: "md",
    children: "Button",
  },
};

export const Small = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Button",
  },
};

export const Medium = {
  args: {
    variant: "primary",
    size: "md",
    children: "Button",
  },
};

export const Large = {
  args: {
    variant: "primary",
    size: "lg",
    children: "Button",
  },
};

export const ExtraLarge = {
  args: {
    variant: "primary",
    size: "xl",
    children: "Button",
  },
};
