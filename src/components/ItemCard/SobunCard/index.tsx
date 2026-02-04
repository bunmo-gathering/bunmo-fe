import UserGroup from "@/components/UserGroup";
import Image from "next/image";
import { SobunCardProps } from "./props.type";

const SobunCard = ({
  entryUsers,
  sobunTitle,
  meetingPlace,
  meetingTime,
  totalPrice,
  imageUrl,
}: SobunCardProps) => {
  return (
    <div className="flex items-center gap-6 border-b-[0.5px] border-outlineVariant">
      <div className="relative rounded-lg overflow-hidden h-32 w-32">
        <Image src={imageUrl} alt="sobun-image" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 text-onSurfaceVariant">
          <span className="text-title5-bold">{sobunTitle}</span>
          <span className="text-body2-medium">
            {meetingTime}, {meetingPlace}
          </span>
        </div>
        <span className="text-body1-bold text-onSurface">
          1인당 {Number(totalPrice % entryUsers.length)}
        </span>
        <UserGroup entryUsers={entryUsers} />
      </div>
    </div>
  );
};

export default SobunCard;
