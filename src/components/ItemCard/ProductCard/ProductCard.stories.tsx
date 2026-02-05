import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from ".";
import { ProductCardProps } from "./props.type";
import { product } from "../../../../.storybook/assets/products/index";

/**
 * 쿠팡 혹은 여러 사이트의 상품 목록 데이터에 대한 카드 컴포넌트
 */
const meta: Meta<typeof ProductCard> = {
  title: "Components/ItemCard/ProductCard",
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
    imageUrl: product[0], // StaticImageData → .src 사용
    title: "오 로즈 오 드 뚜왈렛, 100m",
    price: 175000,
  },
  {
    imageUrl: product[1],
    title: "썽봉 베르가모트 & 로즈 소바주 (오드코롱, 50ml)",
    price: 79000,
  },
  {
    imageUrl: product[2],
    title: "한돈 생 삼겹살, 3kg",
    price: 36700,
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
