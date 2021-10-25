import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { Link, useHistory, useLocation } from "react-router-dom";
import { searchPost } from "../../actions/posts";
import { fetchPosts } from "../../actions/search";
// import { SEARCH_FETCH_ALL } from "../../constants/actionTypes";

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

function Navbar() {
  // const posts = useSelector((state) => state.posts)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  // const classes = useStyles();
  // console.log(posts)
  const [searchData, setSearchData] = useState({ search: "" });

  // const searchPosts = useSelector((state) => state.searchPosts);

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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

  const search = (e) => {
    e.preventDefault();

    if (e.target.value !== "") {
      setSearchData({ search: e.target.value });
      // console.log(searchData)
      // const searchResult = searchPosts.filter((item) => {
      //   return (
      //     item.title.toLowerCase().search(searchData.search.toLowerCase()) !== -1 ||
      //     item.description.toLowerCase().search(searchData.search.toLowerCase()) !==
      //       -1
      //   )
      // })
      // localStorage.setItem("searchResult", JSON.stringify(searchResult))
      dispatch(searchPost(searchData));
      // dispatch(searchPost(searchData));
      history.push("/search");
    } else {
      setSearchData({ search: "" });
      history.push("/");
    }
  };

  return (
    <>
      <div className="Navbar">
        <header className="LogoSearch">
          <div className=" align-items-center  d-flex flex-row justify-content-between">
            {/* logo */}
            <div className="text-start gLogo col-4 col-md-3 ">
              <Link to="/">
                {" "}
                <img
                  className=" col-12 col-md-4"
                  src={logo}
                  alt="good-news-logo"
                />{" "}
              </Link>
            </div>

            {/* search */}
            <div className="col-4 col-md-3">
              <form onSubmit={search}>
                {/* <input className="form-control" type="text" placeholder="search" onChange={(e) => setSearchData({ search: e.target.value })} /> */}
                <input
                  className="form-control"
                  type="text"
                  placeholder="search"
                  onChange={(e) => search(e)}
                />
              </form>
            </div>

            {/* <div className="col-2 col-md-4 text-end d-md-block d-none">
            {user ? (
              <>
                <Avatar className={classes.green} src={user?.result.imageUrl} alt={user.name}>{user?.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
              </>
            ) : (
              <Button component={Link} to="/auth" variant="contained" color={classes.green}>Sign In</Button>
            )}
          </div> */}

            {/* Hamburger */}
            <div className="col-2 col-md-2 text-end">
              <Menu />
            </div>
          </div>
        </header>
      </div>
      {/* <NavBarCategories /> */}
    </>
  );
}

export default Navbar;
