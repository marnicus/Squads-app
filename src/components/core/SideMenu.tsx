import { Card, Grid } from "@mui/material";
import React from "react";
import Icon from '@mui/material/Icon';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const SideMenu = () => {

    return <React.Fragment>
        <Card id="sideMenu" >
            <nav>
                <Grid container spacing={1} direction="column" alignItems="center">

                    <Grid item xs={1} textAlign='center' justifyContent="center" alignItems="center">
                        <Icon>notifications</Icon>
                        <h5>Activity</h5>
                    </Grid>
                    <Grid item xs={1} textAlign='center' justifyContent="center" alignItems="center">
                        <Icon>groups</Icon>
                        <h5>Squads</h5>
                    </Grid>

                </Grid>

            </nav>
        </Card>
    </React.Fragment>

}

export default SideMenu;