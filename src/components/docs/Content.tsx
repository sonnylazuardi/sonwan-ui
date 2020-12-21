import * as React from "react";

interface Props {
  children: any;
  id: string;
  title: string;
}

const Content = (props: Props) => {
  return (
    <main className="flex flex-col bg-white dark:bg-dark-500 text-black dark:text-white pt-2 pb-8 px-4">
      <title>{props.title}</title>
      <div className="w-full">
        <div
          className="text-2xl font-semibold tracking-tighter pt-4 mb-4"
          id={props.id}
        >
          {props.title}
        </div>
        <div className="flex flex-col justify-center bg-light-100 dark:bg-dark-900 p-4 rounded-2xl text-sm pt-6">
          {props.children}
        </div>
      </div>
    </main>
  );
};

export default Content;
