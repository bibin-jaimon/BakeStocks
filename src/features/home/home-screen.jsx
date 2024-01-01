import { Text, View } from "react-native";

const HomeScreen = () => {
  const items = [
    {
      name: "Mixture",
      brand: "Brand 1",
      price: 45,
      date: "12/03/2024",
    },
    {
      name: "Mixture",
      brand: "Brand 1",
      price: 45,
      date: "12/03/2024",
    },
    {
      name: "Mixture",
      brand: "Brand 1",
      price: 45,
      date: "12/03/2024",
    },
  ];

  return (
    <View>
      {items.map((item) => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <View>
            <Text>{item.name}</Text>
            <Text>{item.brand}</Text>
          </View>
          <View>
            <Text>Rs. {item.price}/-</Text>
            <Text>{item.date}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export { HomeScreen };
