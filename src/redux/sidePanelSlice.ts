import { createSlice } from '@reduxjs/toolkit';

export const sidePanelSlice = createSlice({
    name: 'sidePanel',
    initialState: {
        selection: 'squads'
    },
    reducers: {
        changeView: (state, action) => {
            state.selection = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { changeView } = sidePanelSlice.actions;

export default sidePanelSlice.reducer