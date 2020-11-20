import React from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import * as cartActions from "../store/actions/cart";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: product.image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.productText}>{product.title}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>Rs. {product.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteContainer}
        onPress={() => dispatch(cartActions.removeItem(product.id))}
      >
        <MaterialCommunityIcons name="delete" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default CartProduct;

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: width - 350,
    height: width - 310,
    flex: 0.2,
  },
  product: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  textContainer: {
    flex: 0.5,
    paddingHorizontal: 5,
  },
  productText: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 12,
    fontFamily: "poppins-reg",
  },
  priceContainer: {
    flex: 0.25,
  },
  productPrice: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "poppins-medium",
  },
  deleteContainer: {
    flex: 0.05,
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
});
