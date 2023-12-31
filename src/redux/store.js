import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
// import { persistStore } from "redux-persist";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import rootReducer from "./root-reducer";

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
})

export const persistor = persistStore(store);


