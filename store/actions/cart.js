import axios from "../../axios";
import { removeProduct as removePro } from "../../helpers/db";

export const SET_PRODUCT = "SET_PRODUCT";

export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    product: product,
  };
};

export const ADD_PRODUCTS = "ADD_PRODUCTS";

export const addProducts = (products) => {
  return {
    type: ADD_PRODUCTS,
    products: products,
  };
};

export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    productId: id,
  };
};

export const removeItem = (id) => {
  return async (dispatch) => {
    try {
      removePro(id);
      dispatch(removeProduct(id));
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const login = (token) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/user/account/get/user/data", {
        headers: {
          authorization: token,
        },
      });
      dispatch(setUser(await res.data.user));
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT,
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      removeUser("1");
      dispatch(userLogout());
    } catch (err) {
      throw new Error(err);
    }
  };
};
