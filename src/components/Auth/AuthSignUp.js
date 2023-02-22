import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
// import {
//   Avatar,
//   Button,
//   Paper,
//   Grid,
//   Typography,
//   Container,
// } from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import useStyles from "./styles";

import { signUp } from "../../actions/auth";
import { Google } from "react-bootstrap-icons";
import { Spinner } from "react-bootstrap";
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

  // const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(initialStateField);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // const [isSignup, setIsSignup] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setLoading(true);
    try {
      dispatch(signUp(formData, history));
    } catch (e) {
      console.log(e);

      setLoading(false);
    }

    setLoading(false);

    // if (isSignup) {
    //   dispatch(signUp(formData, history));
    // } else {
    //   dispatch(signIn(formData, history));
    // }
  };
  const handleChange = (e) => {
    // e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const switchSignUp = () => setIsSignup((prevIsSignup) => !prevIsSignup);

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
      <main className="container d-flex flex-column align-items-center justify-content-center">
        <br />
        <h2>WELCOME TO GOODNEWS!</h2>
        <main className="col-8">
          <h3> Sign In</h3>
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <section>
              <input
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                autoFocus
                className="form-control mt-3"
              />
              <input
                name="lastName"
                placeholder="Last Name"
                className="form-control mt-3"
                onChange={handleChange}
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="form-control mt-3"
              />
              <input
                name="password"
                placeholder="Password"
                className="form-control mt-3"
                onChange={handleChange}
                // type={showPassword ? "text" : "password"}
                // handleShowPassword={handleShowPassword}
              />

              <input
                name="confirmPassword"
                placeholder="Repeat Password"
                className="form-control mt-3"
                onChange={handleChange}
                // type={showConfirmPassword ? "text" : "password"}
                // handleShowPassword={handleShowConfirmPassword}
              />
            </section>
            <button type="submit" className="main-btn mt-5">
              {loading && <Spinner />} <h2> Sign Up</h2>
            </button>
            <GoogleLogin
              clientId="605636590964-tj8lo0qpu02vfkofbuv79d247j0rb9bs.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className="mt-3"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Google Sign In <Google size={30} color="var(--main-color)" />
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />

            <p className="mt-2">
              Already Have an account? <Link to="/authsignin">Sign In</Link>
            </p>
          </form>
        </main>
      </main>
    </>
  );
};

export default Auth;
