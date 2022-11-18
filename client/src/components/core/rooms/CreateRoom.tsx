import { Modal, Box, Grid, TextField, MenuItem } from "@mui/material";
import { useState, Fragment } from "react";
import { modalBox } from '../../constants';
import { getMembers } from '../../../api/dbAPI';
import { AllMembers } from "../../interfaces";


const CreateRoom = () => {
    const [open, setOpen] = useState(false);
    const [members, setMembers] = useState<[]>([])
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useState(() => {

    })

    const queryAllMembers = async () => {
        const getAllMembers: AllMembers[] = await getMembers();
        setMembers(getAllMembers);
    }
    return <Fragment>
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
    </Fragment>

}

export default CreateRoom;