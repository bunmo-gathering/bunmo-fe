import Avatar from "../Avatar";
import IconButton from "../IconButton";
import { AvatarLabelProps } from "./props.type";
import {
  avatarLabelWrapperStyle,
  avatarLabelNameStyle,
  avatarLabelDescriptionStyle,
} from "./style";

const AvatarLabel = (props: AvatarLabelProps) => {
  const {
    type,
    size = "md",
    direction = "horizon",
    description,
    color,
  } = props;

  return (
    <div className={avatarLabelWrapperStyle({ direction })}>
      {/* leading */}
      {type === "avatar" ? (
        <Avatar imageUrl={props.user?.avatarUrl} size={size} />
      ) : (
        <IconButton size={size}>{props.icon}</IconButton>
      )}

      {/* text */}
      <div className="flex flex-col justify-center items-center">
        <p className={avatarLabelNameStyle({ size, color, direction })}>
          {props.user?.nickName}
        </p>

        {description && (
          <span className={avatarLabelDescriptionStyle({ color })}>
            {description}
          </span>
        )}
      </div>
    </div>
  );
};

export default AvatarLabel;
