"use client";
import { motion } from "motion/react";
import { DateButtonProps } from "./props.type";
import dateButtonStyle from "./style";
import dateButtonAnimation from "./animate";

const DateButton = ({
  date = new Date(),
  isSelected = false,
  type = "default",
  onTap,
}: DateButtonProps) => {
  // 요일
  const dayLabel = date.toLocaleDateString("ko-KR", { weekday: "short" });

  // 일
  const dayNumber = date.getDate();

  // 월
  const monthLabel = date.getMonth() + 1;

  // aria-label 표시용 전체 날짜
  const fullDate = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  // 날짜
  const isPressable = type === "default";

  return (
    <motion.button
      type="button"
      role="radio"
      aria-checked={isSelected}
      aria-label={fullDate}
      disabled={!isPressable}
      onClick={() => onTap?.(date)}
      className={dateButtonStyle({ isSelected, isPressable })}
      {...(isPressable ? dateButtonAnimation : {})}
    >
      {type === "default" && (
        <>
          <span className="text-body1-bold">{dayNumber}</span>
          <span className="text-caption-regular">{dayLabel}</span>
        </>
      )}

      {type === "month" && (
        <span className="text-caption-semibold text-onSurfaceVariant">
          {monthLabel}월
        </span>
      )}
    </motion.button>
  );
};

export default DateButton;
