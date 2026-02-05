import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from ".";
import { ProductCardProps } from "./props.type";
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

/**
 * 임시 데이터
 */
const mockProducts: ProductCardProps[] = [
  {
    productImageUrl: product[0], // StaticImageData → .src 사용
    productTitle: "오 로즈 오 드 뚜왈렛, 100m",
    productPrice: 175000,
  },
  {
    productImageUrl: product[1],
    productTitle: "썽봉 베르가모트 & 로즈 소바주 (오드코롱, 50ml)",
    productPrice: "79000",
  },
  {
    productImageUrl: product[2],
    productTitle: "한돈 생 삼겹살, 3kg",
    productPrice: "36700",
  },
];

/**
 * Single Product
 */
export const SingleProduct: Story = {
  args: mockProducts[0],
  render: (args) => <ProductCard {...args} />,
};

/**
 * Two Products
 */
export const TwoProducts: Story = {
  render: () => (
    <div className="flex gap-4">
      {mockProducts.slice(0, 2).map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  ),
};

/**
 * Three Products
 */
export const ThreeProducts: Story = {
  render: () => (
    <div className="flex gap-4">
      {mockProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  ),
};
