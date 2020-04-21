import { combineReducers } from 'redux';
import  worldReducer from './world/worldReducer';
import countriesReducer from './countries/countriesReducer';
import countryReducer from './country/countryReducer';

const rootReducer = combineReducers({
    world: worldReducer,
    countries: countriesReducer,
    country: countryReducer,
});

export default rootReducer;