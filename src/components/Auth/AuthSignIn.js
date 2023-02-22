import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

// import Icon from "./icon";
import { signIn } from "../../actions/auth";
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
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(initialStateField);

  const [showPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // if (isSignup) {
    //   dispatch(signUp(formData, history));
    // } else {
    //   dispatch(signIn(formData, history));
    // }
    console.log(loading);

    setLoading(true);
    dispatch(signIn(formData, history)).catch((e) => {
      setLoading(false);

      console.log(e);
    });

    setLoading(false);
  };
  const handleChange = (e) => {
    // e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const switchSignUp = () => setIsSignup((prevIsSignup) => !prevIsSignup);

  // const handleShowPassword = () =>
  //   setShowPassword((prevShowPassword) => !prevShowPassword);

  // const handleShowConfirmPassword = () =>
  //   setShowConfirmPassword((prevShowPassword) => !prevShowPassword);

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
        <br />
        <main className="col-8">
          <h3>Sign In</h3>
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <section>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="form-control mt-3"
              />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                onChange={handleChange}
                className="form-control mt-3"
                // handleShowPassword={handleShowPassword}
              />
            </section>
            <button className="main-btn mt-5" type="submit">
              {loading && <Spinner />} <h2> Sign In</h2>
            </button>
            <GoogleLogin
              clientId="605636590964-tj8lo0qpu02vfkofbuv79d247j0rb9bs.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  // className={classes.googleButton}
                  // color="primary"
                  // fullWidth
                  className=" mt-3"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  // startIcon={<Icon />}
                  // variant="contained"
                >
                  Google Sign In <Google size={30} color="var(--main-color)" />
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />

            <p className="mt-2">
              Don't have an account? <Link to="/authsignup">Sign Up!</Link>{" "}
            </p>
          </form>
        </main>
      </main>
    </>
  );
};

export default Auth;
