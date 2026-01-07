import React from "react";
import { indicatorStlye } from "./style";
import { IndicatorProps } from "./props.type";

const Indicator = ({ size, position, type }: IndicatorProps) => {
  // type이 avatar일 경우, position prop 사용 불가
  if (type === "avatar" && position === "top") {
    throw new Error(
      "Indicator 컴포넌트의 target type이 avatar일 경우 position을 사용할 수 없습니다.",
    );
  }
  return (
    <div
      className={indicatorStlye({
        size,
        position: type === "avatar" ? "bottom" : position,
      })}
    ></div>
  );
};

export default Indicator;
