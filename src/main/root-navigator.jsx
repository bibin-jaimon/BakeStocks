import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BottomTabNavigator } from "./tab-navigator";
import { AddStocksScreen } from "../features/stocks";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <BottomTabNavigator /> */}
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen name="AddStocks" component={AddStocksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { RootNavigator };
