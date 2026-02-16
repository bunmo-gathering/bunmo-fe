import { AvatarLabelGroupProps } from "./props.type";
import AvatarLabel from "../AvatarLabel";
import { formatPrice } from "@/utils/formatPrice";
import Button from "../Button";
import { PlusIcon, XIcon } from "lucide-react";
import avatarLabelGroupWrapperStyle from "./style";

const AvatarLabelGroup = (props: AvatarLabelGroupProps) => {
  const { infoOption, type } = props;

  const isActive = type === "toggle" ? props.toggleOption.isActive : true;

  const handleToggle = () => {
    if (type === "toggle") {
      if (props.toggleOption.onChange) {
        props.toggleOption.onChange(!isActive);
      }
    }
  };

  return (
    <div className={avatarLabelGroupWrapperStyle({ isActive })}>
      {/* 좌측 사용자 프로필 */}
      <AvatarLabel
        type="avatar"
        size="sm"
        direction="horizon"
        displayName={infoOption.name}
        description={infoOption.description ? [infoOption.description] : []}
        avatarUrl={infoOption.avatarUrl}
      />

      {/* 우측 가격 정보 및 액션 */}
      <div className="flex gap-4 items-center">
        {/* 가격 정보 */}
        {infoOption.price && isActive && (
          <span className="text-body1-medium text-onSurfaceVariant underline">
            {formatPrice(infoOption.price)}원
          </span>
        )}

        {/* 버튼 타입의 경우 */}
        {type === "button" && (
          <Button size="sm" onTap={props.actionOption.onTap}>
            {props.actionOption.label}
          </Button>
        )}

        {/* 아이콘 타입의 경우 */}
        {type === "icon" && (
          <props.actionOption.icon
            size={24}
            className="cursor-pointer text-onSurface"
            onClick={props.actionOption.onTap}
          />
        )}

        {/* 토글 타입의 경우 */}
        {type === "toggle" && (
          <div className="cursor-pointer" onClick={handleToggle}>
            {isActive ? (
              <XIcon size={20} className="text-outline" />
            ) : (
              <PlusIcon size={20} className="text-primary" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarLabelGroup;
