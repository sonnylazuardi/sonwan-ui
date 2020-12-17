import * as React from "react";

interface Props {
  children: any;
  id: string;
  title: string;
}

const Content = (props: Props) => {
  return (
    <main className="flex flex-col bg-white dark:bg-dark-500 text-black dark:text-white pt-2 pb-10 px-8">
      <title>{props.title}</title>
      <div className="w-full">
        <div
          className="text-3xl font-extrabold tracking-tighter pt-8 mb-8"
          id={props.id}
        >
          {props.title}
        </div>
        <div className="flex flex-col justify-center bg-light-100 dark:bg-dark-900 p-8 rounded-2xl">
          {props.children}
        </div>
      </div>
    </main>
  );
};

export default Content;
