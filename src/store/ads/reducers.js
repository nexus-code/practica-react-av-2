// import { ADS_FILTERS } from '../../constants';
import * as TYPES from './types';
import { getAdsLS } from '../../utils/localStorage'

// Persists ads on LocalStorage. Improve in next versions
const adsLS =  getAdsLS();

const initialState = {
    ads: [] && adsLS,
    ui: {
        isFetching: false,
        error: null,
    },
};

export const ads = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_ADS_SUCCESS:
            return action.ads;
        default:
            return state;
    }
};

export const ui = (state = initialState.ui, action) => {
    switch (action.type) {
        case TYPES.FETCH_ADS_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case TYPES.FETCH_ADS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        case TYPES.FETCH_ADS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
            };
        default:
            return state;
    }
};

// export const filter = (state = initialState.filter, action) => {
//     switch (action.type) {
//         case TYPES.SET_FILTER:
//             return action.filter;
//         default:
//             return state;
//     }
// };