import React from "react";
import { TitleProps } from "./props.type";
import { subtitleStyle, titleContainerStyle, titleStyle } from "./style";

const Title = ({
  title,
  subtitle,
  direction,
  size,
  subtitleColor,
}: TitleProps) => {
  return (
    <div
      className={titleContainerStyle({
        direction,
      })}
    >
      <div className={titleStyle({ size })}>{title}</div>
      {subtitle && (
        <div className={subtitleStyle({ size, color: subtitleColor })}>
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default Title;
