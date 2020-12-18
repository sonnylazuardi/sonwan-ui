import * as React from "react";
import Content from "@/components/docs/Content";

import JsxParser from "react-jsx-parser";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import Folder from "@/icons/Folder";
import Arrow from "@/icons/Arrow";
import Checklist from "@/icons/Checklist";
import Profile from "@/icons/Profile";
import Search from "@/icons/Search";

const DEFAULT_CODE = `<div className="flex flex-row space-x-2">
  <div className="w-10 h-10 bg-cyan rounded-full flex justify-center items-center">
    <Folder />
  </div>
  <div className="w-10 h-10 bg-yellow rounded-full flex justify-center items-center">
    <Arrow />
  </div>
  <div className="w-10 h-10 bg-blue rounded-full flex justify-center items-center">
    <Checklist />
  </div>
  <div className="w-10 h-10 bg-purple rounded-full flex justify-center items-center">
    <Profile />
  </div>
  <div className="w-10 h-10 bg-white rounded-full flex relative justify-center items-center">
    <Search />
  </div>
</div>
`;

const IconsPage = () => {
  const [code, setCode] = React.useState(DEFAULT_CODE);
  return (
    <Content title="Icons" id="icons">
      <div className="pb-10 max-w-4xl">
        Icons here are taken from{" "}
        <a
          href="https://ui8.net/piqodesign/products/iconly-essential-icons"
          className="font-bold"
        >
          Iconly
        </a>{" "}
        by{" "}
        <a href="https://ui8.net/piqodesign/products" className="font-bold">
          Piqodesign
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-full sm:col-span-1">
          <div style={{ height: 200, overflow: "auto" }}>
            <Editor
              className="block w-full text-sm font-mono bg-white dark:bg-dark-500 rounded-xl"
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => highlight(code, languages.js)}
              padding={10}
              style={{
                fontSize: 12,
              }}
            />
          </div>
        </div>
        <div className="col-span-full sm:col-span-1">
          <JsxParser
            bindings={{}}
            //@ts-ignore
            components={{ Folder, Arrow, Checklist, Profile, Search }}
            jsx={code}
          />
        </div>
      </div>
    </Content>
  );
};

export default IconsPage;
