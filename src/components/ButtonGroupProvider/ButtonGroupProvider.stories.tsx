import { Meta, StoryObj } from "@storybook/react";
import ButtonGroupProvider from ".";
import Button from "../button";
import React, { ComponentProps } from "react";

const meta = {
  component: ButtonGroupProvider,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroupProvider>;
export default meta;
type Story = StoryObj<typeof ButtonGroupProvider>;

export const Default: Story = {
  args: {
    type: "normal",
  },
  argTypes: {
    children: { control: false },
    size: {
      if: { arg: "type", eq: "normal" },
    },
  },
  render: (args) => (
    <ButtonGroupProvider {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </ButtonGroupProvider>
  ),
};

export const ActionSingle: Story = {
  args: {
    type: "action",
  },
  parameters: {
    controls: { disable: true },
  },
  render: (args) => (
    <ButtonGroupProvider {...args}>
      <Button>Button 1</Button>
    </ButtonGroupProvider>
  ),
};

export const ActionDuo: Story = {
  args: {
    type: "action",
  },
  parameters: {
    controls: { disable: true },
  },
  render: (args) => (
    <>
      <ButtonGroupProvider {...args}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroupProvider>
    </>
  ),
};

export const NormalSingle: Story = {
  args: {
    type: "normal",
  },
  argTypes: {
    children: { control: false },
    type: { control: false },
  },
  render: (args) => (
    <>
      <ButtonGroupProvider {...args}>
        <Button>Button 1</Button>
      </ButtonGroupProvider>
    </>
  ),
};

export const NormalMultiple: Story = {
  args: {
    type: "normal",
  },
  argTypes: {
    children: { control: false },
    type: { control: false },
  },
  render: (args) => (
    <>
      <ButtonGroupProvider {...args}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroupProvider>
    </>
  ),
};
