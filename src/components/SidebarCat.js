import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Avatar, Typography } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  MenuButton,
  Youtube,
  CalendarEvent,
  Envelope,
  CaretDownFill,
  PersonLinesFill,
  FilePersonFill,
} from "react-bootstrap-icons";
import useStyles from "../components/Navbar/styles";

import styled from "styled-components";
const DropdownLink = styled(Link)`
  display: flex;
  color: #fff;
  align-items: center;
  padding-left: 3em;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;

  &:hover {
    background: var(--pry-color);
    border-left: 4px solid var(--sec-color);
    cursor: pointer;
    color: #fff;
  }

  @media screen and (max-width: 500px) {
    padding-left: 1.5em;
  }
`;

const SubMenuLabel = styled.span`
  color: #fff;
  margin-left: 1em;
  position: relative;
  top: 0;
  // right: ${({ navbar }) => (navbar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 200;
`;
const SubMenuLink = styled(Link)`
  display: flex;
  color: #fff;
  align-items: center;
  padding: 1.1em;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1em;

  &:hover {
    background: var(--pry-color);
    border-left: 4px solid var(--sec-color);
    cursor: pointer;
    color: #fff;
  }
`;

const SignInLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  :hover {
    color: #fff;
    background: var(--sec-color);
  }
`;

const ButtonWrap = styled(Button)`
  border: 2px var(--sec-color) solid;
  color: var(--sec-color);

  :hover {
    color: #fff;
    background: var(--sec-color);
  }
`;

const ButtonWrapIn = styled(Button)`
  background: var(--sec-color);
  color: var(--sec-color);
  border: none;

  :hover {
    color: #fff;
    background: var(--pry-color);
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 1em;
  }
`;

// const ButtonSignIn = styled.div`
//   color: white;
//   background-color: red;
// `;
// const ButtonSignOut = styled.div`
//   text-decoration: none;
// `;

const baseURL = "https://api-good-news.herokuapp.com/api";
// const baseURL = "http://localhost:3001/api";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

function SidebarCat() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    setUser(null);
    localStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const [subCat, setSubCat] = useState(false);

  const showSubCat = () => setSubCat(!subCat);

  const [categories, setCategories] = useState(null);
  useEffect(() => {
    axios.get(`${baseURL}/categories/all`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  if (!categories) return null;

  let data = categories.data;

  return (
    <>
      <div className="col-8 text-end ">
        {user ? (
          <>
            <Avatar
              className={classes.green}
              src={user?.result.imageUrl}
              alt={user.name}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <WhiteTextTypography className={classes.userName} variant="h6">
              {user?.result.name}
            </WhiteTextTypography>
            <Button variant="secondary" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <div className="d-flex flex-column flex-md-row col-12 justify-content-between">
            <ButtonWrapIn variant="secondary">
              <SignInLink to="/authsignin">Sign In </SignInLink>
            </ButtonWrapIn>
            <ButtonWrap variant="outline-success">
              <SignInLink to="/authsignup"> Sign up</SignInLink>
            </ButtonWrap>
          </div>
        )}
      </div>
      <div>
        <SubMenuLink to="" onClick={showSubCat}>
          <MenuButton size={30} className="pe-2" /> Categories <CaretDownFill />
        </SubMenuLink>

        {subCat ? (
          <div>
            {data.map((category) => (
              <DropdownLink to={`/categories?catId=${category._id}`}>
                <SubMenuLabel> {`${category.title}`} </SubMenuLabel>
              </DropdownLink>
            ))}
          </div>
        ) : null}
        <SubMenuLink to="videos">
          {" "}
          <Youtube size={30} className="pe-2" /> Videos{" "}
        </SubMenuLink>
        <SubMenuLink to="newsletter">
          {" "}
          <Envelope size={30} className="pe-2" /> Newsletter
        </SubMenuLink>
        <SubMenuLink to="/events">
          {" "}
          <CalendarEvent size={30} className="pe-2" /> Event{" "}
        </SubMenuLink>

        <SubMenuLink to="/contactus">
          {" "}
          <PersonLinesFill size={30} className="pe-2" /> Contact us{" "}
        </SubMenuLink>

        <SubMenuLink to="aboutus">
          {" "}
          <FilePersonFill size={30} className="pe-2" /> About us{" "}
        </SubMenuLink>
      </div>
    </>
  );
}

export default SidebarCat;
