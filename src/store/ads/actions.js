import {
    FETCH_ADS_REQUEST,
    FETCH_ADS_FAILURE,
    FETCH_ADS_SUCCESS,

    SAVED_AD_REQUEST,
    SAVED_AD_FAILURE,
    SAVED_AD_SUCCESS,

    // SET_FILTER,
} from './types';

import { searchAds, saveAd } from '../../services/AdService';


export const fetchAds = () => {

    async function __fetchAds(dispatch, getState, extraArgument) {
        dispatch(fetchAdsRequest());
        try {
            const ads = await searchAds();
            dispatch(fetchAdsSuccess(ads));
        } catch (error) {
            dispatch(fetchAdsFailure(error));
        }
    };

    return __fetchAds;
};

export const fetchAdsRequest = () => ({
    type: FETCH_ADS_REQUEST,
});

export const fetchAdsFailure = error => ({
    type: FETCH_ADS_FAILURE,
    error,
});

export const fetchAdsSuccess = ads => ({
    type: FETCH_ADS_SUCCESS,
    ads,
});

// export const savedAd = (ad, method, id) => {

//     return function (dispatch, getState, extraArgument) {

//         dispatch(savedAdRequest());

//         const result = saveAd(ad, method, id)
//         .then(() => dispatch(savedAdSuccess()))
//         .catch(() => dispatch(savedAdFailure()));
//     };
// };


export const savedAd = (ad, method, id) => {

    return function (dispatch, getState, extraArgument) {

        dispatch(savedAdRequest());

        try {

            const result = saveAd(ad, method, id)
            //     .then((res) => {dispatch(savedAdSuccess()); console.log('result action 67', res);})
            //     .catch(() => dispatch(savedAdFailure()));
            // console.log('result action result', result);

            console.log('result action result', result);
            dispatch(savedAdSuccess());
            return result;

        } catch (error) {

            dispatch(savedAdFailure());
            return false;
        }
    };
};

export const savedAdRequest = ad => ({
    type:SAVED_AD_REQUEST,
    ad,
});

export const savedAdFailure = error => ({
    type:SAVED_AD_FAILURE,
    error,
});

export const savedAdSuccess = result => ({
    type:SAVED_AD_SUCCESS,
    result,
});

// export const setFilter = filter => ({
//     type: SET_FILTER,
//     filter,
// });