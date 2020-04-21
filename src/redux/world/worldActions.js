import {
    FETCH_WORLDDATA_ERROR,
    FETCH_WORLDDATA_REQUEST,
    FETCH_WORLDDATA_SUCCESS,
} from './worldTypes';
import axios from 'axios';

export const fetchWorlddataRequest = () => {
    return({
        type: FETCH_WORLDDATA_REQUEST,
    });
}

export const fetchWorlddataSuccess = worldData => {
    return({
        type: FETCH_WORLDDATA_SUCCESS,
        payload: worldData.data,
    });
}

export const fetchWorlddataError = error => {
    return({
        type: FETCH_WORLDDATA_ERROR,
        payload: error,
    });
}

export const fetchWorlddata = () => {
    return (
        (dispatch) => {
            dispatch(fetchWorlddataRequest());
            axios
            .get(`https://corona.lmao.ninja/v2/all`)
            .then(response => {
                dispatch(fetchWorlddataSuccess(response));
            })
            .catch( error => {
                dispatch(fetchWorlddataError(error));
            })
            .finally()
        }
    )
}