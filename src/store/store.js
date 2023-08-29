import { legacy_createStore } from "redux";
import publicationReducer from "./reducers";

const store = legacy_createStore(publicationReducer);

export default store;