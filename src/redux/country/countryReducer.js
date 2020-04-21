import {
    FETCH_COUNTRY_ERROR,
    FETCH_COUNTRY_REQUEST,
    FETCH_COUNTRY_SUCCESS,
} from './countryTypes';

const initialCountryState = {
    isLoading: false,
    countryData: {},
    error: ``,
}

const countryReducer = (state = initialCountryState, action) => {
    switch(action.type){
        case FETCH_COUNTRY_REQUEST:
            return ({
                ...state,
                isLoading: true,
            });
        case FETCH_COUNTRY_SUCCESS: 
            return ({
                ...state,
                isLoading: false,
                countryData: action.payload,
                error: ``,
            });
        case FETCH_COUNTRY_ERROR:
            return({
                ...state,
                isLoading: false,
                countryData: {},
                error: action.payload,
            });
        default:
            return state;
    }
}

export default countryReducer;