import { createSlice } from '@reduxjs/toolkit';

export const sideMenuSlice = createSlice({
    name: 'sideMenu',
    initialState: {
        selection: 'squads'
    },
    reducers: {
        changeAction: (state, action) => {
            state.selection = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { changeAction } = sideMenuSlice.actions;

export default sideMenuSlice.reducer