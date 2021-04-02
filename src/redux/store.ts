import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { darkTheme, lightTheme } from "../theme/theme";
import { loadState, saveState } from "../utils/localstorage";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers/rootReducers";
import themeReducer from "./reducers/themeReducer";

const composedEnchancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

const middlewares =
  process.env.NODE_ENV !== "production"
    ? [require("redux-immutable-state-invariant").default(), thunk]
    : [thunk];

const store = createStore(
  combineReducers({ rootReducer, persistedThemeReducer }),
  { persistedThemeReducer: { theme: lightTheme }, rootReducer: {} },
  composedEnchancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

store.subscribe(() => {
});

export default store;
