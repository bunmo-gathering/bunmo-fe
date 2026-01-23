import { LabelProps } from "./props.type";
import labelStyle from "./style";

const Label = ({
  icon: Icon,
  onTap,
  variant = "default",
  children,
}: LabelProps) => {
  return (
    <div className={labelStyle({ variant })} onClick={onTap}>
      {Icon && <Icon size={20} />}

      <span>{children}</span>
    </div>
  );
};

export default Label;
