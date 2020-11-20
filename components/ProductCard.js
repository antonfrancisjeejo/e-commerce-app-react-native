import React from "react";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ProductCard = ({ id, title, price, image, navigation }) => {
  return (
    <View style={styles.card}>
      <View style={styles.productTop}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.productText}>{title}</Text>
          <Text style={styles.productPrice}>Rs. {price}</Text>
        </View>
        <Button
          title="View Product"
          onPress={() =>
            navigation.navigate("Cart", {
              screen: "Product Screen",
              params: { productId: id },
            })
          }
        />
      </View>
    </View>
  );
};

export default ProductCard;

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  productTop: {
    width: width - 150,
    height: width - 50,
  },
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    backgroundColor: "#fff",
    marginVertical: 20,
    paddingBottom: 50,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: width - 70,
    height: width + 100,
  },
  productText: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 13,
  },
  productPrice: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "poppins-medium",
  },
});
