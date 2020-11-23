import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { fetchUser, fetchProducts } from "../helpers/db";
import * as authActions from "../store/actions/auth";
import * as cartActions from "../store/actions/cart";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchs() {
      try {
        const dbResult = await fetchUser("1");
        if (dbResult.rows._array.length !== 0) {
          if (!user) {
            dispatch(authActions.login(dbResult.rows._array[0].token));
          }
        }
      } catch (err) {
        console.log("error", err);
      }
    }
    fetchs();
  }, []);

  useEffect(() => {
    async function fetchP() {
      try {
        const dbResult = await fetchProducts();
        dispatch(cartActions.addProducts(dbResult.rows._array));
      } catch (err) {
        console.log("error", err);
      }
    }
    fetchP();
  }, []);
  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri:
              "https://images-us.nivea.com/-/media/local/in/product-banners/nivea-men-products_banner_revised.png?rx=1454&ry=0&rw=1452&rh=806",
          }}
          style={{ width: "100%", height: 200 }}
        />
      </View>
      <View style={styles.homeTitle1}>
        <Text style={styles.homeTitle1Text}>Shop on Today's Deal</Text>
      </View>
      <View style={styles.homeBox1}>
        <View style={styles.homeBoxItem}>
          <Image
            source={{
              uri:
                "https://www.reliancedigital.in/medias/Apple-12-Mini-Smartphones-491901546-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzg3NzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDU0L2gxMS85NDA3NzY3NDEyNzY2LmpwZ3w2NDVlNTAzMzBlOWZjYTQ1ZjU3N2NkNzI4MTExNmRhOWNjMWY5ZjFkNWRmMDUyYjNiODU3Nzc0MjZkMWM0ZjZj",
            }}
            style={{ width: "60%", height: 250 }}
          />
          <Text>Apple iPhone 12 Mini 64 GB, Blue</Text>
          <Text>MRP: ₹69,900</Text>
        </View>
        <View style={styles.homeBoxMini}>
          <View style={styles.homeBoxItem}>
            <Image
              source={{
                uri:
                  "https://rukminim1.flixcart.com/image/312/312/jnj7iq80/mobile/3/f/a/apple-iphone-xr-mry62hn-a-original-imafa6zkhyceh8dg.jpeg?q=70",
              }}
              style={{ width: "43%", height: 90 }}
            />
            <View style={styles.items}>
              <Text>Apple iPhone XR 128 GB, Red</Text>
              <Text>MRP: ₹42,200</Text>
            </View>
          </View>
          <View style={styles.homeBoxItem}>
            <Image
              source={{
                uri:
                  "https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/6/b/z/apple-iphone-se-mxd12hn-a-original-imafrcqfsuzwa3dz.jpeg?q=70",
              }}
              style={{ width: "43%", height: 90 }}
            />
            <View style={styles.items}>
              <Text>Apple iPhone SE 128 GB, Black</Text>
              <Text>MRP: ₹36,500</Text>
            </View>
          </View>
          <View style={styles.homeBoxItem}>
            <Image
              source={{
                uri:
                  "https://rukminim1.flixcart.com/image/416/416/jnj7iq80/mobile/r/k/h/apple-iphone-xr-mrya2hn-a-original-imafa6zkgrdrpuby.jpeg?q=70",
              }}
              style={{ width: "43%", height: 90 }}
            />
            <View style={styles.items}>
              <Text>Apple iPhone XR 64 GB, Blue</Text>
              <Text>MRP: ₹38,900</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.homeTitle1}>
        <Text style={styles.homeTitle1Text}>Great Beauty Products</Text>
      </View>
      <View>
        <Image
          source={{
            uri:
              "https://chemicalsinourlife.echa.europa.eu/documents/23718410/23807413/c_cosmetics_lg.jpg/e22a4675-5c9e-8e05-4649-7042a9aed269?t=1560171643352",
          }}
          style={{ width: "100%", height: 160 }}
        />
      </View>
      <View style={styles.homeTitle1}>
        <Text style={styles.homeTitle2Text}>Blockbuster Sale</Text>
      </View>
      <View style={styles.homeBox1}>
        <View style={styles.homeBoxItem}>
          <Image
            source={{
              uri:
                "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10184941/2019/7/24/0d97330a-9821-4bf5-8df9-066e265579b71563961300531-Taavi-Men-Kurtas-5261563961298903-1.jpg",
            }}
            style={{ width: "60%", height: 350 }}
          />
          <Text style={{ textAlign: "center" }}>
            Men Maroon Kalamkari Block Printed Straight Sustainable Kurta with
            Roll-Up Sleeves
          </Text>
          <Text>MRP: ₹900</Text>
        </View>
        <View style={styles.homeBoxMini}>
          <View style={styles.homeBoxItem}>
            <Image
              source={{
                uri:
                  "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1427724/2016/9/29/11475141513060-WROGN-Men-Navy-Slim-Fit-Printed-Casual-Shirt-9311475141512636-1.jpg",
              }}
              style={{ width: "80%", height: 120 }}
            />
            <View style={styles.items}>
              <Text>Men Navy Slim Fit Printed Casual Shirt</Text>
              <Text>MRP: ₹1139</Text>
            </View>
          </View>
          <View style={styles.homeBoxItem}>
            <Image
              source={{
                uri:
                  "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1353004/2018/9/18/a8acac3a-077a-400f-a1c7-519215a5265e1537251707732-Roadster-Men-Blue-Denim-Washed-Casual-Shirt-5281537251705552-1.jpg",
              }}
              style={{ width: "80%", height: 120 }}
            />
            <View style={styles.items}>
              <Text>Men Blue Regular Fit Faded Casual Denim Shirt</Text>
              <Text>MRP: ₹999</Text>
            </View>
          </View>
          <View style={styles.homeBoxItem}>
            <Image
              source={{
                uri:
                  "https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/37509c70-78e6-42a4-a0cc-744f8212d423/Images/ProductImages/Source/KHA071016MB02A_1.JPG",
              }}
              style={{ width: "80%", height: 120 }}
            />
            <View style={styles.items}>
              <Text>Black crane hand embroidered bandhgala set</Text>
              <Text>MRP: ₹12,560</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeTitle1: {
    paddingVertical: 10,
  },
  homeTitle1Text: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "poppins-reg",
  },
  homeBox1: {
    backgroundColor: "#fff",
  },
  homeBoxItem: {
    alignItems: "center",
  },
  homeBoxMini: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginVertical: 20,
  },
  items: {
    width: 100,
  },
  homeTitle2Text: {
    fontSize: 20,
    fontFamily: "poppins-reg",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});
