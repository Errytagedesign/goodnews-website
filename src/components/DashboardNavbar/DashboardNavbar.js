import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { Link, useHistory, useLocation } from "react-router-dom";
// import { searchPost } from "../../actions/posts";

// import NavBarCategories from "../CategoriesNavbar/Categories";
import logo from "../../assets/GOOD-NEWS-NG-LOGO-WHITE.png";
// import { List } from 'react-bootstrap-icons';
// import Carousel from 'react-elastic-carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Avatar, Button, Typography } from "@material-ui/core";

import Menu from "../Menu";
// import useStyles from "./styles";
// import Hamburger from './Hamburger';

function DashboardNavbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  // const classes = useStyles();

  // const [searchData, setSearchData] = useState({ search: "" });

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

  // const search = (e) => {
  //   e.preventDefault();

  //   if (e.target.value !== "") {
  //       setSearchData({ search: e.target.value });
  //       dispatch(searchPost(searchData));
  //       // dispatch(searchPost(searchData));
  //       history.push("/search");
  //   } else {
  //     setSearchData({ search: "" })
  //     history.push('/')
  //   }
  // };

  return (
    <>
      <div className="Navbar">
        <header className="LogoSearch">
          <div className=" align-items-center  d-flex flex-row justify-content-between">
            {/* logo */}
            <div className="text-start gLogo col-4 ">
              <Link to="/">
                {" "}
                <img
                  className=" col-12 col-md-4"
                  src={logo}
                  alt="good-news-logo"
                />{" "}
              </Link>
            </div>

            {/* Hamburger */}
            <div className="col-2  ">
              <Menu />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default DashboardNavbar;
