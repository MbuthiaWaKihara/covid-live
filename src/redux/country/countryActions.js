import {
    FETCH_COUNTRY_ERROR,
    FETCH_COUNTRY_REQUEST,
    FETCH_COUNTRY_SUCCESS,
} from './countryTypes';
import axios from 'axios';

export const fetchCountryRequest = () => {
    return({
        type: FETCH_COUNTRY_REQUEST,
    });
}

export const fetchCountrySuccess = countryData => {
    return({
        type: FETCH_COUNTRY_SUCCESS,
        payload: countryData.data,
    });
}

export const fetchCountryError = error => {
    return({
        type: FETCH_COUNTRY_ERROR,
        payload: error,
    });
}

export const fetchCountry = country => {
    return (
        (dispatch) => {
            dispatch(fetchCountryRequest());
            axios
            .get(`https://corona.lmao.ninja/v2/countries/${country}`)
            .then(response => {
                dispatch(fetchCountrySuccess(response));
            })
            .catch( error => {
                dispatch(fetchCountryError(error));
            })
            .finally();
        }
    );
}