import * as types from '../actions/actionTypes';

export default (user = null, action) => {
	switch (action.type) {
	case types.SET_USER:
		return action.payload.user;
	default:
		return user;
	}
};
