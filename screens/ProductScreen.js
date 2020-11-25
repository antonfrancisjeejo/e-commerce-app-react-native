import React from "react";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { products } from "../constants/product";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useDispatch } from "react-redux";
import * as cartActions from "../store/actions/cart";
import { addItem } from "../helpers/db";

const ProductScreen = ({ route }) => {
  const { productId } = route.params;
  const product = products.filter((item) => {
    return item.id === productId;
  });

  const dispatch = useDispatch();

  const addToCart = async () => {
    try {
      const dbResult = await addItem(
        product[0].id,
        product[0].title,
        product[0].price,
        product[0].image
      );
      dispatch(cartActions.setProduct(product[0]));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView>
      <View style={styles.product}>
        <View style={styles.productTop}>
          <Image
            source={{
              uri: product[0].image,
            }}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.productText}>{product[0].title}</Text>
          <Text style={styles.productPrice}>Rs. {product[0].price}</Text>
        </View>
        <TouchableOpacity onPress={addToCart}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add to cart</Text>
            <Fontisto
              name="shopping-basket"
              size={20}
              color="#fff"
              style={styles.buttonIcon}
            />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.productDesc}>• 100% Original Products</Text>
          <Text style={styles.productDesc}>
            • Free Delivery on order above Rs. 799
          </Text>
          <Text style={styles.productDesc}>
            • Pay on delivery might be available
          </Text>
          <Text style={styles.productDesc}>
            • Easy 30 days returns and exchanges
          </Text>
          <Text style={styles.productDesc}>• Try & Buy might be available</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  product: {
    alignItems: "center",
  },
  productTop: {
    width: width,
    height: width - 50,
  },
  productText: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 18,
    fontFamily: "poppins-reg",
  },
  productPrice: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "poppins-medium",
  },
  productDesc: {
    paddingVertical: 10,
    fontSize: 15,
    fontFamily: "poppins-reg",
  },
  button: {
    backgroundColor: "#e05297",
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "poppins-reg",
    color: "#fff",
    paddingTop: 7,
  },
  buttonIcon: {
    paddingLeft: 10,
  },
});
