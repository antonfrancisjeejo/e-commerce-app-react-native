import { SET_PRODUCT, REMOVE_PRODUCT, ADD_PRODUCTS } from "../actions/cart";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return [...state, action.product];
    case ADD_PRODUCTS:
      return [...action.products];
    case REMOVE_PRODUCT:
      const products = state.filter((item) => {
        return item.id !== action.productId;
      });
      return [...products];
    default:
      //default case will be reached when the app starts and redux store is initialized.
      return state;
  }
};

export default cartReducer;
