import { StaticImageData } from "next/image";

export interface ProductCardProps {
  /**
   * 제품 사진 url
   */
  productImageUrl: string | StaticImageData;

  productTitle: string;

  productPrice: number | string;
}
