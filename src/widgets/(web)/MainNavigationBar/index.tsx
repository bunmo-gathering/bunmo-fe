"use client";

import { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import { LeadingControl, TrailingControl } from "@/components/Control";
import { SearchField } from "@/components/InputField";
import NavigationBar from "@/components/NavigationBar";
import {
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "lucide-react";

interface MainNavigationBarProps {
  currentQuery?: string;
}

const MainNavigationBar = ({ currentQuery }: MainNavigationBarProps) => {
  const { updateFilter } = useFilter();
  const [query, setQuery] = useState<string>(currentQuery ?? "");

  // 검색 창
  const [isSearchFieldOpen, setIsSearchFieldOpen] =
    useState<boolean>(!!currentQuery);

  const handleTapArea = () => {
    // 바텀시트 호출 (위치 권한 허용)
    console.log("위치 정보 클릭됨");
  };

  const handleOpenNotification = () => {
    // 알림 아이콘 클릭
    console.log("알림 아이콘 클릭됨");
  };

  // 검색 창 닫기 함수
  const handleCancelSearch = () => {
    setQuery("");
    setIsSearchFieldOpen(false);
    updateFilter("query", "");
  };

  // 검색 시 실행할 함수
  const handleSearch = () => {
    updateFilter("query", query);
  };

  const handleKeyDownEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      {isSearchFieldOpen ? (
        // 검색 창 확장
        <NavigationBar>
          <LeadingControl
            size="lg"
            icon={ChevronLeftIcon}
            onTap={handleCancelSearch}
          />
          <div className="flex w-full px-4 py-1.5">
            <SearchField
              placeholder="검색어를 입력하세요."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onSearchButtonTap={handleSearch}
              onKeyDown={handleKeyDownEnter}
            />
          </div>
        </NavigationBar>
      ) : (
        // 검색 창 축소
        <NavigationBar>
          <LeadingControl
            size="lg"
            icon={ChevronRightIcon}
            iconPosition="right"
            label={"세종시"}
            onTap={handleTapArea}
          />
          <TrailingControl
            actions={[
              {
                icon: SearchIcon,
                label: "검색",
                onTap: () => setIsSearchFieldOpen(true),
              },
              {
                icon: BellIcon,
                label: "알림",
                onTap: handleOpenNotification,
              },
            ]}
          />
        </NavigationBar>
      )}
    </>
  );
};

export default MainNavigationBar;
