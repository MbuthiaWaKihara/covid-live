import {
    FETCH_WORLDDATA_ERROR,
    FETCH_WORLDDATA_REQUEST,
    FETCH_WORLDDATA_SUCCESS,
} from './worldTypes';

const initialWorldState = {
    isLoading: false,
    worldData: {},
    error: ``,
}

const worldReducer = (state = initialWorldState, action) => {
    switch(action.type){
        case FETCH_WORLDDATA_REQUEST:
            return ({
                ...state,
                isLoading: true,
            });
        case FETCH_WORLDDATA_SUCCESS: 
            return ({
                ...state,
                isLoading: false,
                worldData: action.payload,
                error: ``,
            });
        case FETCH_WORLDDATA_ERROR:
            return({
                ...state,
                isLoading: false,
                worldData: {},
                error: action.payload,
            });
        default:
            return state;
    }
}

export default worldReducer;