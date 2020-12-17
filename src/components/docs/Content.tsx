import * as React from "react";

interface Props {
  children: any;
  title: string;
}

const Content = (props: Props) => {
  return (
    <main
      className="flex flex-col items-center bg-white dark:bg-dark-500 text-black dark:text-white pt-10 pb-10"
      style={{ minHeight: "100vh" }}
    >
      <title>Card</title>
      <div style={{ maxWidth: "100%" }}>
        <div className="text-5xl font-extrabold text-center tracking-tighter">
          {props.title}
        </div>
        <div className="flex flex-col justify-center bg-light-100 dark:bg-dark-900 p-8 m-8 rounded-2xl w-96">
          {props.children}
        </div>
      </div>
    </main>
  );
};

export default Content;
