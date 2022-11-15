import { Modal, Box, Grid, TextField, MenuItem } from "@mui/material";
import React from "react";
import { modalBox } from '../../constants';


const CreateRoom = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return <React.Fragment>
        <MenuItem onClick={handleOpen}>Create an room</MenuItem >
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalBox}>
                <Grid container spacing={2}>
                    <Grid item>
                        <TextField id="outlined-basic" label="Room name" variant="outlined" />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    </React.Fragment>

}

export default CreateRoom;