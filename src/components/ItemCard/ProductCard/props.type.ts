import { StaticImageData } from "next/image";

interface ProductCardProps {
  /**
   * 제품 사진 url
   */
  imageUrl: string | StaticImageData;

  /**
   * 제품 이름
   */
  title: string;

  /**
   * 제품 가격
   */
  price: number;
}

export type { ProductCardProps };
