import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from '../store/reducer';

let middlewaer = applyMiddleware(thunk, logger);

export let store = createStore(reducer, middlewaer);

