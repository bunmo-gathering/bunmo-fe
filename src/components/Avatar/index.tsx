import React from "react";
import { AvatarProps } from "./props.type";
import { User } from "lucide-react";
import { avatarStyle } from "./style";
import Indicator from "../Indicator";

const Avatar = ({ size, imageUrl, status }: AvatarProps) => {
  return (
    <div className="relative inline-block">
      <div
        className={avatarStyle({ size }) + (imageUrl && "p-0 overflow-hidden")}
      >
        {imageUrl ? (
          // 이미지 URL 있을 경우

          <img
            src={imageUrl}
            alt="ProfileImage"
            className="object-cover size-full "
          />
        ) : (
          // 이미지 URL 없을 경우 기본 아이콘
          <User size={"auto"} />
        )}
      </div>
      {status === "indicator" && <Indicator size={size} />}
      {/* {status === "button" && <Indicator size="xl" />} */}
    </div>
  );
};

export default Avatar;
