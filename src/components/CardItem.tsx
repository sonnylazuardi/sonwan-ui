import * as React from "react";
import cn from "classnames";

export interface CardItem {
  title: string;
  subtitle?: string;
  avatar?: any;
  className?: string;
}

const CardItem = (props: CardItem) => {
  return (
    <div className={cn("flex flex-row", props.className)}>
      {props.avatar ? (
        <div className="w-10 h-10 mr-3 flex justify-center items-center">
          {props.avatar}
        </div>
      ) : null}
      <div className="flex flex-col text-black dark:text-white">
        <div className="font-semibold mb-1">{props.title}</div>
        <div className="font-normal text-xs opacity-50">{props.subtitle}</div>
      </div>
    </div>
  );
};

export default CardItem;
