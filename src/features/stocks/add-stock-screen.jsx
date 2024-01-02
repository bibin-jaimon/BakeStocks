import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddStocksScreen = () => {
  const [name, setName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Submitted Data:', {
      name,
      brandName,
      expireDate,
      itemPrice,
      sellingPrice,
    });
    // You can send the data to your server or perform other actions as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.label}>Brand Name:</Text>
      <TextInput
        style={styles.input}
        value={brandName}
        onChangeText={(text) => setBrandName(text)}
      />

      <Text style={styles.label}>Expire Date:</Text>
      <TextInput
        style={styles.input}
        value={expireDate}
        onChangeText={(text) => setExpireDate(text)}
      />

      <Text style={styles.label}>Item Price:</Text>
      <TextInput
        style={styles.input}
        value={itemPrice}
        onChangeText={(text) => setItemPrice(text)}
        keyboardType="numeric" // Set keyboard type to numeric for price input
      />

      <Text style={styles.label}>Selling Price:</Text>
      <TextInput
        style={styles.input}
        value={sellingPrice}
        onChangeText={(text) => setSellingPrice(text)}
        keyboardType="numeric" // Set keyboard type to numeric for price input
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
});

export { AddStocksScreen };
