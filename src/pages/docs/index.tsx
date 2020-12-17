import * as React from "react";
import CardPage from "./card";
import CardListPage from "./cardlist";
import GettingStarted from "./gettingstarted";
import Swipe from "./swipe";
import Switch from "./switch";
import cn from "classnames";
import { Link } from "gatsby";

const menu = [
  { label: "Getting Started", id: "gettingstarted" },
  { label: "Card", id: "card" },
  { label: "Card List", id: "cardlist" },
  { label: "Switch", id: "switch" },
  { label: "Swipe", id: "swipe" },
];

const DemoIndex = () => {
  const [active, setActive] = React.useState("");
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-full sm:col-span-2 relative">
          <div className="sticky top-0 left-0 bottom-0 right-0 sm:h-screen flex flex-col">
            <Link
              to="/"
              className="text-3xl font-extrabold text-center tracking-tighter my-10"
            >
              SonWan UI
            </Link>
            {menu.map((item, i) => {
              return (
                <a
                  key={i}
                  onClick={() => setActive(item.id)}
                  href={`#${item.id}`}
                  className={cn(
                    "p-4 m-4 mt-0 rounded-xl text-sm font-semibold",
                    {
                      "bg-light-100 text-black": item.id === active,
                      "text-gray-400": item.id !== active,
                    }
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
        <div className="col-span-full sm:col-span-10">
          <GettingStarted />
          <CardPage />
          <CardListPage />
          <Switch />
          <Swipe />
        </div>
      </div>
    </>
  );
};

export default DemoIndex;
