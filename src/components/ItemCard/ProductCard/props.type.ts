import { StaticImageData } from "next/image";

interface ProductCardProps {
  /**
   * 제품 사진 url
   */
  productImageUrl: string | StaticImageData;

  /**
   * 제품 이름
   */
  productTitle: string;

  /**
   * 제품 가격
   */
  productPrice: number | string;
}

export type { ProductCardProps };
