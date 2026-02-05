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
      <div className="flex gap-6 border-outlineVariant border-b py-5  w-full">
        <div className="relative rounded-lg overflow-hidden h-32 w-32 shrink-0">
          <Image
            src={imageUrl}
            alt="sobun-image"
            className="object-cover"
            fill
          />
        </div>
        <div className="flex flex-col gap-2 justify-between w-full">
          <div className="flex flex-col gap-1 text-onSurfaceVariant">
            <span className="text-title5-bold line-clamp-1">{sobunTitle}</span>
            <span className="text-body2-medium">
              {meetingTime}, {meetingPlace}
            </span>
          </div>
          <span className="text-body1-bold text-onSurface">
            1인당 {formatPrice(Math.ceil(totalPrice / entryUsers.length))}원
          </span>
          <div className="flex justify-end">
            <UserGroup entryUsers={entryUsers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobunCard;
