import React from "react";
import { indicatorStlye } from "./style";
import { IndicatorProps } from "./props.type";

const Indicator = ({ size, position }: IndicatorProps) => {
  return (
    <div
      className={indicatorStlye({
        size,
        position,
      })}
    ></div>
  );
};

export default Indicator;
