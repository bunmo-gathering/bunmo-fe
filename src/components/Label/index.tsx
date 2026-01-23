import { LabelProps } from "./props.type";
import labelStyle from "./style";

const Label = ({
  icon: Icon,
  onTap,
  variant = "default",
  children,
  isBlock = false,
}: LabelProps) => {
  const isPressable = !!onTap;

  return (
    <div
      className={labelStyle({ variant, isPressable, isBlock })}
      onClick={onTap}
    >
      {Icon && <Icon size={20} />}

      <span>{children}</span>
    </div>
  );
};

export default Label;
