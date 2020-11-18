import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./navigation";
import authReducer from "./store/reducers/auth";
import cartReducer from "./store/reducers/cart";
import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { init, init1 } from "./helpers/db";

init()
  .then(() => {
    console.log("Initialized Database");
  })
  .catch((err) => {
    console.log("Initializing DB failed");
    console.log(err);
  });

init1()
  .then(() => {
    console.log("Initialized Cart Database");
  })
  .catch((err) => {
    console.log("Initializing DB failed");
    console.log(err);
  });

const fetchFonts = () => {
  return Font.loadAsync({
    "berlin-sans": require("./assets/berlin-sans-fb.ttf"),
    "poppins-reg": require("./assets/poppins.ttf"),
    "poppins-medium": require("./assets/poppins-semiBold.ttf"),
  });
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
