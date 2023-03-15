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

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;