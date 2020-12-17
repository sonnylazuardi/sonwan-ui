import * as React from "react";

export interface ListItem {
  title: any;
  action?: any;
}

const ListItem = (props: ListItem) => {
  return (
    <div className="flex flex-row py-4 text-sm">
      <div className="font-semibold mb-1">{props.title}</div>
      {props.action ? (
        <>
          <div className="flex-1" />
          {props.action}
        </>
      ) : null}
    </div>
  );
};

export default ListItem;
