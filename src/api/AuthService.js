const BASE_URL = 'http://localhost:8000';

const getToken = () => {
	const token = localStorage.getItem('authToken');
	if (token === null) {
		throw new Error('Authentication token missing');
	} else {
		return token;
	}
};

const setToken = (token) => {
	if (token == null) {
		localStorage.removeItem('authToken');
	} else {
		localStorage.setItem('authToken', token);
	}
};

export const login = async ({ username, password }) => {
	const headers = new Headers({ 'Content-Type': 'application/json' });
	const body = JSON.stringify({ username, password });
	const response = await fetch(`${BASE_URL}/login/`, { method: 'post', body, headers });
	const { token } = await response.json();
	setToken(token);
};

export const signup = async ({ username, email, password }) => {
	const headers = new Headers({ 'Content-Type': 'application/json' });
	const body = JSON.stringify({ username, email, password });
	const response = await fetch(`${BASE_URL}/signup/`, { method: 'post', body, headers });
	const { token } = await response.json();
	setToken(token);
};

export const logout = () => setToken(null);

export const request = (route, options = {}) => {
	const headers = new Headers({ 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` });
	const body = JSON.stringify(options.body);
	const optionsWithAuth = { ...options, body, headers };
	return fetch(`${BASE_URL}/${route}`, optionsWithAuth);
};

