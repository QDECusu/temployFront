import * as types from './actionTypes';
import {
	request,
	logout as _logout,
	login as _login,
	signup as _signup,
	getToken,
} from '../api/Service';

const setUser = user => ({ type: types.SET_USER, payload: { user } });

export const login = ({ username, password }) => async (dispatch) => {
	try {
		const response = await _login({ username, password });
		if (response.success) {
			dispatch(getUser());
		}
		return response;
	} catch (e) {
		console.error(e);
	}
};

export const signup = data => async (dispatch) => {
	console.log('signup');
	try {
		const response = await _signup(data);
		if (response.success) {
			dispatch(getUser());
		}
		return response;
	} catch (e) {
		console.error(e);
	}
};

export const getUser = () => async (dispatch) => {
	try {
		if (getToken() !== null) {
			const user = await request.post('getUserDetail');
			dispatch(setUser(user));
		}
	} catch (e) {
		console.error(e);
	}
};

export const logout = () => (dispatch) => {
	_logout();
	dispatch(setUser(null));
};

