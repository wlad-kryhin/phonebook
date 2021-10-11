import contactsReducer from "./reducer";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
// const persistConfig = {
//   key: "items",
//   storage,
//   blacklist: ["filter"],
// };
// const persistedReducer = persistReducer(persistC onfig, contactsReducer);
const reducer = {
  contacts: contactsReducer,
};
// const store = createStore(reducer, composeWithDevTools());
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);
export { store };
