import UserGroup from "@/components/UserGroup";
import Image from "next/image";
import { SobunCardProps } from "./props.type";
import { formatPrice } from "@/utils/formatPrice";

const SobunCard = ({
  entryUsers,
  sobunTitle,
  meetingPlace,
  meetingTime,
  totalPrice,
  imageUrl,
}: SobunCardProps) => {
  return (
    <div className="flex items-center gap-6 w-full px-4 justify-center mb-4 flex-nowrap overflow-hidden">
      <div className="flex gap-6 border-outlineVariant border-b py-5 w-full">
        {/* 상품 이미지 */}
        <div className="relative rounded-lg overflow-hidden size-30 shrink-0">
          <Image
            src={imageUrl}
            alt="sobun-image"
            className="object-cover"
            fill
          />
        </div>
        {/* 상품 정보 */}
        <div className="flex flex-col gap-2 justify-between w-full">
          <div className="flex flex-col gap-2">
            {/* 상품 제목 */}
            <span className="text-body1-medium line-clamp-1 text-onSurface">
              {sobunTitle}
            </span>

            {/* 소분 모임 시간, 장소 */}
            <span className="text-body2-medium text-onSurfaceVariant">
              {meetingTime}, {meetingPlace}
            </span>

            {/* 상품 가격 */}
            <span className="text-body1-bold text-onSurfaceVariant">
              1인당 {formatPrice(Math.ceil(totalPrice / entryUsers.length))}원
            </span>
          </div>

          {/* 소분 참여 유저 */}
          <div className="flex justify-end">
            <UserGroup entryUsers={entryUsers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobunCard;
