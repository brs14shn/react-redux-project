import { ProductTypes } from "../types/productTypes";

export const initialState = {
  products: [
    // {
    //   id: 1,
    //   title: "Dipesh",
    //   category: "programmer",
    // },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ProductTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    // case ProductTypes.SELECTED_PRODUCT:
    //   return pass;
    // case ProductTypes.REMOVE_SELECTED_PRODUCT:
    //   return pass;
    default:
      return state;
  }
};
