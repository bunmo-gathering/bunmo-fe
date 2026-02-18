import { AvatarProps } from "./props.type";
import { User } from "lucide-react";
import { avatarStyle } from "./style";
import Indicator from "../Indicator";
import Image from "next/image";

const SIZE_MAP = {
  xs: 24, // size-6
  sm: 40, // size-10
  md: 60, // size-15
  lg: 80, // size-20
  xl: 100, // size-25
} as const;

const Avatar = ({
  size,
  imageUrl,
  status,
  indicatorPosition = "bottom-right",
}: AvatarProps) => {
  const pixelSize = SIZE_MAP[size as keyof typeof SIZE_MAP] || 60;

  const avatar = imageUrl ? (
    <Image
      src={imageUrl}
      alt="ProfileImage"
      className="object-cover size-full"
      fill
      priority
      sizes={`${pixelSize}px`}
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
