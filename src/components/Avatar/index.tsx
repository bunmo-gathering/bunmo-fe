import { AvatarProps } from "./props.type";
import { User } from "lucide-react";
import { avatarStyle } from "./style";
import Indicator from "../Indicator";

const Avatar = ({
  size,
  imageUrl,
  status,
  indicatorPosition = "bottom-right",
}: AvatarProps) => {
  const avatar = imageUrl ? (
    <img src={imageUrl} alt="ProfileImage" className="object-cover size-full" />
  ) : (
    <User className="size-full" />
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
