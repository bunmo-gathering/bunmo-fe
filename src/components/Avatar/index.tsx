import { AvatarProps } from "./props.type";
import { User } from "lucide-react";
import { avatarStyle } from "./style";
import Indicator from "../Indicator";
import Image from "next/image";

const Avatar = ({
  size,
  imageUrl,
  status,
  indicatorPosition = "bottom-right",
}: AvatarProps) => {
  const avatar = imageUrl ? (
    <Image
      src={imageUrl}
      alt="ProfileImage"
      className="object-cover size-full"
      fill
    />
  ) : (
    <User className="size-full text-onSurface" />
  );

  return (
    <div className="relative inline-block">
      <div className={avatarStyle({ size, hasImage: !!imageUrl })}>
        {avatar}
      </div>
      {status === "indicator" && (
        <Indicator size={size} position={indicatorPosition} />
      )}
    </div>
  );
};

export default Avatar;
