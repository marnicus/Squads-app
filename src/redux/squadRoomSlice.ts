import { createSlice } from '@reduxjs/toolkit';

export const squadRoomSlice = createSlice({
    name: 'squadRoom',
    initialState: {
        room: '',
        data: [],
    },
    reducers: {}
});

export default squadRoomSlice.reducer;