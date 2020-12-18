import Search from "@/icons/Search";
import * as React from "react";

export interface Input {
  placeholder?: string;
}

const Input = (props: Input) => {
  return (
    <div className="relative mb-4">
      <input
        className="focus:ring-1 dark:text-white focus:outline-none w-full text-sm bg-white dark:bg-dark-500 border-transparent-100 text-black placeholder-gray-500 border rounded-xl py-4 pr-10 pl-4"
        type="text"
        aria-label={props.placeholder}
        placeholder={props.placeholder}
      />
      <Search />
    </div>
  );
};

export default Input;
