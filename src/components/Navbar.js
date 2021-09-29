import React from "react";
import logo from "../assets/GOOD-NEWS-NG-LOGO-WHITE.png";
import { Link } from "react-router-dom";
// import { List } from 'react-bootstrap-icons';
// import Carousel from 'react-elastic-carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Menu from "./Menu";
// import Hamburger from './Hamburger';

function Navbar() {
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
            <Link className="newsCat " to="/">
              {" "}
              Top Stories{" "}
            </Link>
            <Link
              className="newsCat  "
              to="/categories?id=6152fd2728fac7000447a2e4"
            >
              {" "}
              Business and Finance{" "}
            </Link>
            <Link
              className="newsCat  "
              to="/categories?id=6152fce528fac7000447a2d3"
            >
              {" "}
              Education{" "}
            </Link>
            <Link
              className="newsCat "
              to="/categories?id=6152fae728fac7000447a2cd"
            >
              {" "}
              Entertainments{" "}
            </Link>
            <Link
              className="newsCat "
              to="/categories?id=6152fd3928fac7000447a2e8"
            >
              {" "}
              Fashion and Lifestyle{" "}
            </Link>
            <Link
              className="newsCat "
              to="/categories?id=6152fd1228fac7000447a2dc"
            >
              {" "}
              Polictics{" "}
            </Link>
            <Link
              className="newsCat "
              to="/categories?id=614b96bf6cc414700cda9ad9"
            >
              {" "}
              Technology{" "}
            </Link>
            <Link
              className="newsCat "
              to="/categories?id=614f4753d35c933f145fa98c"
            >
              {" "}
              Sport{" "}
            </Link>
            <Link
              className="newsCat "
              to="/categories?id=6152fd0628fac7000447a2d8"
            >
              {" "}
              Greater Lagos
            </Link>
            <Link
              className="newsCat "
              to="/categories?id=6152fd1c28fac7000447a2e0"
            >
              {" "}
              Opinion
            </Link>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
