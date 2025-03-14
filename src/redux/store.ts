import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
  
    auth : authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // the middlewares here
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store