// import { createStore } from 'redux'  <-- old school style
// export const store = createStore(reducers); <-- old school style

import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducers/counterReducer/counterReducer'
import { chatReducer } from './reducers/chatReducer/chatReducer';
import { messageReducer } from './reducers/messageReducer/messageReducer'
export const store = configureStore({
    reducer: {
        counterReducer,
        chatReducer,
        messageReducer
    },
})