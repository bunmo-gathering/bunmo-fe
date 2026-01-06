import React from "react";
import { indicatorStlye } from "./style";
import { IndicatorProps } from "./props.type";

const Indicator = ({ size }: IndicatorProps) => {
  return <div className={indicatorStlye({ size })}></div>;
};

export default Indicator;
