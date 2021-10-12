import contactsReducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import authReducer from "../auth/auth-slice";
import { configureStore } from "@reduxjs/toolkit";
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

// const store = createStore(reducer, composeWithDevTools());
const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);
export { store, persistor };
