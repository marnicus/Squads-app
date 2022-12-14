import {
  Button,
  Modal,
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";
import React from "react";
import { modalBox } from "../../constants";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";


const CreateUser = () => {
  const [fullName, setFullName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [selectedFile, setSelectedFile] = React.useState<File>();
  const [imgPath, setImgPath] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveNewMember = async () => {
    console.log("Called SaveNewMember");


    // addDoc(collection(db, "members"), {
    //   fullName: newSquadMember.fullName,
    //   username: newSquadMember.username,
    //   profilePic: newSquadMember.profilePic,
    // })
    //   .then((value) => console.log(value))
    //   .catch((err) => console.log(err));
    // if (memberSaved) {
    //   console.log("Saved");
    // }

    // if (!memberSaved) {
    //   console.log("Not Saved");
    // }
  };
  return (
    <React.Fragment>
      <MenuItem onClick={handleOpen}>Create an user</MenuItem>
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
              <TextField
                id="outlined-basic"
                label="Full name"
                variant="outlined"
                fullWidth
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              {imgPath ? (
                <div>
                  <img src={imgPath} height="100" width="100" alt={imgPath} />
                  <br />
                  <Typography variant="h6">{selectedFile?.name}</Typography>
                </div>
              ) : (
                <div></div>
              )}
              <Button
                variant="contained"
                component="label"
                startIcon={<AddPhotoAlternateIcon />}
              >
                Upload Profile Picture
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    if (!e.target.files) return;
                    console.log(e.target.files[0]);
                    setImgPath(URL.createObjectURL(e.target.files[0]));
                    return setSelectedFile(e.target.files[0]);
                  }}
                />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button onClick={saveNewMember}>Save</Button>
              <Button onClick={handleClose}>Close</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default CreateUser;
