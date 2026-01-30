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

  // button → user 제거
  if (type === "button" && user) {
    user = undefined;
  }

  // button → direction vertical 강제
  if (type === "button" && direction !== "vertical") {
    direction = "vertical";
  }

  // avatar & md → 방향 강제 vertical
  if (type === "avatar" && size === "md") {
    direction = "vertical";
  }

  // children이 2개 일 경우 size: lg로 고정
  if (childrenCount === 2) {
    size = "lg";
  }

  if (type === "button") {
    color = "onPrimaryContainer";
  }

  // avatar + vertical → children 제거
  const safeChildren: ReactNode =
    type === "avatar" && direction === "vertical" ? null : children;

  // children 최대 2개
  if (childrenCount > 2) {
    throw new Error(
      "AvatarLabel 컴포넌트의 children은 최대 2개까지만 가능합니다.",
    );
  }

  // vertical & avatar → children 사용 x
  if (direction === "vertical" && childrenCount > 1 && type === "avatar") {
    throw new Error(
      "AvatarLabel의 direction이 vertical일 경우 children은 사용 할 수 없습니다.",
    );
  }

  if (direction === "vertical" && type === "button" && childrenCount > 1) {
    throw new Error(
      "AvatarLavbel이 Button일 경우 children의 최대 개수는 1개까지만 사용 할 수 있습니다.",
    );
  }

  return (
    <div className={avatarLabelWrapperStyle({ direction })}>
      {type === "avatar" && user ? (
        <Avatar imageUrl={user.avatarUrl} size={size} />
      ) : (
        <IconButton size={size}>
          {cloneElement(icon, {
            className: `${icon.props.className ?? ""} w-full h-full text-current`,
          })}
        </IconButton>
      )}

      <div className="flex flex-col">
        {type === "avatar" && user && (
          <p className={avatarLabelNameStyle({ size, color, direction })}>
            {user.nickName}
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
