import { MESSAGE_DELETE, MESSAGE_ADD, MESSAGE_DELETE_ALL } from '../../actions';

const initialState = {
	messages: [],
};

export const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case MESSAGE_DELETE:
			return {
				...state,
				messages: state.messages.filter((i) => i.id !== action.payload),
			};
		case MESSAGE_ADD:
			return {
				...state,
				messages: [...state.messages, action.payload],
			};
		case MESSAGE_DELETE_ALL:
			return {
				...state,
				messages: state.messages.filter((i) => i.roomid !== action.payload),
			};
		default:
			return state;
	}
};
