import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ProductCard from "../components/ProductCard";
import { products } from "../constants/product.js";

const ProductsScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              navigation={navigation}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
