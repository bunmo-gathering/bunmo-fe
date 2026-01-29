import React, { useRef, useState, UIEvent } from "react";
import { PageControlProps } from "./props.type";
import pageControlDotStyle from "./style";

const PageControl = ({ children }: PageControlProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const { scrollLeft, clientWidth } = event.currentTarget;
    if (clientWidth === 0) return;

    // 소수점 계산을 통해 가장 가까운 페이지 인덱스 추출
    const index = Math.round(scrollLeft / clientWidth);
    if (currentIndex !== index) {
      setCurrentIndex(index);
    }
  };

  const scrollToPage = (index: number) => {
    scrollRef.current?.scrollTo({
      left: index * scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col w-full gap-5 items-center justify-center">
      {/* 컨텐츠 부분 */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex flex-1 overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-hide"
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="flex w-full h-full justify-center shrink-0 snap-center"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Page Control 부분 */}
      <div className="flex w-full justify-center px-3 py-2 gap-2">
        {React.Children.map(children, (_, index) => {
          const isSelected = index === currentIndex;
          return (
            <div
              key={index}
              onClick={() => scrollToPage(index)}
              className={pageControlDotStyle({ isSelected })}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default PageControl;
