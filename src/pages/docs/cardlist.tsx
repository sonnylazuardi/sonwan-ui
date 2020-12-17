import * as React from "react";

import Card from "@/components/Card";
import CardItem from "@/components/CardItem";
import Content from "@/components/docs/Content";
import JsxParser from "react-jsx-parser";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

const DEFAULT_CODE = `<Card>
  <div className="opacity-50 my-1 text-black dark:text-white">
    Recent Contacts
  </div>
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
  <div className="dark">
  <Card>
    <div className="opacity-50 my-1 text-black dark:text-white">
      Recent Contacts
    </div>
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
</div> 
`;

const CardListPage = () => {
  const [code, setCode] = React.useState(DEFAULT_CODE);
  return (
    <Content title="Card List" id="cardlist">
      <div className="pb-10 max-w-4xl">
        You can add multiple CardItem inside Card, it will become stacked card
        list items. Each item can have avatar, title and subtitle.
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-full sm:col-span-1">
          <div style={{ height: 600, overflow: "auto" }}>
            <Editor
              className="block w-full text-sm font-mono bg-white rounded-xl"
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
            components={{ Card, CardItem }}
            jsx={code}
          />
        </div>
      </div>
    </Content>
  );
};

export default CardListPage;
