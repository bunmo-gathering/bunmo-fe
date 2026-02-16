import { formatPrice } from "@/utils/formatPrice";
import { ProductCardProps } from "./props.type";
import Image from "next/image";

const ProductCard = ({ imageUrl, title, price }: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-2 w-30.75 h-48.75">
      <div className="relative rounded-lg overflow-hidden h-32 w-32 ">
        <Image
          src={imageUrl}
          className="object-cover"
          fill
          alt="product-image"
        />
      </div>
      <div className="flex flex-col gap-1 justify-between h-16">
        <span className="text-body2-medium text-onSurfaceVariant line-clamp-2">
          {title}
        </span>
        <span className="text-body2-semibold text-onSurface">
          {formatPrice(price)}원
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
