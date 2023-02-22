import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "../../actions/navbar";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import axios from "axios";
// import Categories from "../../pages/Categories";

function getQuery() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  // let foo = parseInt(params.get('id'))
  let foo = params.get("catId");
  return foo;
}

// const baseURL = "https://goodnews-ng.herokuapp.com/api";
const NavBarCategories = () => {
  // const [categories, setCategories] = useState(null);
  // useEffect(() => {
  //   axios.get(`${baseURL}/categories/all`).then((response) => {
  //     setCategories(response.data);
  //   });
  // }, []);

  // if (!categories) return null;

  // let data = categories.data;
  const navBarCategories = useSelector((state) => state.navbar);
  // console.log(categories)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
    <div>
      {/* Categories */}
      <div className="NewsCategory">
        <div className="">
          <Slider {...settings}>
            {navBarCategories.map((category) =>
              category._id === getQuery() ? (
                <Link
                  className="newsCat2  "
                  to={`/categories?catId=${category._id}`}
                >
                  {" "}
                  {category.title}{" "}
                </Link>
              ) : (
                <Link
                  className="newsCat  "
                  to={`/categories?catId=${category._id}`}
                >
                  {" "}
                  {category.title}{" "}
                </Link>
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NavBarCategories;
