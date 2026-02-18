"use client";

import { AvatarLabelGroupProps } from "./props.type";
import AvatarLabel from "../AvatarLabel";
import { formatPrice } from "@/utils/formatPrice";
import Button from "../Button";
import { PlusIcon, XIcon } from "lucide-react";
import avatarLabelGroupWrapperStyle from "./style";
import { useState } from "react";

const AvatarLabelGroup = (props: AvatarLabelGroupProps) => {
  const { infoOption, type } = props;

  const [isActive, setIsActive] = useState(
    type === "toggle" ? props.toggleOption.isActive : true,
  );

  const handleToggle = () => {
    if (type === "toggle") {
      setIsActive((prev) => !prev);

      if (props.toggleOption.onChange) {
        props.toggleOption.onChange(!isActive);
      }
    }
  };

  const actionComponent = () => {
    switch (props.type) {
      case "button":
        return (
          <Button size="sm" onTap={props.actionOption.onTap}>
            {props.actionOption.label}
          </Button>
        );

      case "icon":
        const Icon = props.actionOption.icon;
        return (
          Icon && (
            <Icon
              size={24}
              className="cursor-pointer text-onSurface"
              onClick={props.actionOption.onTap}
            />
          )
        );

      case "toggle":
        return (
          <div className="cursor-pointer" onClick={handleToggle}>
            {isActive ? (
              <XIcon size={20} className="text-outline" />
            ) : (
              <PlusIcon size={20} className="text-primary" />
            )}
          </div>
        );

      default:
        return null;
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

        {/* type별 액션 컴포넌트 (button, icon, toggle, blank) */}
        {actionComponent()}
      </div>
    </div>
  );
};

export default AvatarLabelGroup;
