import { formatPrice } from "@/utils/formatPrice";
import { ProductCardProps } from "./props.type";
import Image from "next/image";

const ProductCard = ({
  productImageUrl,
  productTitle,
  productPrice,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-2 w-30.75">
      <div className="rounded-lg overflow-hidden h-32">
        <Image
          src={productImageUrl}
          className="object-cover"
          alt="product-image"
        />
      </div>
      <div className="flex flex-col gap-1 justify-between">
        <span className="text-body2-medium text-onSurfaceVariant">
          {productTitle}
        </span>
        <span className="text-body2-semibold text-onSurface">
          {formatPrice(productPrice)}원
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
