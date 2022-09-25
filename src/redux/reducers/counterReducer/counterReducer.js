import { COUNTER_MINUS, COUNTER_PLUS } from '../../actions';

export const counterReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case COUNTER_MINUS:
			return {
				count: state.count - 1,
			};
		case COUNTER_PLUS:
			return {
				count: state.count + 1,
			};
		default:
			return state;
	}
};

export const middleware = (store) => (next) => (action) => {
	console.log('We can do side effects here!');
	setTimeout(() => {
		console.log('timeouts, api calls etc');
	}, 1000);

	return next(action);
};
