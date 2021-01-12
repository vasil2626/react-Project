import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from '../store/reducer';

let middlewayers = [thunk];

if(process.env.NODE_ENV === 'development'){
    middlewayers.push(logger);
}

let middlewaer = applyMiddleware(...middlewayers);

export let store = createStore(reducer, middlewaer);

