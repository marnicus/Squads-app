import { configureStore } from '@reduxjs/toolkit'
import sidePanelReducer from './sidePanelSlice';
import sideMenuReducer from './sideMenuSlice';
import squadRoomReducer from './squadRoomSlice';
import squadsSlice from './squadsSlice';
import authReducer from './authSlice';
import { logger } from './middleware';

export const store = configureStore({
    middleware: [logger],
    reducer: {
        authReducer,
        squadRoomReducer,
        squadsSlice,
        sideMenuReducer,
        sidePanelReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch