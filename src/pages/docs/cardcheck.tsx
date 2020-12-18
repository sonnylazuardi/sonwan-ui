import * as React from "react";
import Content from "@/components/docs/Content";

import JsxParser from "react-jsx-parser";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import CardCheck from "@/components/CardCheck";
import CardItem from "@/components/CardItem";
import Folder from "@/icons/Folder";

const DEFAULT_CODE = `<CardCheck>
  <CardItem
    avatar={
      <div className="w-10 h-10 bg-yellow rounded-full relative flex justify-center items-center">
        <Folder />
      </div>
    }
    title="Business Account"
    subtitle="**** - **** - 9876"
  />
</CardCheck>`;

const CardCheckPage = () => {
  const [code, setCode] = React.useState(DEFAULT_CODE);
  return (
    <Content title="Card Check" id="cardcheck">
      <div className="pb-10 max-w-4xl">
        Card Check is a toggle component inside card with check mark on the
        right side of the card.
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
            components={{ CardCheck, CardItem, Folder }}
            jsx={code}
          />
        </div>
      </div>
    </Content>
  );
};

export default CardCheckPage;
