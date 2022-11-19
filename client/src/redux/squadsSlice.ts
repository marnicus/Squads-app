import { Squads } from './../components/interfaces';
import { createSlice } from "@reduxjs/toolkit";

export const squadsSlice = createSlice({
    name: "squads",
    initialState: {
        loading: false,
        squads: []
    },
    reducers: {
        saveSquads: (state, actions) => {
           
        }
    }
})