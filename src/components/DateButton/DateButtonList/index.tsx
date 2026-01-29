"use client";
import { Fragment, useMemo, useState } from "react";
import { DateButtonListProps } from "./props.type";
import DateButton from "../DateButton";
import clsx from "clsx";

const DateButtonList = ({
  initialDate = new Date(),
  onSelect,
  range = 14,
  showMonth = true,
}: DateButtonListProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate);

  // 초기값(initialDate) 기준으로 범위(range) 계산
  const dates = useMemo(() => {
    return Array.from({ length: range }, (_, index) => {
      const date = new Date(initialDate);
      date.setDate(date.getDate() + index);
      return date;
    });
  }, [initialDate, range]);

  // 현재 선택된 날짜 확인 용 함수
  const isSameDay = (displayDate: Date, selectedDate: Date) =>
    displayDate.getDate() === selectedDate.getDate() &&
    displayDate.getMonth() === selectedDate.getMonth() &&
    displayDate.getFullYear() === selectedDate.getFullYear();

  // 날짜 선택 시 실행할 함수
  const handleSelect = (date: Date) => {
    setSelectedDate(date);
    onSelect?.(date);
  };

  return (
    <nav className="w-full">
      <div
        role="radiogroup"
        className={clsx(
          "flex gap-2 items-center",
          "overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory touch-pan-x",
        )}
      >
        {dates.map((date, index) => {
          // 맨 앞이거나(index === 0), 해당 날짜가 1일인 경우 월 표시 추가
          const isFirstItem = index === 0;
          const isFirstOfMonth = date.getDate() === 1;
          const showMonthLabel = showMonth && (isFirstItem || isFirstOfMonth);

          return (
            <Fragment key={date.toISOString()}>
              {/* 월 표시용 버튼 (클릭 불가/애니메이션 없음) */}
              {showMonthLabel && (
                <DateButton date={date} type="month" isSelected={false} />
              )}

              {/* 실제 날짜 선택 버튼 */}
              <DateButton
                date={date}
                type="default"
                isSelected={isSameDay(date, selectedDate)}
                onTap={handleSelect}
              />
            </Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default DateButtonList;
