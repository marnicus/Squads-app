import { Squads } from './../components/interfaces';
import { createSlice } from "@reduxjs/toolkit";
import { act } from 'react-dom/test-utils';


export const squadsSlice = createSlice({
    name: "squads",
    initialState: {
        loading: false,
        squads: [] as Squads[]
    },
    reducers: {
        saveSquad: (state, action) => {
            const squad = action.payload as Squads;
            state.squads.push(squad);
        },
        storeSquads: (state, action) => {
            state.squads = action.payload as Squads[];
        }
    }
});

export const { saveSquad, storeSquads } = squadsSlice.actions;

export default squadsSlice.reducer;