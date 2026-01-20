import React from "react";
import IconProps from "./props.type";
import iconStyle from "./style";

const Icon = ({
  size,
  color,
  strokeWidth = 1.5,
  icon: Icon,
  hasIndicator,
}: IconProps) => {
  return (
    <div className="relative inline-flex">
      <Icon className={iconStyle({ size, color })} strokeWidth={strokeWidth} />
      {/* {hasIndicator && <Indicator />} */}
    </div>
  );
};

export default Icon;
