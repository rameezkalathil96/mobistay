import { configureStore } from "@reduxjs/toolkit";
import HotelSlice from "./Hotel-slice";
import loginSlice from "./login-Slice";

const store = configureStore({
  reducer: {
    hotel: HotelSlice.reducer,login:loginSlice.reducer,
  },
});
export default store;
