import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";

const CartScreen = ({ navigation }) => {
  const products = useSelector((state) => state.cart);

  const total = products.reduce((sum, { price }) => sum + price, 0);

  return (
    <ScrollView>
      {products.map((product, index) => {
        return <CartProduct key={index} product={product} />;
      })}
      {products.length !== 0 ? (
        <View>
          <View style={styles.amountContainer}>
            <Text style={styles.amountTitle}>Total amount : </Text>
            <Text style={styles.amount}>₹{total}</Text>
          </View>
          <Button title="Buy Now" />
        </View>
      ) : (
        <View style={styles.button}>
          <Text style={styles.default}>Your cart is empty!!</Text>
          <Button
            title="Purchase items"
            onPress={() => navigation.navigate("Products Screen")}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  default: {
    fontSize: 20,
    paddingVertical: 20,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  amountTitle: {
    fontSize: 20,
  },
  amount: {
    fontFamily: "poppins-medium",
    fontSize: 25,
    paddingTop: 7,
  },
});
