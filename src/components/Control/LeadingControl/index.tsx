import { LeadingControlProps } from "./props.type";
import { leadingControlLabelStyle, leadingControlStyle } from "./style";

const LeadingControl = ({
  icon: Icon,
  iconPosition = "left",
  label,
  size = "sm",
  onTap,
}: LeadingControlProps) => {
  if (!Icon && !label) {
    throw new Error("icon props와 label props 둘 다 생략할 수 없습니다.");
  }

  const isPressable = !!onTap;

  const contentGap = iconPosition === "left";

  return (
    <div
      className={leadingControlStyle({ isPressable, contentGap })}
      onClick={onTap}
    >
      {Icon && iconPosition === "left" && <Icon size={24} />}

      {label && <h2 className={leadingControlLabelStyle({ size })}>{label}</h2>}

      {Icon && iconPosition === "right" && <Icon size={24} />}
    </div>
  );
};

export default LeadingControl;
