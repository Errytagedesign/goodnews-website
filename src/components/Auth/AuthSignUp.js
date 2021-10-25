import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import Icon from "./icon";
import { signIn, signUp } from "../../actions/auth";
const initialStateField = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  if (user) window.location.replace("/");

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(initialStateField);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isSignup, setIsSignup] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (isSignup) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
  };
  const handleChange = (e) => {
    // e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const switchSignUp = () => setIsSignup((prevIsSignup) => !prevIsSignup);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful");
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <br />
        <h2>WELCOME TO GOODNEWS!</h2>
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">
            {isSignup ? "Sign Up" : "Sign In"}
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    half
                  />
                </>
              )}
              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
              />
              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && (
                <Input
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type={showConfirmPassword ? "text" : "password"}
                  handleShowPassword={handleShowConfirmPassword}
                />
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
            <GoogleLogin
              clientId="605636590964-tj8lo0qpu02vfkofbuv79d247j0rb9bs.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  className={classes.googleButton}
                  color="primary"
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<Icon />}
                  variant="contained"
                >
                  Google Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <Button onClick={switchSignUp}>
              {isSignup
                ? "Already Have an account? Sign In"
                : "Don't have an account? click to Sign Up!"}
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default Auth;
