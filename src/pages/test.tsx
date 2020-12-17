import React from "react";
//@ts-ignore
// import { Text, View } from "react-native";
// import tailwind from "../../tailwind";

const Card = () => {
  return (
    <div>
      <div className="p-8">test</div>
      {/* <View style={tailwind("bg-dark px-8 py-6 rounded-full")}>
        <Text style={tailwind("text-white font-bold font-medium")}>
          Hello Tailwind
        </Text>
      </View> */}
    </div>
  );
};

const RNWPage = () => {
  return <Card />;
  // <View
  //   style={[
  //     tailwind("bg-dark-bg flex items-center justify-center"),
  //     { height: "100vh" },
  //   ]}
  // >
  //   <Card />
  // </View>
};

export default RNWPage;
