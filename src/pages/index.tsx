import * as React from "react";
import Switch from "../components/Switch";
import Search from "../icons/Search";
import Folder from "../icons/Folder";
import CardCheck from "../components/CardCheck";
import Profile from "../icons/Profile";
import Swipe from "../components/Swipe";

// markup
const IndexPage = () => {
  return (
    <main
      className="flex flex-col items-center bg-white dark:bg-dark-500 text-black dark:text-white pt-32 pb-12"
      style={{ minHeight: "100vh" }}
    >
      <title>SonWan UI</title>
      <div style={{ width: 768, maxWidth: "100%" }}>
        <div className="text-5xl font-extrabold text-center tracking-tighter">
          SonWan UI
        </div>
        <div className="text-sm font-light text-center px-8 tracking-wide">
          <p>SonWan UI is a modular, cross-platform component library</p>
          <p>to build your next React & React Native Application.</p>
        </div>
        <div className="grid grid-cols-2 gap-5 bg-light-100 dark:bg-dark-900 p-8 m-8 rounded-2xl">
          <div className="col-span-full sm:col-span-1">
            <div className="flex flex-row bg-white dark:bg-dark-500 p-4 rounded-2xl text-sm tracking-wide mb-4">
              <div className="w-10 h-10 bg-gray-600 rounded-full mr-3">
                <img
                  src="https://randomuser.me/api/portraits/men/17.jpg"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold mb-1">Thomas Wize</div>
                <div className="font-normal text-xs opacity-50">
                  0821 - 7654 - 3210
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-dark-500 p-4 rounded-2xl text-sm mb-4">
              <div className="opacity-50 mb-2">Recent Contacts</div>
              <div className="flex flex-row py-4">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/17.jpg"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold mb-1">Samantha</div>
                  <div className="font-normal text-xs opacity-50">
                    Bank - 0987 3422 8756
                  </div>
                </div>
              </div>
              <div className="flex flex-row py-4">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold mb-1">Karen William</div>
                  <div className="font-normal text-xs opacity-50">
                    Bank - 0987 3422 8756
                  </div>
                </div>
              </div>
              <div className="flex flex-row py-4">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/8.jpg"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold mb-1">Angela Smith</div>
                  <div className="font-normal text-xs opacity-50">
                    Bank - 0987 3422 8756
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-4 text-sm">
              <div className="font-semibold mb-1">Withdraw Activity</div>
              <div className="flex-1" />
              <Switch
                name="activity"
                onChange={(darkMode) => {
                  if (darkMode) {
                    document.querySelector("html").classList.add("dark");
                  } else {
                    document.querySelector("html").classList.remove("dark");
                  }
                }}
              />
            </div>
            <div className="flex flex-row py-4 text-sm">
              <div className="font-semibold mb-1">
                Dark Mode{" "}
                <span role="img" aria-label="moon">
                  🌙{" "}
                </span>
              </div>
              <div className="flex-1" />
              <Switch
                name="darkmode"
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
          <div className="col-span-full sm:col-span-1">
            <div className="relative mb-4">
              <input
                className="focus:ring-1 dark:text-white focus:outline-none w-full text-sm bg-white dark:bg-dark-500 border-transparent-100 text-black placeholder-gray-500 border rounded-xl py-4 pr-10 pl-4"
                type="text"
                aria-label="Search"
                placeholder="Search"
              />
              <Search />
            </div>
            <CardCheck>
              <div className="w-10 h-10 bg-cyan rounded-full mr-3 relative flex justify-center items-center">
                <Folder />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold mb-1">Business Account</div>
                <div className="font-normal text-xs opacity-50">
                  **** - **** - 9876
                </div>
              </div>
            </CardCheck>
            <CardCheck>
              <div className="w-10 h-10 bg-yellow rounded-full mr-3 flex justify-center items-center">
                <Profile />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold mb-1">Personal Account</div>
                <div className="font-normal text-xs opacity-50">
                  **** - **** - 9876
                </div>
              </div>
            </CardCheck>
            <Swipe />
            <div className="py-4 text-sm opacity-50 w-full text-center">
              More Component Coming Soon...
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
