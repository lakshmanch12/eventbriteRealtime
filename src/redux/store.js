// import rootRducer from "../redux/reducers/rootReducer";
// import { legacy_createStore as createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(
//     rootRducer,
//     composeWithDevTools(),
// );
// export default store;
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}


const store = createStore(rootReducer, applyMiddleware(...middleware));
const abc = store.getState()
console.log('sdfgd',abc)

export {store}