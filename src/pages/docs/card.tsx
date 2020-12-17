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
  <CardItem
    title="Bambang Eko"
    subtitle="0821 - 7654 - 3210"
    avatar={
      <img
        src="https://randomuser.me/api/portraits/men/19.jpg"
        className="rounded-full"
      />
    }
  />
</Card>
<div className="dark">
  <Card>
    <CardItem
      title="Putri Saputri"
      subtitle="0821 - 7654 - 3210"
      avatar={
        <img
          src="https://randomuser.me/api/portraits/women/1.jpg"
          className="rounded-full"
        />
      }
    />
  </Card>
</div>      
`;

const CardPage = () => {
  const [code, setCode] = React.useState(DEFAULT_CODE);
  return (
    <Content title="Card" id="card">
      <div className="pb-10 max-w-4xl">
        Card Component is a card wrapper component that automatically give you
        card layout and color. Inside card, you can add CardItem component that
        may contains avatar, title and subtitle.
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

export default CardPage;
