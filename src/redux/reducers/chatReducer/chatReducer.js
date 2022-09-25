import { v4 as uuidv4 } from 'uuid';
import { CHAT_DELETE, CHAT_ADD } from '../../actions';

const initialState = {
	chats: [
		{
			id: uuidv4(),
			name: 'Default room',
		},
	],
};

export const chatReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHAT_DELETE:
			return {
				...state,
				chats: state.chats.filter((i) => i.id !== action.payload),
			};
		case CHAT_ADD:
			return {
				...state,
				chats: [...state.chats, action.payload],
			};
		default:
			return state;
	}
};
