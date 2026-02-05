import React, { Children } from "react";
import Avatar from "../Avatar";
import IconButton from "../IconButton";
import { AvatarLabelProps } from "./props.type";
import {
  avatarLabelWrapperStyle,
  avatarLabelNameStyle,
  avatarTextWrapper,
} from "./style";
import { Plus } from "lucide-react";

const AvatarLabel = ({
  type,
  size = "md",
  direction = "horizon",
  displayName,
  avatarUrl,
  description = [],
  children,
}: AvatarLabelProps) => {
  const descriptionCount = description ? description.length : 0;
  const icon = children || <Plus />;
  const childrenCount = Children.count(children);

  // 아바타
  if (type === "avatar") {
    if (size === "sm" && descriptionCount > 1) {
      throw new Error(
        "Avatar 타입의 sm 사이즈는 description을 하나만 사용 할 수 있습니다.",
      );
    }

    // direction === vertical & description이 있는 경우 에러
    if (direction === "vertical" && descriptionCount > 0) {
      throw new Error(
        "AvatarLabel의 direction이 vertical일 경우 description은 사용 할 수 없습니다.",
      );
    }

    // description 최대 2개
    if (descriptionCount > 2) {
      throw new Error(
        "AvatarLabel 컴포넌트의 description은 최대 2개까지만 가능합니다.",
      );
    }
  }

  // 버튼
  if (type === "button") {
    // button → direction vertical 강제
    if (direction !== "vertical") direction = "vertical";

    // description 갯수 1개로 강제
    if (descriptionCount > 1) {
      throw new Error(
        "AvatarLabel이 Button일 경우 description의 최대 개수는 1개까지만 사용 할 수 있습니다.",
      );
    }

    if (childrenCount !== 1) {
      throw new Error(
        "AvatarLabel Button type은 1개의 아이콘 children이 필요합니다.",
      );
    }
  }

  return (
    <div className={avatarLabelWrapperStyle({ direction })}>
      {type === "avatar" ? (
        <Avatar imageUrl={avatarUrl} size={size} />
      ) : (
        <IconButton size={size} variant="primaryContainer">
          {React.cloneElement(icon, {
            className: "w-full h-full text-onPrimaryContainer",
          })}
        </IconButton>
      )}

      <div className={avatarTextWrapper({ size, direction })}>
        <p className={avatarLabelNameStyle({ size, direction })}>
          {displayName}
        </p>

        {descriptionCount > 0 && type === "avatar" && (
          <>
            {Object.entries(description).map(([key, value]) => (
              <span
                className="flex flex-col text-caption-regular text-onSurfaceVariant justify-center"
                key={key}
              >
                {value}
              </span>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AvatarLabel;
