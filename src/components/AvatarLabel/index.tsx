import React from "react";
import Avatar from "../Avatar";
import IconButton from "../IconButton";
import { AvatarLabelProps } from "./props.type";
import { avatarLabelWrapperStyle, avatarLabelNameStyle } from "./style";
import { Plus } from "lucide-react";

const AvatarLabel = ({
  type,
  size = "md",
  direction = "horizon",
  color,
  displayName,
  avatarUrl,
  description = {},
  children,
}: AvatarLabelProps) => {
  const descriptionCount = description ? Object.keys(description).length : 0;
  const icon = children || <Plus />;
  // 아바타
  if (type === "avatar") {
    // size === md → vertical 강제
    if (size === "md") direction = "vertical";

    // direction === vertical & description이 있는 경우 에러
    if (direction === "vertical" && descriptionCount > 0) {
      throw new Error(
        "AvatarLabel의 direction이 vertical일 경우 description은 사용 할 수 없습니다.",
      );
    }
  }

  // 버튼
  if (type === "button") {
    color = "onPrimaryContainer";

    // button → direction vertical 강제
    if (direction !== "vertical") direction = "vertical";

    // description 갯수 1개로 강제
    if (descriptionCount > 1) {
      throw new Error(
        "AvatarLabel이 Button일 경우 description의 최대 개수는 1개까지만 사용 할 수 있습니다.",
      );
    }
  }

  // description 최대 2개
  if (descriptionCount > 2) {
    throw new Error(
      "AvatarLabel 컴포넌트의 description은 최대 2개까지만 가능합니다.",
    );
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

      <div className="flex flex-col h-full justify-between">
        {type === "avatar" && (
          <p className={avatarLabelNameStyle({ size, direction })}>
            {displayName}
          </p>
        )}

        {descriptionCount > 0 && (
          <span className="flex flex-col text-caption-regular text-onSurfaceVariant justify-center">
            {Object.entries(description).map(([key, value]) => (
              <span key={key}>{value}</span>
            ))}
          </span>
        )}
      </div>
    </div>
  );
};

export default AvatarLabel;
