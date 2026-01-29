import clsx from "clsx";
import { TrailingControlProps } from "./props.type";

const TrailingControl = ({ actions = [] }: TrailingControlProps) => {
  return (
    <div className="flex pr-4 py-4 gap-5 w-fit min-w-10 min-h-14">
      {actions &&
        actions.map((action, index) => {
          const Icon = action.icon;
          const isPressable = !!action.onTap;

          return (
            <button
              key={action.label || `trailing-${index}`}
              aria-label={action.label}
              onClick={action.onTap}
              className={clsx(isPressable && "cursor-pointer")}
            >
              {<Icon size={24} />}
            </button>
          );
        })}
    </div>
  );
};

export default TrailingControl;
