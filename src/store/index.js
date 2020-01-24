import { combineReducers, createStore } from "redux";

import account from "./account";

const reducers = combineReducers({
  account
});
const store = createStore(reducers);
export default store;
