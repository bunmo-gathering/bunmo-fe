import { formatPrice } from "@/utils/formatPrice";
import { ProductCardProps } from "./props.type";
import Image from "next/image";

const ProductCard = ({
  productImageUrl,
  productTitle,
  productPrice,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-2 w-30.75 h-48.75">
      <div className="relative rounded-lg overflow-hidden h-32 w-32">
        <Image
          src={productImageUrl}
          className="object-cover"
          fill
          alt="product-image"
        />
      </div>
      <div className="flex flex-col gap-1 justify-between h-16">
        <span className="text-body2-medium text-onSurfaceVariant line-clamp-2">
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
