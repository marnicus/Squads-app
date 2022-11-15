import Grid from "@mui/material/Grid";
import MyAppBar from "./header/MyAppbar";
import SideMenu from './core/SideMenu';
import SidePanel from './core/SidePanel';
import ChatRoom from './core/rooms/ChatRoom';
import React from "react";

const MainContent = () => {
    return <React.Fragment>
        <MyAppBar />
        <Grid container spacing={0}>
            <Grid item xs={1}>
                <SideMenu />
            </Grid>
            <Grid item xs={2}>
                <SidePanel />
            </Grid>
            <Grid item xs={9}>
                <ChatRoom />
            </Grid>

        </Grid>
    </React.Fragment>

}

export default MainContent;