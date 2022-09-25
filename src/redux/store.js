// import { createStore } from 'redux'  <-- old school style
// export const store = createStore(reducers); <-- old school style

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import { counterReducer } from './reducers/counterReducer/counterReducer';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'reduxjs-toolkit-persist';
import { chatReducer } from './reducers/chatReducer/chatReducer';
import storage from 'reduxjs-toolkit-persist/lib/storage'; // defaults to localStorage for web
import { messageReducer } from './reducers/messageReducer/messageReducer';
import { log } from './middleware/log';

const reducers = combineReducers({
	counterReducer,
	chatReducer,
	messageReducer,
});

const persistConfig = {
	key: 'root',
	storage: storage,
	stateReconciler: autoMergeLevel1,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				/* ignore persistance actions */
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).prepend(log),

	// middleware: [log], //(getDefaultMiddleware) => getDefaultMiddleware().concat(log),
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
