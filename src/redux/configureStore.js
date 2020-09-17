import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./modules/quoteSlice";

export default configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
