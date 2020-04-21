import {
    FETCH_COUNTRIES_ERROR,
    FETCH_COUNTRIES_REQUEST,
    FETCH_COUNTRIES_SUCCESS,
} from './countriesTypes';
import axios from 'axios';

export const fetchCountriesRequest = () => {
    return({
        type: FETCH_COUNTRIES_REQUEST,
    });
}

export const fetchCountriesSuccess = countriesData => {
    return({
        type: FETCH_COUNTRIES_SUCCESS,
        payload: countriesData.data,
    });
}

export const fetchCountriesError = error => {
    return({
        type: FETCH_COUNTRIES_ERROR,
        payload: error,
    });
}

export const fetchCountries = () => {
    return (
        (dispatch) => {
            dispatch(fetchCountriesRequest());
            axios
            .get(`https://corona.lmao.ninja/v2/countries?sort=country`)
            .then(response => {
                dispatch(fetchCountriesSuccess(response));
            })
            .catch( error => {
                dispatch(fetchCountriesError(error));
            })
            .finally();
        }
    );
}