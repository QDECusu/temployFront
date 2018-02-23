import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
	combineReducers(state => state),
	applyMiddleware(thunk, logger),
);

export default store;
