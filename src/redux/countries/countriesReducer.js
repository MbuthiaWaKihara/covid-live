import {
    FETCH_COUNTRIES_ERROR,
    FETCH_COUNTRIES_REQUEST,
    FETCH_COUNTRIES_SUCCESS,
} from './countriesTypes';

const initialCountriesState = {
    isLoading: false,
    countriesData: [],
    error: ``,
}

const countriesReducer = (state = initialCountriesState, action) => {
    switch(action.type){
        case FETCH_COUNTRIES_REQUEST:
            return ({
                ...state,
                isLoading: true,
            });
        case FETCH_COUNTRIES_SUCCESS: 
            return ({
                ...state,
                isLoading: false,
                countriesData: action.payload,
                error: ``,
            });
        case FETCH_COUNTRIES_ERROR:
            return({
                ...state,
                isLoading: false,
                countriesData: [],
                error: action.payload,
            });
        default:
            return state;
    }
}

export default countriesReducer;