import * as React from "react";
import cn from "classnames";
import Checklist from "@/icons/Checklist";

const CardCheck = (props) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div
      onClick={() => setChecked(!checked)}
      className={cn(
        `flex flex-row bg-white dark:bg-dark-500 p-4 rounded-2xl text-sm tracking-wide mb-4 cursor-pointer items-center border border-transparent`,
        {
          "border-blue": checked,
        }
      )}
    >
      {props.children}
      <div className="flex-1"></div>
      <div
        className={cn(
          {
            "bg-blue border-transparent": checked,
            "bg-blueTransparent border-blue": !checked,
          },
          "w-8 h-8 rounded-full flex justify-center items-center border"
        )}
      >
        {checked ? <Checklist /> : null}
      </div>
    </div>
  );
};

export default CardCheck;
