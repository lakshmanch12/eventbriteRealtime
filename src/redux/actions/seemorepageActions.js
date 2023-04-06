import * as types from './actionTypes';
import { seemorepageApi } from '../api/seemorepageApi';
//get fav images 
export const loadSeeMorePageStart = () => ({
//   console.log("homepageactions")
    type: types.GET_SeeMore_PAGE_START
});
export const loadSeeMorePageSuccess = (data) => ({
    type: types.GET_SeeMore_PAGE_SUCCESS,
    payload: data,
});
    
export const loadSeeMorePageError = (error) =>({
    type:types.GET_SeeMore_PAGE_ERROR,
    payload: error,
});
    
export const getSeeMorePageInitiate = () => {
    // alert('get user in acation page');
    return function (dispatch) {
        dispatch(loadSeeMorePageStart());
        seemorepageApi()
            .then(async (res) => {
                dispatch(loadSeeMorePageSuccess(res));
            })
            .catch((error) => dispatch(loadSeeMorePageError(error.message)))
    }
}


	