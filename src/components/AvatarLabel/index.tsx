import Avatar from "../Avatar";
import IconButton from "../IconButton";
import { AvatarLabelProps } from "./props.type";
import { Plus } from "lucide-react";
import {
  avatarLabelWrapperStyle,
  avatarLabelNameStyle,
  avatarTextWrapper,
} from "./style";

const AvatarLabel = ({
  type,
  size = "md",
  direction = "horizon",
  displayName,
  avatarUrl,
  description,
  icon: Icon = Plus,
  onTap,
}: AvatarLabelProps) => {
  const descriptionCount = description ? description.length : 0;

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
  }

  return (
    <div className={avatarLabelWrapperStyle({ size, direction })}>
      {type === "avatar" ? (
        <Avatar imageUrl={avatarUrl} size={size} />
      ) : (
        <IconButton size={size} variant="primaryContainer" onTap={onTap}>
          <Icon className="w-full h-full text-onPrimaryContainer" />
        </IconButton>
      )}

      <div className={avatarTextWrapper({ size, direction })}>
        {/* 유저 이름 */}
        <p className={avatarLabelNameStyle({ size, direction })}>
          {displayName}
        </p>

        {/* 설명 (최대 2줄) */}
        {descriptionCount > 0 && type === "avatar" && (
          <>
            {description!.map((value, index) => (
              <span
                className="flex flex-col text-caption-regular text-onSurfaceVariant justify-center"
                key={index}
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
