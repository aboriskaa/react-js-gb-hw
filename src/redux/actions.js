// counter actions types
export const COUNTER_MINUS = 'counter/minus';
export const COUNTER_PLUS = 'counter/plus';
// chat actions types
export const CHAT_DELETE = 'chat/delete';
export const CHAT_ADD = 'chat/add';
// message actions types
export const MESSAGE_DELETE_ALL = 'message/delete/all';
export const MESSAGE_DELETE = 'message/delete';
export const MESSAGE_ADD = 'message/add';
//news actions types
export const NEWS_GET = 'news/get/all';
export const NEWS_LOAD = 'news/loading';
export const NEWS_ERROR = 'news/error';
export const NEWS_SEARCH = 'news/search';
//auth actions types
export const LOADING_REGISTER = 'auth/loading/to/register';
export const SUCCESS_REGISTER = 'auth/success/register';
export const ERROR_REGISTER = 'auth/error/register';
export const LOADING_LOGIN = 'auth/loading/login';
export const SUCCESS_LOGIN = 'auth/success/login';
export const ERROR_LOGIN = 'auth/error/login';
export const LOGOUT_START = 'auth/logout/start';
export const LOGOUT_SUCCESS = 'auth/logout/success';
export const LOGOUT_ERROR = 'auth/logout/error';
//auth actions
export const registerStart = () => ({
	type: LOADING_REGISTER,
});

export const registerError = (code, message) => ({
	type: ERROR_REGISTER,
	payload: { code, message },
});

export const registerSuccess = (user) => ({
	type: SUCCESS_REGISTER,
	payload: user,
});

export const loginStart = () => ({
	type: LOADING_LOGIN,
});

export const loginSuccess = (user) => ({
	type: SUCCESS_LOGIN,
	payload: user,
});

export const loginError = (code, message) => ({
	type: ERROR_LOGIN,
	payload: { code, message },
});

export const logoutStart = () => ({
	type: LOGOUT_START,
});

export const logoutError = (code, message) => ({
	type: LOGOUT_ERROR,
	payload: { code, message },
});

export const logoutSuccess = () => ({
	type: LOGOUT_SUCCESS,
});
