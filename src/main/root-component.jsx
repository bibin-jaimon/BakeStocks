import React from "react";
import { View } from "react-native";
import { RootNavigator } from "./root-navigator";

const RootComponent = () => {
  return (
    <View style={{ flex: 1 }}>
      <RootNavigator />
    </View>
  );
};

export { RootComponent };
