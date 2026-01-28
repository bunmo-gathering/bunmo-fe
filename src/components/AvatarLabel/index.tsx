import Avatar from "../Avatar";
import AvatarLabelProps from "./props.type";

const AvatarLabel = ({ size, type, direction, children }: AvatarLabelProps) => {
  return (
    <div className="flex">
      <Avatar />
      <div>
        {children.map((el) => (
          <p>{el}</p>
        ))}
      </div>
    </div>
  );
};

export default AvatarLabel;
// 이거 삭제 할 컴포넌트
