import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const thunkMiddleware = require('redux-thunk').default;
const middleWare = [thunkMiddleware];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;