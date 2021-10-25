import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatPosts } from "../actions/headlines";
import { CircularProgress } from "@material-ui/core";

// import "./Headline.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
// import axios from "axios";

import BreakingNews from "./BreakingNews";
// const baseURL = "https://api-good-news.herokuapp.com/api";

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
};

function Headlines() {
  // const [category, setCategory] = React.useState(null);

  // React.useEffect(() => {
  //   axios
  //     .get(`${baseURL}/posts/cat/615d60765b9e9d000424fa62`)
  //     .then((response) => {
  //       setCategory(response.data);
  //     });
  // }, []);

  // if (!category) return null;

  // let data = category.data;

  const headLineCategories = useSelector((state) => state.headlineCat);
  // console.log(categories)
  const dispatch = useDispatch();

  let headlinesId = "615d60765b9e9d000424fa62";

  useEffect(() => {
    dispatch(fetchCatPosts(headlinesId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className=" mt-5 col-12 overflow-hidden">
      {!headLineCategories.length ? (
        <CircularProgress />
      ) : (
        <Slider {...settings}>
          {headLineCategories.map((newsheadlines, index) => (
            <div>
              <BreakingNews
                key={index}
                title={newsheadlines.title}
                name={newsheadlines.nameOfAuthor}
                imagesrc={newsheadlines.imageUrl}
                description={newsheadlines.description.slice(0, 150)}
                url={"/post?id=" + newsheadlines._id}
                likes={newsheadlines.numberOfLikes}
                views={newsheadlines.numberOfViews}
                comment={newsheadlines.comments.length}
                postId={newsheadlines._id}
                likeArray={newsheadlines.likes}
                posts={headLineCategories}
                headline={true}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Headlines;
