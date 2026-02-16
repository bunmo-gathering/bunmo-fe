import AvatarLabel from "../AvatarLabel";
import { AvatarLabelCardProps } from "./props.type";
import { UserInfo } from "../UserGroup/props.type";

const AvatarLabelCard = ({
  title,
  entryUsers,
  maxEntry,
}: AvatarLabelCardProps) => {
  return (
    <div className="bg-surfaceContainer border border-outline rounded-3xl px-5 py-4 gap-3">
      <div className="flex justify-between items-center pb-3 text-onSurface">
        <span className="text-title5-bold">{title}</span>
        <span className="text-caption-regular">최대 인원: {maxEntry}명</span>
      </div>
      <div className="grid grid-cols-4 gap-x-6 gap-y-8 justify-items-center">
        {entryUsers.map((userInfo: UserInfo) => (
          <AvatarLabel
            key={userInfo.userId}
            type="avatar"
            size="md"
            direction="vertical"
            displayName={userInfo.userName}
            avatarUrl={userInfo.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AvatarLabelCard;
