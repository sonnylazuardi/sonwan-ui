import * as React from "react";

export interface Card {
  children: any;
}

const Card = (props: Card) => {
  return (
    <div className="bg-white dark:bg-dark-500 p-4 rounded-2xl text-sm tracking-wide mb-4">
      {props.children}
    </div>
  );
};

export default Card;
