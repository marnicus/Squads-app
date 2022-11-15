import { configureStore } from '@reduxjs/toolkit'
import sidePanelReducer from './sidePanelSlice';
import sideMenuReducer from './sideMenuSlice';
import squadRoomReducer from './squadRoomSlice';

export default configureStore({
    reducer: {
        squadRoomReducer,
        sideMenuReducer,
        sidePanelReducer
    }
});

