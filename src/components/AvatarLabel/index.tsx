import React, { cloneElement, ReactNode } from "react";
import Avatar from "../Avatar";
import IconButton from "../IconButton";
import { AvatarLabelProps } from "./props.type";
import {
  avatarLabelWrapperStyle,
  avatarLabelNameStyle,
  avatarLabelDescriptionStyle,
} from "./style";
import { Plus } from "lucide-react";

const AvatarLabel = ({
  type,
  size = "md",
  direction = "horizon",
  color,
  user,
  icon = <Plus />,
  children,
}: AvatarLabelProps) => {
  const childrenCount = React.Children.count(children);
  const safeUser = type === "avatar" ? user : undefined;

  // avatar + vertical → children 제거
  const safeChildren: ReactNode =
    type === "avatar" && direction === "vertical" ? null : children;

  // children이 2개 일 경우 size: lg로 고정
  if (childrenCount === 2) {
    size = "lg";
  }

  // 아바타
  if (type === "avatar") {
    // size === md → vertical 강제
    if (size === "md") direction = "vertical";

    // diretion === vertical & children이 있는 경우 에러
    if (direction === "vertical" && childrenCount > 0) {
      throw new Error(
        "AvatarLabel의 direction이 vertical일 경우 children은 사용 할 수 없습니다.",
      );
    }
  }

  // 버튼
  if (type === "button") {
    color = "onPrimaryContainer";

    // button → direction vertical 강제
    if (direction !== "vertical") direction = "vertical";

    // children 갯수 1개로 강제
    if (childrenCount > 1) {
      throw new Error(
        "AvatarLavbel이 Button일 경우 children의 최대 개수는 1개까지만 사용 할 수 있습니다.",
      );
    }
  }

  // children 최대 2개
  if (childrenCount > 2) {
    throw new Error(
      "AvatarLabel 컴포넌트의 children은 최대 2개까지만 가능합니다.",
    );
  }

  return (
    <div className={avatarLabelWrapperStyle({ direction })}>
      {type === "avatar" && safeUser ? (
        <Avatar imageUrl={safeUser.avatarUrl} size={size} />
      ) : (
        <IconButton size={size}>
          {cloneElement(icon, {
            className: `${icon.props.className ?? ""} w-full h-full text-current`,
          })}
        </IconButton>
      )}

      <div className="flex flex-col">
        {type === "avatar" && safeUser && (
          <p className={avatarLabelNameStyle({ size, color, direction })}>
            {safeUser.nickName}
          </p>
        )}

        {safeChildren && (
          <span
            className={avatarLabelDescriptionStyle({
              color,
              direction,
            })}
          >
            {safeChildren}
          </span>
        )}
      </div>
    </div>
  );
};

export default AvatarLabel;
