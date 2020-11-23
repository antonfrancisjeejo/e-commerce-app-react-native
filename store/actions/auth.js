import axios from "../../axios";
import { removeUser } from "../../helpers/db";

export const SET_USER = "SET_USER";

export const setUser = (user) => {
  return {
    type: SET_USER,
    user: user,
  };
};

export const LOGOUT = "LOGOUT";

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
