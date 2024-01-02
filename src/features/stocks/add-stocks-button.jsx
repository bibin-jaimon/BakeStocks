import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

const AddStocksButton = () => {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate("AddStocks");
  };
  return (
    <Pressable onPress={handleOnPress}>
      <View
        style={{
          height: "100%",
          padding: 10,
          justifyContent: "center",
        }}
      >
        <Text>Add Stocks</Text>
      </View>
    </Pressable>
  );
};

export { AddStocksButton };
