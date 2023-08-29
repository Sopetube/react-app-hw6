import { legacy_createStore } from "redux";
import publicationReducer from "./reducers";
// import { composeWithDevTools } from 'redux-devtools-extension';

const store = legacy_createStore(publicationReducer, 
    // composeWithDevTools
    );

export default store;