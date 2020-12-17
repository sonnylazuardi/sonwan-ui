import * as React from "react";

import Card from "@/components/Card";
import CardItem from "@/components/CardItem";
import Content from "@/components/docs/Content";

const CardListPage = () => {
  return (
    <Content title="CardList">
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
    </Content>
  );
};

export default CardListPage;
