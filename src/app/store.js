import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducer/productSlice";
import categoriesReducer from "../reducer/categoriesSlice";
import searchReducer from "../reducer/searchSlice";
import productByIdReducer from "../reducer/fetchProductById";
import wishlistReducer from "../reducer/wishlistSlice";
import shoppingBagReducer from "../reducer/shoppingBagSlice";
import userReducer from "../reducer/userSlice";
import addressReducer from "../reducer/addressSlice";
import sizeReducer from "../reducer/sizeSlice";
import orderSlice from "../reducer/orderSlice";

const store = configureStore({
  reducer: {
    allProducts: productReducer,
    categories: categoriesReducer,
    search: searchReducer,
    productById: productByIdReducer,
    wishlist: wishlistReducer,
    shoppingBag: shoppingBagReducer,
    user: userReducer,
    address: addressReducer,
    size: sizeReducer,
    order: orderSlice,
  },
});

export default store;
