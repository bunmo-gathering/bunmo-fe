import MainFilter from "@/widgets/(web)/MainFilter";
import MainNavigationBar from "@/widgets/(web)/MainNavigationBar";
import MainSobunList from "@/widgets/(web)/MainSobunList";
import { getFirstParam } from "@/libs/getFirstParam";
import { Post } from "@/types/post";
import { Category } from "@/types/category";
import { MeetingType } from "@/types/meetingType";
import { SortOption } from "@/widgets/(web)/types/SortOptions";
import MainEmptyList from "@/widgets/(web)/MainEmptyList";

interface MainPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const MainPage = async ({ searchParams }: MainPageProps) => {
  const sp = await searchParams;

  // const area = getUserArea() || "동네 설정"
  const area = "세종시";

  // props로 넘길 searchParams 가공 (DEFAULT 처리 page 단에서 진행)
  const currentQuery = getFirstParam(sp.query) ?? "";
  const selectedDate = getFirstParam(sp.date)
    ? new Date(getFirstParam(sp.date)!)
    : new Date();
  const selectedCategory =
    (getFirstParam(sp.category) as Category) ?? "DEFAULT";
  const selectedType = (getFirstParam(sp.type) as MeetingType) ?? "DEFAULT";
  const selectedSort = (getFirstParam(sp.sort) as SortOption) ?? "DEFAULT";

  // 필터가 하나라도 적용되어 있는지에 대한 여부
  const isFilterApplied = Object.keys(sp).length > 0;

  // const posts = await getPosts({area, date, query, category, type, sort});
  // 임시 mock 데이터
  const posts: Post[] = [
    {
      postId: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=2042&auto=format&fit=crop",
      title: "논산 설향 딸기 2kg 소분하실 분!",
      date: "2026-02-20T14:30:00",
      placeName: "강남역 10번 출구 앞",
      totalPrice: 80000,
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
      postId: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1974&auto=format&fit=crop",
      title: "코스트코 베이글 1+1 같이 사요",
      date: "2026-02-21T11:00:00",
      placeName: "광명역 인근 아파트 정문",
      totalPrice: 60000,
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
      postId: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2070&auto=format&fit=crop", // 404 해결: 유효한 양파 이미지
      title: "대용량 양파 15kg 나눔",
      date: "2026-02-22T18:15:00",
      placeName: "잠실새내역 4번 출구",
      totalPrice: 0,
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
  const emptyPosts: Post[] = [];

  return (
    <div className="flex flex-col">
      {/* 네비게이션 바 */}
      <MainNavigationBar currentQuery={currentQuery} />

      {/* 필터링 옵션 */}
      <MainFilter
        selectedDate={selectedDate}
        selectedCategory={selectedCategory}
        selectedType={selectedType}
        selectedSort={selectedSort}
      />

      {posts.length ? (
        // 소분 모임 리스트
        <MainSobunList posts={posts} />
      ) : (
        // 빈 리스트
        <MainEmptyList isFilterApplied={isFilterApplied} />
      )}
    </div>
  );
};

export default MainPage;
