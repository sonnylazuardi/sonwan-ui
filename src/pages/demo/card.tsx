import * as React from "react";

import Card from "@/components/Card";
import CardItem from "@/components/CardItem";
import Content from "@/components/docs/Content";

const CardPage = () => {
  return (
    <Content title="Card">
      <Card>
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
    </Content>
  );
};

export default CardPage;
