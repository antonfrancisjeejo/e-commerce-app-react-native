import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Platform, TouchableOpacity } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import AuthScreen from "../screens/AuthScreen";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import ProductScreen from "../screens/ProductScreen";
import Settings from "../screens/Settings";
import TermsandConditions from "../screens/TermsandConditions";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ProductsScreen from "../screens/ProductsScreen";
import { useSelector } from "react-redux";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: "#19d3da",
  },
  headerTitleStyle: {
    fontFamily: "berlin-sans",
  },
  headerBackTitleStyle: {
    fontFamily: "poppins-reg",
  },
  headerTintColor: Platform.OS === "android" ? "white" : "red",
  headerTitle: "E Commerce App",
  headerRight: () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        style={{ marginRight: 20 }}
        onPress={() => navigation.navigate("Cart", { screen: "Cart Screen" })}
      >
        <Ionicons name="md-cart" color="#fff" size={30} />
      </TouchableOpacity>
    );
  },
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart Screen"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product Screen"
        component={ProductScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  const { state, ...rest } = props;
  const newState = { ...state };
  newState.routes = newState.routes.filter((item) => item.name !== "Cart");

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={defaultNavigationOptions}
      drawerStyle={{
        backgroundColor: "#30475e",
        width: 270,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: "#f4f4f2",
        itemStyle: {
          marginVertical: 5,
        },
        labelStyle: {
          color: "#ffffff",
          fontFamily: "poppins-reg",
          fontSize: 15,
          paddingTop: 5,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-home" : "ios-home"}
              size={23}
              color="#ffffff"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Products Screen"
        component={ProductsScreen}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons name="md-cube" size={23} color="#ffffff" />
          ),
          drawerLabel: "Products",
        }}
      />
      <Drawer.Screen
        name="Orders Screen"
        component={OrdersScreen}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons name="md-basket" size={23} color="#ffffff" />
          ),
          drawerLabel: "Your Orders",
        }}
      />
      <Drawer.Screen
        name="Auth Screen"
        component={AuthScreen}
        options={{
          drawerIcon: (drawerConfig) => (
            <AntDesign name="login" size={20} color="#ffffff" />
          ),
          drawerLabel: "Login",
        }}
      />
      <Drawer.Screen
        name="Settings Screen"
        component={Settings}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-settings" : "ios-settings"}
              size={23}
              color="#ffffff"
            />
          ),
          drawerLabel: "Settings",
        }}
      />
      <Drawer.Screen
        name="Terms Screen"
        component={TermsandConditions}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={
                Platform.OS === "android"
                  ? "md-information-circle"
                  : "ios-information-circle"
              }
              size={23}
              color="#ffffff"
            />
          ),
          drawerLabel: "Conditions Apply",
        }}
      />
      <Drawer.Screen
        name="Policy Screen"
        component={PrivacyPolicy}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={
                Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
              }
              size={23}
              color="#ffffff"
            />
          ),
          drawerLabel: "Privacy Policy",
        }}
      />
      <Drawer.Screen name="Cart" component={CartNavigator} />
    </Drawer.Navigator>
  );
};

const AuthenticatedDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={defaultNavigationOptions}
      drawerStyle={{
        backgroundColor: "#30475e",
        width: 270,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: "#f4f4f2",
        itemStyle: {
          marginVertical: 5,
        },
        labelStyle: {
          color: "#ffffff",
          fontFamily: "poppins-reg",
          fontSize: 15,
          paddingTop: 5,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-home" : "ios-home"}
              size={23}
              color="#ffffff"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Products Screen"
        component={ProductsScreen}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons name="md-cube" size={23} color="#ffffff" />
          ),
          drawerLabel: "Products",
        }}
      />
      <Drawer.Screen
        name="Orders Screen"
        component={OrdersScreen}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons name="md-basket" size={23} color="#ffffff" />
          ),
          drawerLabel: "Your Orders",
        }}
      />
      <Drawer.Screen
        name="Account Screen"
        component={AccountScreen}
        options={{
          drawerIcon: (drawerConfig) => (
            <MaterialCommunityIcon
              name="account-circle"
              size={20}
              color="#ffffff"
            />
          ),
          drawerLabel: "Your Account",
        }}
      />
      <Drawer.Screen
        name="Settings Screen"
        component={Settings}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-settings" : "ios-settings"}
              size={23}
              color="#ffffff"
            />
          ),
          drawerLabel: "Settings",
        }}
      />
      <Drawer.Screen
        name="Terms Screen"
        component={TermsandConditions}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={
                Platform.OS === "android"
                  ? "md-information-circle"
                  : "ios-information-circle"
              }
              size={23}
              color="#ffffff"
            />
          ),
          drawerLabel: "Conditions Apply",
        }}
      />
      <Drawer.Screen
        name="Policy Screen"
        component={PrivacyPolicy}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={
                Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
              }
              size={23}
              color="#ffffff"
            />
          ),
          drawerLabel: "Privacy Policy",
        }}
      />
      <Drawer.Screen name="Cart" component={CartNavigator} />
    </Drawer.Navigator>
  );
};

export default function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    <NavigationContainer>
      {user ? <AuthenticatedDrawer /> : <MyDrawer />}
    </NavigationContainer>
  );
}
