import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import user from './user.reducer';

const store = createStore(
	combineReducers({
		user,
	}),
	applyMiddleware(thunk, logger),
);

export default store;
