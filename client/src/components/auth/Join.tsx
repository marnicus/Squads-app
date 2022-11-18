
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createMember } from "../../api/dbAPI";
import { AuthState, SquadMember } from "../interfaces";
// import { redirect } from "react-router-dom";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { changeAuth, changeLoading } from "../../redux/authSlice";

const Join = () => {
  const { loading } = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = React.useState<File>();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    dispatch(changeLoading(true));
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newMember = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      profilePic: URL.createObjectURL(selectedFile!),
      email: formData.get("email"),
      password: formData.get("password"),
    } as SquadMember;

    const response = await createMember(newMember);
    console.log("CreateMember function " + console.log(JSON.stringify(response.result)));
    if (response.result) {
      const payload: AuthState = {
        isAuthenticated: true,
        loading: false,
        squadMember: response.member!
      }
      dispatch(changeAuth(payload));
      navigate("/");
    } else {
      dispatch(changeLoading(false));
    }

  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

          <Typography component="h1" variant="h5">
            Join
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item>
                {selectedFile ? (
                  <div>
                    <img src={URL.createObjectURL(selectedFile!)} height="100" width="100" alt={selectedFile?.name} />
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
                      return setSelectedFile(e.target.files[0]);
                    }}
                  />
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

            </Grid>
            {loading ? <Typography variant="h5">Saving member information..</Typography> : <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>}

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/join" >
                  <Typography variant="body2">Already have an account? Join</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>

    </React.Fragment>
  );
};

export default Join;
