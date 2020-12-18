import * as React from "react";
import Content from "@/components/docs/Content";

import JsxParser from "react-jsx-parser";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import Input from "@/components/Input";

const DEFAULT_CODE = `<Input placeholder="Search..." />`;

const InputPage = () => {
  const [code, setCode] = React.useState(DEFAULT_CODE);
  return (
    <Content title="Input" id="input">
      <div className="pb-10 max-w-4xl">
        Input is a text input component with placeholder
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
            components={{ Input }}
            jsx={code}
          />
        </div>
      </div>
    </Content>
  );
};

export default InputPage;
