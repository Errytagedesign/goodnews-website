import React from "react";
// import "./Headline.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import axios from "axios";

import NewsCard from "./NewsCard";
const baseURL = "https://api-good-news.herokuapp.com/api";

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

function Headlines() {
  const [category, setCategory] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`${baseURL}/posts/cat/615d60765b9e9d000424fa62`)
      .then((response) => {
        setCategory(response.data);
      });
  }, []);

  if (!category) return null;

  console.log(category);

  let data = category.data;
  return (
    <div className=" mt-5 col-12">
      <Slider {...settings}>
        {data.map((newsheadlines, index) => (
          <div>
            <NewsCard
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
              baseURL={baseURL}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Headlines;
