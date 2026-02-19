import { ChevronLeftIcon, MoreVerticalIcon } from "lucide-react";
import { LeadingControl, TrailingControl } from "@/components/Control";
import AvatarLabelGroup from "@/components/AvatarLabelGroup";
import NavigationBar from "@/components/NavigationBar";
import Title from "@/components/Title";
import { formatKoreanDateTime, getRemainingTime } from "@/libs/formatDate";
import AvatarLabelCard from "@/components/AvatarLabelCard";

interface PostDetailPageProps {
  params: Promise<{ postDetailId: string }>;
}

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const { postDetailId } = await params;
  // const sobunData = await getSobunData(postDetailId);
  const mockSobunData = {
    title: "코스트코 낙곱새 대용량, 2인분씩 소분하실 분!",
    category: "대용량 상품",
    hostInfo: {
      userId: 4,
      userName: "조성훈",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/png?seed=Buster",
    },
    description:
      "어제 코스트코에서 구매한 낙곱새입니다. 양이 너무 많아서 혼자 먹기 힘드네요. 깨끗하게 소독한 용기에 2인분씩 소분해 두었습니다! 유통기한 넉넉하니 편하게 연락주세요.",
    date: "2026-02-25T19:00:00",
    place: "반포역 3번 출구 앞",
    maxEntry: 5,
    entryUsers: [
      {
        userId: 4,
        userName: "조성훈",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/png?seed=Buster",
      },
      {
        userId: 7,
        userName: "김미나",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/png?seed=Mina",
      },
      {
        userId: 12,
        userName: "이정우",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/png?seed=Jasper",
      },
      {
        userId: 25,
        userName: "최유진",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/png?seed=Sassy",
      },
    ],
  };

  const remainingTime = getRemainingTime(mockSobunData.date);

  return (
    <div className="flex flex-col w-full">
      <NavigationBar>
        <LeadingControl
          icon={ChevronLeftIcon}
          // onTap={handleSetArea} // 클라이언트 컴포넌트로 함수 전달 못함
        />
        {remainingTime && (
          <span className="text-body2-medium text-onSurface">
            모임 시작까지 {remainingTime}
          </span>
        )}
        <TrailingControl
          actions={[{ icon: MoreVerticalIcon, label: "메뉴" }]}
        />
      </NavigationBar>
      <div className="flex flex-col px-4 py-6 gap-6">
        <Title
          title={mockSobunData.title}
          subtitle={mockSobunData.category}
          size="lg"
        />
        <AvatarLabelGroup
          type="blank"
          infoOption={{
            name: mockSobunData.hostInfo.userName,
            avatarUrl: mockSobunData.hostInfo.avatarUrl,
          }}
        />

        <p className="text-body2-medium text-onSurfaceVariant">
          {mockSobunData.description}
        </p>

        <Title
          size="sm"
          title={"날짜와 시간"}
          subtitle={formatKoreanDateTime(mockSobunData.date)}
          subtitleColor="gray"
        />
        <Title
          size="sm"
          title="만날 장소"
          subtitle={mockSobunData.place}
          subtitleColor="gray"
        />
        <AvatarLabelCard
          title="참가 중인 사람"
          maxEntry={mockSobunData.maxEntry}
          entryUsers={mockSobunData.entryUsers}
        />
      </div>
    </div>
  );
};

export default PostDetailPage;
