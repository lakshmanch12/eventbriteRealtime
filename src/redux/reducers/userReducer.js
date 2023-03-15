// import * as types from '../actions/actionTypes';
// const initialState = {
//     loading: false,
//     currentUser: null,
// }; 
//                 const LoginReducer = (state = initialState, action) => {
//                     console.log(action.type)
//                     switch (action.type) {
//                         case types.LOGIN_USER_START:
                
//                             return {
//                                 ...state,
//                                 loading: true,
                
//                             };
//                         case types.LOGIN_USER_SUCCESS:
//                             return {
//                                 ...state,
//                                 loading: false,
//                                 currentUser: action.payload,
//                             };
//                         case types.LOGIN_USER_ERROR:
//                             return {
//                                 ...state,
//                                 loading: false,
//                                 error: action.payload,
//                             };
//                             case types.SIGNUP_USER_START:
                
//                             return {
//                                 ...state,
//                                 loading: true,
                
//                             };
//                         case types.SIGNUP_USER_SUCCESS:
//                             return {
//                                 ...state,
//                                 loading: false,
//                             };
//                         case types.SIGNUP_USER_ERROR:
//                             return {
//                                 ...state,
//                                 loading: false,
//                                 error: action.payload,
//                             };
//                         default:
//                             return state;
//                     }
//                 };
            

import * as types from "../actions/actionTypes";
const initialState  = {
  loading: false,
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
      case types.LOGIN_START:
      case types.GOOGLE_SIGN_IN_START:
        case types.FACEBOOK_SIGN_IN_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      case types.GOOGLE_SIGN_IN_SUCCESS:
        case types.LOGIN_SUCCESS:
          case types.FACEBOOK_SIGN_IN_SUCCESS:
  
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
   
    
    case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
    case types.GOOGLE_SIGN_IN_FAIL:
    case types.FACEBOOK_SIGN_IN_FAIL:

   
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    default:
      return state;
  }
};

export default userReducer;
