import * as React from "react";

import CardPage from "./card";
import CardListPage from "./cardlist";
import GettingStarted from "./gettingstarted";
import SwipePage from "./swipe";
import SwitchPage from "./switch";
import InputPage from "./input";
import CardCheckPage from "./cardcheck";
import IconsPage from "./icons";

import Switch from "@/components/Switch";
import cn from "classnames";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

const menu = [
  { label: "Getting Started", id: "gettingstarted" },
  { label: "Card", id: "card" },
  { label: "Card List", id: "cardlist" },
  { label: "Switch", id: "switch" },
  { label: "Swipe", id: "swipe" },
  { label: "Input", id: "input" },
  { label: "Card Check", id: "cardcheck" },
  { label: "Icons", id: "icons" },
];

const DemoIndex = () => {
  const [active, setActive] = React.useState("");
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-full md:col-span-3 lg:col-span-2 relative">
          <div className="sticky top-0 left-0 bottom-0 right-0 sm:h-screen flex flex-col text-black dark:text-white bg-light-100 dark:bg-dark-900 overflow-auto">
            <Link
              to="/"
              className="text-2xl font-extrabold text-center tracking-tighter my-10"
            >
              SonWan UI
            </Link>
            {menu.map((item, i) => {
              return (
                <a
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(e.currentTarget.getAttribute("href"));
                    setActive(item.id);
                  }}
                  href={`#${item.id}`}
                  className={cn(
                    "p-4 m-4 mt-0 rounded-xl text-sm font-semibold",
                    {
                      "bg-white dark:bg-dark-500 text-black dark:text-white":
                        item.id === active,
                      "text-gray-500 dark:text-light-100": item.id !== active,
                    }
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="p-4 px-8 mb-4">
              <Switch
                name="sidebar"
                onChange={(darkMode) => {
                  if (darkMode) {
                    document.querySelector("html").classList.add("dark");
                  } else {
                    document.querySelector("html").classList.remove("dark");
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-span-full md:col-span-9 lg:col-span-10">
          <GettingStarted />
          <CardPage />
          <CardListPage />
          <SwitchPage />
          <SwipePage />
          <InputPage />
          <CardCheckPage />
          <IconsPage />
        </div>
      </div>
    </>
  );
};

export default DemoIndex;
