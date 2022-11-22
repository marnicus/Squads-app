import { createSlice } from '@reduxjs/toolkit';
import { Message } from '../components/interfaces';

export const squadRoomSlice = createSlice({
    name: 'squadRoom',
    initialState: {
        squadID: '',
        squadName: '',
        messages: [] as Message[],
        loading: false
    },
    reducers: {
        loadSquad: (state, action) => {
            const { squadName, messages } = action.payload;
            state.loading = true;
            state.squadName = squadName;
            state.messages = messages;
            state.loading = false;
        },
        postMessage: (state, action) => {
            const { Message: message } = action.payload;
            state.messages.push(message!);
        }
    }
});

export const { loadSquad, postMessage } = squadRoomSlice.actions;

export default squadRoomSlice.reducer;