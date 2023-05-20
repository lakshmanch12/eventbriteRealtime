import * as types from './actionTypes';
import { auth, } from "../../firebase";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut} from "firebase/auth";
import { provider , facebookAuthProvider } from "../../firebase";
// import { createUserWithEmailAndPassword } from "../firebase";
import {  signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


// let navigate = useNavigate();
const registerStart = () => ({
    type: types.REGISTER_START,
  });
  
  
  const registerSuccess = ({ user, additionalData }) => ({
    type: types.REGISTER_SUCCESS,
    payload: { user, additionalData },
  });
  
  const registerError = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error,
  });
   export const loginStart = () => ({
    type: types.LOGIN_START,
  });
  
   export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
    
  });
  
  export const loginError = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error,
  });
  // const logoutStart = () => ({
  //   type: types.LOGOUT_START,
  // });
  
  // const logoutSuccess = () => ({
  //   type: types.LOGOUT_SUCCESS,
  // });
  
  // const logoutError = (error) => ({
  //   type: types.LOGOUT_FAIL,
  //   payload: error,
  // });
  const googleSignInStart = () => ({
    type: types.GOOGLE_SIGN_IN_START,
  });
  
  const googleSignInSuccess = (user) => ({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
  });
  
  const googleSignInFail = (error) => ({
    type: types.GOOGLE_SIGN_IN_FAIL,
    payload: error,
  });
  const fbSignInStart = () => ({
    type: types.FACEBOOK_SIGN_IN_START,
  });
  
  const fbSignInSuccess = (user) => ({
    type: types.FACEBOOK_SIGN_IN_SUCCESS,
    payload: user,
  });
  
  const fbSignInFail = (error) => ({
    type: types.FACEBOOK_SIGN_IN_FAIL,
    payload: error,
  });
 
  export const registerInitiate = (email,firstName,password,lastName) => {
    console.log(registerInitiate,"userrrrrrrrrrrrrrrr")
   
    return function (dispatch) {
    
    
      dispatch(registerStart());
      
      createUserWithEmailAndPassword(auth, email, password)
    

        .then(({ user }) => {
      
   
          // 
          dispatch(registerSuccess({ user, additionalData: { firstName,lastName } }));
          console.log(user,"userrrrrrrrrrrrrrrr")
          
        })
        
        .catch((error) => dispatch(registerError(error.message)));
    };
  };

 
  export const loginInitiate = (email, password) => {
    return function (dispatch) {
      // let  navigate = useNavigate();
  
      dispatch(loginStart());
    
    
        signInWithEmailAndPassword(auth,email, password)
       .then(async (res) => {
          
          const user = res.user;
          const userId = user.uid
          console.log(user.uid,"res");
          
          dispatch(loginSuccess(user));
         
          // navigate("/",{state:user});
          // if(user!==null){
          //  
          // }
      })
      .catch((error) => dispatch(loginError(error.message)))
      alert("errorrrrrrrrrrrrrr")
    };
  };
  export const googleSignInInitiate = () => {
    return function (dispatch) {
      dispatch(googleSignInStart());
      
        signInWithPopup(auth,provider)
        .then(({ user }) => {
          dispatch(googleSignInSuccess(user));
        })
        .catch((error) => dispatch(googleSignInFail(error.message)));
    };
  };
  export const fbSignInInitiate = () => {
    return function (dispatch) {
      dispatch(fbSignInStart());
      
  signInWithPopup(auth,facebookAuthProvider)
        .then((result) => {
          dispatch(fbSignInSuccess(result.user));
        })
        .catch((error) => dispatch(fbSignInFail(error.message)));
    };
  };
  // export const logoutInitiate = () => {

  //   return function (dispatch) {
  //     dispatch(logoutStart());
  //     signOut(auth).then(() => {
  //       dispatch(logoutSuccess())
  //     }).catch((error) => {
  //       dispatch(logoutError(error.message))
  //     });
  //     // signOut(auth)
  //     //   .then((resp) => dispatch(logoutSuccess()))
  //     //   .catch((error) => dispatch(logoutError(error.message)));
  //   };
  // };
  export const  logout = ()=>(
  {
type:types.LOGOUT,
  });