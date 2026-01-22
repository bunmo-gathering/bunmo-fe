import React from "react";
import { TabProps } from "./props.type";

const Tab = ({ label, onTap }: TabProps) => {
  return (
    <button
      className="flex flex-1 items-center justify-center py-3 text-body1-medium cursor-pointer"
      onClick={onTap}
    >
      {label}
    </button>
  );
};

export default Tab;
