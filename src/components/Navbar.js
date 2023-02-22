import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/GOOD-NEWS-NG-LOGO-WHITE.png";
import { Link } from "react-router-dom";
// import { List } from 'react-bootstrap-icons';
// import Carousel from 'react-elastic-carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Menu from "./Menu";
// import Hamburger from './Hamburger';

const baseURL = "https://goodnews-ng.herokuapp.com/api";

function Navbar() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/categories/all`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  if (!categories) return null;

  let data = categories.data;

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="Navbar">
      <header className="LogoSearch">
        <div className=" align-items-center  d-flex flex-row justify-content-between">
          {/* logo */}
          <div className="text-start gLogo col-3 col-md-4 ">
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
          <div className="col-6 col-md-6">
            <input className="form-control" type="text" placeholder="search" />
          </div>

          {/* Hamburger */}
          <div className="col-2 col-md-2 text-end d-md-block d-none">
            <Menu />
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="NewsCategory">
        <div className="">
          <Slider {...settings}>
            {data.map((category, index) => (
              <Link
                className="newsCat  "
                key={index}
                to={`/categories?catId=${category._id}`}
              >
                {" "}
                {category.title}{" "}
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
