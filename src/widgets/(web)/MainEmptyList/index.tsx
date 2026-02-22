import Link from "next/link";

interface MainEmptyListProps {
  isFilterApplied: boolean;
}

const MainEmptyList = ({ isFilterApplied }: MainEmptyListProps) => {
  return (
    <div className="flex px-4 py-6 justify-center">
      <div className="flex flex-col items-center py-7 gap-2">
        <span className="text-title5-bold text-onSurface">
          조건에 맞는 소분 모임이 없어요
        </span>
        {isFilterApplied && (
          <Link href="/main">
            <span className="text-body2-medium text-onSurfaceVariant underline">
              필터 옵션 해제하기
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MainEmptyList;
