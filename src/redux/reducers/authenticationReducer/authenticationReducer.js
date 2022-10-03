import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { app } from '../../../config/firebase-config';
import {
	loginError,
	loginStart,
	loginSuccess,
	logoutError,
	logoutStart,
	logoutSuccess,
	registerError,
	registerStart,
	registerSuccess,
	LOGOUT_START,
	LOADING_LOGIN,
	LOADING_REGISTER,
	LOGOUT_ERROR,
	ERROR_LOGIN,
	ERROR_REGISTER,
	SUCCESS_LOGIN,
	SUCCESS_REGISTER,
	LOGOUT_SUCCESS,
} from '../../actions.js';

const initialState = {
	loading: false,
	error: null,
	errorMessage: '',
	currentUser: null,
};

export const authenticationReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGOUT_START:
		case LOADING_LOGIN:
		case LOADING_REGISTER:
			return {
				...state,
				loading: true,
			};
		case LOGOUT_ERROR:
		case ERROR_LOGIN:
		case ERROR_REGISTER:
			return {
				...state,
				error: action.payload.code,
				errorMessage: action.payload.message,
			};
		case SUCCESS_LOGIN:
		case SUCCESS_REGISTER:
			return {
				...state,
				currentUser: action.payload,
				loading: false,
				error: null,
				errorMessage: null,
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				currentUser: (state.currentUser = null),
				loading: false,
				error: null,
				errorMessage: null,
			};
		default:
			return state;
	}
};

// API FIREBASE AUTH

export const registerInitiate = (email, password, displayName) => {
	return (dispatch) => {
		dispatch(registerStart());
		const auth = getAuth(app);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				updateProfile(auth.currentUser, { displayName: displayName }).then(
					() => {
						const user = userCredential.user.providerData[0];
						dispatch(registerSuccess(user));
					}
				);
			})
			.catch((error) => {
				dispatch(registerError(error.code, error.message));
			});
	};
};

export const loginInitiate = (email, password) => {
	return (dispatch) => {
		dispatch(loginStart());
		const auth = getAuth(app);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user.providerData[0];
				dispatch(loginSuccess(user));
			})
			.catch((error) => {
				dispatch(loginError(error.code, error.message));
			});
	};
};

export const logoutInitiate = () => {
	return (dispatch) => {
		dispatch(logoutStart());
		const auth = getAuth(app);
		signOut(auth)
			.then(() => dispatch(logoutSuccess()))
			.catch((error) => {
				dispatch(logoutError(error.code, error.message));
			});
	};
};

export const errorSelector = (state) => state.authenticationReducer.error;
export const loadingSelector = (state) => state.authenticationReducer.loading;
export const loadingUser = (state) => state.authenticationReducer.currentUser;
