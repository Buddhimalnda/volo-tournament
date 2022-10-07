import { configureStore } from "@reduxjs/toolkit";
import regSlice from "./register/refSlice";

export const store = configureStore({
  reducer: {
    register: regSlice,
  },
});
