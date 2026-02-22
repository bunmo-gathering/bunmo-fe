"use client";

import Chip from "@/components/Chip";
import { DateButtonList } from "@/components/DateButton";
import { Category, CategoryMap } from "@/types/category";
import { MeetingType, MeetingTypeMap } from "@/types/meetingType";
import { ChevronDownIcon } from "lucide-react";
import { SortOption, SortOptionMap } from "../types/SortOptions";
import { formatDate } from "@/libs/formatDate";
import { useFilter } from "../hooks/useFilter";

interface MainFilterProps {
  selectedDate: Date;
  selectedCategory: Category;
  selectedType: MeetingType;
  selectedSort: SortOption;
}

const MainFilter = ({
  selectedDate,
  selectedCategory,
  selectedType,
  selectedSort,
}: MainFilterProps) => {
  const { updateFilter } = useFilter();

  const handleChangeDate = (date: Date) => {
    const today = new Date();
    // 오늘인 경우 searchParams 반영 x
    if (date.toDateString() === today.toDateString()) {
      updateFilter("date", "");
    } else {
      const formattedDate = formatDate(date);
      updateFilter("date", formattedDate);
    }
  };

  const handleTapCategory = () => {
    // 바텀 시트 호출
    // default: 전체 (searchParams 없음)
    // 반환 값으로 searchParams 수정 후 router replace
    const category = "";
    updateFilter("category", category);
  };
  const handleTapType = () => {
    // 바텀 시트 호출
    // default: 전체 (searchParams 없음)
    // 반환 값으로 searchParams 수정 후 router replace
    const type = "";
    updateFilter("type", type);
  };
  const handleTapSort = () => {
    // 바텀 시트 호출
    // default: 최신 순 (NEWEST)
    // 반환 값으로 searchParams 수정 후 router replace
    const sort = "";
    updateFilter("sort", sort);
  };

  return (
    <div className="flex flex-col gap-4 pl-4 pt-4 pb-4">
      <DateButtonList initialDate={new Date()} onSelect={handleChangeDate} />
      <div className="flex gap-2 overflow-x-scroll scrollbar-hide">
        {/* 카테고리 선택 */}
        <Chip
          defaultValue="카테고리"
          value={CategoryMap[selectedCategory]}
          onTap={handleTapCategory}
        />

        {/* 모임 유형 선택 */}
        <Chip
          defaultValue="모임 유형"
          value={MeetingTypeMap[selectedType]}
          onTap={handleTapType}
        />

        {/* 정렬 선택 */}
        <Chip
          defaultValue="최신 순"
          value={SortOptionMap[selectedSort]}
          icon={ChevronDownIcon}
          onTap={handleTapSort}
        />
      </div>
    </div>
  );
};

export default MainFilter;
