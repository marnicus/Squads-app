import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { loginMember } from "../../api/dbAPI";
import { AuthState, Login } from "../interfaces";
import { changeAuth, changeLoading } from "../../redux/authSlice";



const LoginMember = () => {
  const { loading } = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get('email'),
      password: data.get('password')
    } as Login;

    const response = await loginMember(formData!);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            {loading ? <Typography variant="body2">Looking for you..</Typography> : <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>}

            <Grid container>

              <Grid item>
                <Link to="/join">
                  <Typography variant="body2">{"Don't have an account? Sign Up"}</Typography>

                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </React.Fragment>
  );
};

export default LoginMember;
