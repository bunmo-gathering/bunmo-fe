import Chip from "@/components/Chip";
import { LeadingControl, TrailingControl } from "@/components/Control";
import { DateButtonList } from "@/components/DateButton";
import { SobunCard } from "@/components/ItemCard";
import NavigationBar from "@/components/NavigationBar";
import { formatTimeOnly } from "@/libs/formatDate";
import { getFirstParam } from "@/libs/getFirstParam";
import { BellIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

interface MainPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const MainPage = async ({ searchParams }: MainPageProps) => {
  const { query, category, type, date } = await searchParams;
  // const area = getUserArea() || "동네 설정"
  const mockArea = "세종시";
  const selectedDate = getFirstParam(date)
    ? new Date(getFirstParam(date)!)
    : new Date();

  // const groups = await getGroup({area, date, query, category, type});
  const mockGroups = [
    {
      id: "group-001",
      imageUrl:
        "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=2042&auto=format&fit=crop",
      title: "논산 설향 딸기 2kg 소분하실 분!",
      date: "2026-02-20T14:30:00",
      place: "강남역 10번 출구 앞",
      price: 80000,
      maxEntry: 4,
      entryUsers: [
        {
          userId: 1,
          userName: "김철수",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/png?seed=Felix",
        },
        {
          userId: 2,
          userName: "이영희",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/png?seed=Aner",
        },
      ],
    },
    {
      id: "group-002",
      imageUrl:
        "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1974&auto=format&fit=crop",
      title: "코스트코 베이글 1+1 같이 사요",
      date: "2026-02-21T11:00:00",
      place: "광명역 인근 아파트 정문",
      price: 60000,
      maxEntry: 5,
      entryUsers: [
        {
          userId: 3,
          userName: "박종원",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/png?seed=Midnight",
        },
      ],
    },
    {
      id: "group-003",
      imageUrl:
        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2070&auto=format&fit=crop", // 404 해결: 유효한 양파 이미지
      title: "대용량 양파 15kg 나눔",
      date: "2026-02-22T18:15:00",
      place: "잠실새내역 4번 출구",
      price: null,
      maxEntry: 3,
      entryUsers: [
        {
          userId: 4,
          userName: "최민수",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/png?seed=George",
        },
        {
          userId: 5,
          userName: "정수진",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/png?seed=Sophie",
        },
        {
          userId: 6,
          userName: "강한나",
          avatarUrl: "https://api.dicebear.com/7.x/avataaars/png?seed=Buster",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <NavigationBar>
        <LeadingControl
          size="lg"
          icon={ChevronRightIcon}
          iconPosition="right"
          label={mockArea}
          // onTap={handleSetArea} // 클라이언트 컴포넌트로 함수 전달 못함
        />
        <TrailingControl
          actions={[
            { icon: SearchIcon, label: "검색" },
            { icon: BellIcon, label: "알림" },
          ]}
        />
      </NavigationBar>
      <div className="flex flex-col gap-4 pl-4 pt-4 pb-4">
        <DateButtonList initialDate={selectedDate} />
        <div className="flex gap-2 overflow-x-scroll scrollbar-hide">
          <Chip>지역 선택</Chip>
          <Chip>카테고리</Chip>
          <Chip>대용량 상품</Chip>
          <Chip>대형 마트</Chip>
        </div>
      </div>
      {mockGroups.map((group) => (
        <Link href={`/main/${group.id}`} key={group.id}>
          <SobunCard
            entryUsers={group.entryUsers}
            price={group.price ? group.price / group.maxEntry : 0}
            sobunTitle={group.title}
            meetingTime={formatTimeOnly(group.date)}
            meetingPlace={group.place}
            imageUrl={group.imageUrl}
          />
        </Link>
      ))}
    </div>
  );
};

export default MainPage;
