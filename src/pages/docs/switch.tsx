import * as React from "react";
import Content from "@/components/docs/Content";

import JsxParser from "react-jsx-parser";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import ListItem from "@/components/ListItem";
import Switch from "@/components/Switch";

const DEFAULT_CODE = `<ListItem
  title="Withdraw Activity"
  action={
    <Switch
      name="activity"
    />
  }
/>      
`;

const SwitchPage = () => {
  const [code, setCode] = React.useState(DEFAULT_CODE);
  return (
    <Content title="Switch" id="switch">
      <div className="pb-10 max-w-4xl">
        The Switch component is used as an alternative for the Checkbox
        component. You can switch between enabled or disabled states.
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-full sm:col-span-1">
          <div style={{ height: 200, overflow: "auto" }}>
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
            components={{ ListItem, Switch }}
            jsx={code}
          />
        </div>
      </div>
    </Content>
  );
};

export default SwitchPage;
