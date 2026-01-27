"use client";
import React, { useMemo, ReactNode } from "react";
import { motion } from "motion/react";
import { MoreHorizontal, Plus, Check, X } from "lucide-react";
import chipStyle from "./style";
import { chipAnimation } from "./animate";
import type {
  ChipProps,
  ChipIconType,
  ChipRightActionType,
  ChipClickableIconType,
} from "./props.type";

const iconMap: Record<ChipIconType, React.ReactNode> = {
  plus: <Plus size={20} />,
  check: <Check size={20} />,
};

// 우측 액션 아이콘 맵핑
const rightActionIconMap: Record<
  ChipRightActionType,
  { icon: React.ReactNode; label: string }
> = {
  more: { icon: <MoreHorizontal size={20} />, label: "More" },
  close: { icon: <X size={20} />, label: "Close" },
};

// ChipIconType 타입 가드 함수
const isChipIconType = (value: string): value is ChipIconType => {
  return value in iconMap;
};

// ChipRightActionType 타입 가드 함수
const isChipRightActionType = (value: string): value is ChipRightActionType => {
  return value in rightActionIconMap;
};

const Chip = ({
  text,
  variant = "default",
  icon,
  rightAction,
  onClick,
  onIconClick,
}: ChipProps) => {
  // rightAction prop이 명시되지 않은 경우, selected 상태이면 기본적으로 close 표시
  const showRightAction =
    rightAction ?? (variant === "selected" ? "close" : undefined);

  // icon prop이 문자열인 경우 매핑된 아이콘을 사용, ReactNode인 경우 직접 사용
  const renderedIcon = useMemo(() => {
    if (!icon) return null;
    if (typeof icon === "string" && isChipIconType(icon)) {
      return iconMap[icon];
    }
    if (typeof icon !== "string") {
      return icon;
    }
    return null;
  }, [icon]);

  return (
    <motion.button
      type="button"
      className={`${chipStyle({ variant })}`}
<<<<<<< HEAD
      initial={false}
=======
>>>>>>> 258ef503a2ba9fb2abde84c0b90b77182af6df91
      whileTap={chipAnimation.whileTap}
      aria-pressed={variant === "selected"}
      onClick={onClick}
    >
      {/* 왼쪽 아이콘 */}
      {renderedIcon && (
        <button
          type="button"
          className="flex items-center justify-center text-current"
          aria-label="Icon action"
          onClick={(e) => {
            e.stopPropagation();
            if (typeof icon === "string" && isChipIconType(icon)) {
              onIconClick?.(icon);
            }
          }}
        >
          {renderedIcon}
        </button>
      )}

      <span className="text-body2-medium">{text}</span>

      {/* 우측 액션 아이콘 */}
      {showRightAction && (
        <button
          type="button"
          aria-label={rightActionIconMap[showRightAction].label}
          onClick={(e) => {
            e.stopPropagation();
            onIconClick?.(showRightAction);
          }}
        >
          <span className="text-current">
            {rightActionIconMap[showRightAction].icon}
          </span>
        </button>
      )}
    </motion.button>
  );
};

export default Chip;
