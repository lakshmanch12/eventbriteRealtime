import * as types from './actionTypes';
import { findEventApi } from '../api/findEventApi';
//get fav images 
export const loadfindeventPageStart = () => ({
//   console.log("homepageactions")
    type: types.GET_Find_PAGE_START
});
export const loadfindeventPageSuccess = (data) => ({
   
    type: types.GET_Find_PAGE_SUCCESS,
    payload: data,
   
});
    
export const loadfindeventPageError = (error) =>({
    type:types.GET_Find_PAGE_ERROR,
    payload: error,
});
// 
export const getFindEventPageInitiate = () => {
    alert('get user in acation page');
    return function (dispatch) {
        dispatch(loadfindeventPageStart());
        findEventApi()
            .then(async (res) => {
                
                
                const findeventdata = [];
                for (let key in res.data) {
                    findeventdata.push({ id: key, ...res.data[key] });
                }
                dispatch(loadfindeventPageSuccess(findeventdata));
            })
            .catch((error) => dispatch(loadfindeventPageError(error.message)))
    }
}


	