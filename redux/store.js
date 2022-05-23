import { configureStore } from "@reduxjs/toolkit";
import accoutSlice from "./slices/accoutSlice";
accoutSlice;
const store = configureStore({
  reducer: {
    account: accoutSlice,
  },
});

export default store;
