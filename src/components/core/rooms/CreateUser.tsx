import { Button, Modal, Box, Typography, Grid, TextField, Input, MenuItem, IconButton } from "@mui/material";
import React from "react";
import { modalBox } from '../../constants';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
const ariaLabel = { 'aria-label': 'description' };

const CreateUser = () => {
    const [fullName, setFullName] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [selectedFile, setSelectedFile] = React.useState<File>();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return <React.Fragment>
        <MenuItem onClick={handleOpen}>Create an user</MenuItem >
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalBox}>
                <Typography variant="h4">Create a new user</Typography>
                <hr />  
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Full name" variant="outlined" fullWidth value={fullName}
                            onChange={(e) => setFullName(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth value={userName}
                            onChange={(e) => setUserName(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        {selectedFile ? <div><img src={selectedFile.name} height='50' width='50' alt={selectedFile.name} /><br /><Typography variant="h6">{selectedFile.name}</Typography></div> : <div></div>}
                        <Button variant="contained" component="label" startIcon={<AddPhotoAlternateIcon />}>
                            Upload Profile Picture
                            <input hidden accept="image/*" type="file"
                                onChange={(e) => {
                                    if (!e.target.files) return;
                                    console.log(e.target.files[0])
                                    return setSelectedFile(e.target.files[0])
                                }} />
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button>Save</Button>
                        <Button onClick={handleClose}>Close</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    </React.Fragment>

}

export default CreateUser;