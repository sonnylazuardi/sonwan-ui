import * as React from "react";
import Switch from "@/components/Switch";
import Folder from "@/icons/Folder";
import CardCheck from "@/components/CardCheck";
import Profile from "@/icons/Profile";
import Swipe from "@/components/Swipe";
import Card from "@/components/Card";
import CardItem from "@/components/CardItem";
import Input from "@/components/Input";
import ListItem from "@/components/ListItem";
import { Link } from "gatsby";

// markup
const IndexPage = () => {
  return (
    <main
      className="flex flex-col items-center bg-white dark:bg-dark-500 text-black dark:text-white pt-24 pb-12"
      style={{ minHeight: "100vh" }}
    >
      <title>SonWan UI</title>
      <div style={{ width: 768, maxWidth: "100%" }} className="flex flex-col">
        <div className="text-5xl font-extrabold text-center tracking-tighter mb-1">
          SonWan UI
        </div>
        <div className="text-sm font-light text-center px-8 tracking-wide mb-4">
          <p>SonWan UI is a modular, cross-platform component library</p>
          <p>to build your next React & React Native Application.</p>
        </div>
        <Link
          to="docs"
          className="px-8 py-4 bg-purple rounded-xl self-center text-sm font-semibold text-white mb-4"
        >
          Getting Started
        </Link>

        <div className="grid grid-cols-2 gap-5 bg-light-100 dark:bg-dark-900 p-8 m-8 rounded-2xl">
          <div className="col-span-full sm:col-span-1">
            <Card>
              <CardItem
                title="Thomas Wize"
                subtitle="0821 - 7654 - 3210"
                avatar={
                  <img
                    src="https://randomuser.me/api/portraits/men/17.jpg"
                    className="rounded-full"
                  />
                }
              />
            </Card>
            <Card>
              <div className="opacity-50 my-1">Recent Contacts</div>
              <CardItem
                title="Samantha"
                className="py-4"
                subtitle="Bank - 0987 3422 8756"
                avatar={
                  <img
                    src="https://randomuser.me/api/portraits/women/17.jpg"
                    className="rounded-full"
                  />
                }
              />
              <CardItem
                title="Karen William"
                className="py-4"
                subtitle="Bank - 0987 3422 8756"
                avatar={
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    className="rounded-full"
                  />
                }
              />
              <CardItem
                title="Angela Smith"
                className="py-4"
                subtitle="Bank - 0987 3422 8756"
                avatar={
                  <img
                    src="https://randomuser.me/api/portraits/women/8.jpg"
                    className="rounded-full"
                  />
                }
              />
            </Card>
            <ListItem
              title="Withdraw Activity"
              action={
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
              }
            />
            <ListItem
              title="Dark Mode 🌙"
              action={
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
              }
            />
          </div>
          <div className="col-span-full sm:col-span-1">
            <Input placeholder="Search..." />
            <CardCheck>
              <CardItem
                avatar={
                  <div className="w-10 h-10 bg-cyan rounded-full relative flex justify-center items-center">
                    <Folder />
                  </div>
                }
                title="Business Account"
                subtitle="**** - **** - 9876"
              />
            </CardCheck>
            <CardCheck>
              <CardItem
                avatar={
                  <div className="w-10 h-10 bg-yellow rounded-full relative flex justify-center items-center">
                    <Profile />
                  </div>
                }
                title="Personal Account"
                subtitle="**** - **** - 9876"
              />
            </CardCheck>
            <Swipe
              title="SWIPE TO PAY"
              onSwipeFinish={() => alert("Swipe Triggered")}
            />
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
