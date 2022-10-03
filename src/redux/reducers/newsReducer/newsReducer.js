import { NEWS_GET, NEWS_LOAD, NEWS_ERROR, NEWS_SEARCH } from '../../actions';
import { URI, options, API_TOKEN } from '../../../api/newsAPI';

const initialState = {
	news: [],
	loading: false,
	error: '',
	search: 'War in Ukraine',
};

export const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEWS_GET:
			return {
				...state,
				news: [...action.payload],
				loading: false,
			};
		case NEWS_LOAD:
			return {
				...state,
				loading: true,
			};
		case NEWS_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case NEWS_SEARCH:
			return {
				...state,
				search: action.payload,
			};
		default:
			return state;
	}
};

export const getNews = (search) => {
	return async (dispatch) => {
		try {
			dispatch({ type: NEWS_LOAD });
			const response = await fetch(URI + options + search + API_TOKEN);
			const data = await response.json();
			dispatch({
				type: NEWS_GET,
				payload: [...data?.articles],
			});
		} catch (error) {
			dispatch({
				type: NEWS_ERROR,
				payload: error.toString(),
			});
		}
	};
};
