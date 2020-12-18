import * as React from "react";
import Content from "@/components/docs/Content";

const CardPage = () => {
  return (
    <Content title="Getting Started" id="gettingstarted">
      <div className="pb-10 max-w-4xl">
        <div className="text-2xl font-semibold mb-4">Installation</div>
        <div>
          Inside your React project directory,{" "}
          <a
            href="https://tailwindcss.com/docs/guides/create-react-app"
            className="font-bold"
          >
            install tailwindcss
          </a>
          , then install components by running the following
        </div>
      </div>
    </Content>
  );
};

export default CardPage;
