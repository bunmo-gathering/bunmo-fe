import React, { isValidElement } from "react";
import { NavigationBarProps } from "./props.type";
import { LeadingControl, TrailingControl } from "../Control";

const NavigationBar = ({ children }: NavigationBarProps) => {
  const childrenArray = React.Children.toArray(children);

  let leading: React.ReactNode = null;
  let center: React.ReactNode = null;
  let trailing: React.ReactNode = null;

  childrenArray.forEach((child) => {
    if (!isValidElement(child)) {
      center = child;
      return;
    }

    const childType = child.type as any;
    if (childType === LeadingControl || childType.role === "leading") {
      leading = child;
    } else if (childType === TrailingControl || childType.role === "trailing") {
      trailing = child;
    } else {
      center = child;
    }
  });

  if (!leading) leading = <LeadingControl />;
  if (!trailing) trailing = <TrailingControl />;

  return (
    <div className="flex w-full justify-between items-center">
      {leading}
      {center}
      {trailing}
    </div>
  );
};

export default NavigationBar;
