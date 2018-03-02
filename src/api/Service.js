const BASE_URL = 'http://localhost:8000';

export const getToken = () => localStorage.getItem('authToken');

const setToken = token =>
	(token === null
		? localStorage.removeItem('authToken')
		: localStorage.setItem('authToken', token));

export const login = async ({ username, password }) => {
	const headers = new Headers({ 'Content-Type': 'application/json' });
	const body = JSON.stringify({ username, password });
	const blob = await fetch(`${BASE_URL}/login/`, { method: 'post', body, headers });
	const { token } = await blob.json();
	if (token) {
		setToken(token);
		return { success: true };
	}
	return { success: false };
};

export const signup = async (data) => {
	const {
		firstName: first_name, lastName: last_name, email, username, password,
	} = data;
	const headers = new Headers({ 'Content-Type': 'application/json' });
	const body = JSON.stringify({
		first_name, last_name, email, username, password,
	});
	const blob = await fetch(`${BASE_URL}/signup/`, { method: 'post', body, headers });
	const response = await blob.json();
	const { token } = response;
	if (token) {
		setToken(token);
		return { success: true };
	}
	return { success: false };
};

export const logout = () => setToken(null);

const _request = async (route, options) => {
	const token = getToken();
	const headers = new Headers({ 'Content-Type': 'application/json', Authorization: `Token ${token}` });
	const body = options.body ? JSON.stringify(options.body) : null;
	const optionsWithAuth = body === null ? { ...options, headers } : { ...options, headers, body };
	const blob = await fetch(`${BASE_URL}/${route}/`, optionsWithAuth);
	return blob.json();
};

const get = (route, options = {}) => _request(route, { ...options, method: 'get' });

const post = (route, options = {}) => _request(route, { ...options, method: 'post' });

const patch = (route, options = {}) => _request(route, { ...options, method: 'patch' });

export const request = { get, post, patch };
