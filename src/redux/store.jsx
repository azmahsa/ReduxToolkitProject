import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import favoriteSlice from "./slices/favouriteSlice";


export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    favorites: favoriteSlice.reducer
  },
});
