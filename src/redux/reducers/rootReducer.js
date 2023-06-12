// import LoginReducer from './userReducer'
// // import userReducer from './sampleReducer';
// // import googleSignInReducer from './googleSigninReducer';
// import { combineReducers } from "redux";
// const rootRducer = combineReducers({
//     userData: LoginReducer
//     // signupdata:signUpReducer,
//     // logindata:loginReducer,
//     // googledata:googleSignInReducer,
// });
// export default rootRducer;

import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loadHomePageReducer from './homepageReducer';
import loadSeeMorePageReducer from './seemorepageReducer';
import loadfindReducer from './findeventReduser'
const rootReducer = combineReducers({
  user: userReducer,
  homepagedata:loadHomePageReducer,
  seemorepagedata:loadSeeMorePageReducer,
  findeventpagedata:loadfindReducer,
});

export default rootReducer;