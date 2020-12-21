import * as React from "react";
import Content from "@/components/docs/Content";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";

const CardPage = () => {
  return (
    <Content title="Getting Started" id="gettingstarted">
      <div className="max-w-4xl">
        <div className="mb-4">
          Inside your React project directory install SonWan UI by running the
          following
        </div>

        <Editor
          className="block w-full text-sm font-mono bg-white dark:bg-dark-500 rounded-xl mb-8"
          value={`npm i sonwan-ui

# or

yarn add sonwan-ui`}
          disabled={true}
          onValueChange={() => {}}
          highlight={(code) => highlight(code, languages.bash)}
          padding={10}
          style={{
            fontSize: 12,
          }}
        />

        <div className="mb-4">
          Then import the css styling and js components by including this code
          in your js/tsx file
        </div>

        <Editor
          className="block w-full text-sm font-mono bg-white dark:bg-dark-500 rounded-xl mb-8"
          value={`import "sonwan-ui/build/style.min.css";
import SonWan from "sonwan-ui";`}
          disabled={true}
          onValueChange={() => {}}
          highlight={(code) => highlight(code, languages.javascript)}
          padding={10}
          style={{
            fontSize: 12,
          }}
        />

        <div className="mb-4">
          To use it, just simply render the component in your render function
        </div>

        <Editor
          className="block w-full text-sm font-mono bg-white dark:bg-dark-500 rounded-xl mb-8"
          value={`const { Input, Switch, Card, CardItem, ListItem } = SonWan;
return (
  <>
    <Input placeholder="Search In Codesandbox" />
    <Card>
      <CardItem
        title="Yuzuha Usagi"
        subtitle="0821 - 7654 - 3210"
      />
    </Card>
  </>
);`}
          disabled={true}
          onValueChange={() => {}}
          highlight={(code) => highlight(code, languages.javascript)}
          padding={10}
          style={{
            fontSize: 12,
          }}
        />
      </div>
    </Content>
  );
};

export default CardPage;
