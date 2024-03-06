import { configureStore } from "@reduxjs/toolkit";

import creatorReducer from "./creator";

export const store = configureStore({
  reducer: {
    creator: creatorReducer,
  },
});
