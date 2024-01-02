import { HomeScreen } from "../features/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AddStocksScreen, StocksList } from "../features/stocks";
import { SettingsScreen } from "../features/settings";
import { Text } from "react-native";
import { AddStocksButton } from "../features/stocks/add-stocks-button";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        options={{ headerRight: () => <AddStocksButton /> }}
        name="Stocks"
        component={StocksList}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export { BottomTabNavigator };
