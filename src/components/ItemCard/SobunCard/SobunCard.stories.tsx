import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from ".";
import { product } from "../../../../.storybook/assets/products/index";

/**
 * Storybook Meta
 */
const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;
