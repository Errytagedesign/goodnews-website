import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchTopPosts } from "../actions/posts";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// import Swal from "sweetalert2";

import { CircularProgress } from "@material-ui/core";

// News Components
import Headlines from "../components/Headlines";
// import Newscard from "../components/NewsCard";

import axios from "axios";

// Slick Carousel Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// bootsrapt css
import "bootstrap/dist/css/bootstrap.min.css";
import HomepagePost from "../components/HomepagePost";
import { fetchAdsPosts } from "../actions/ads";

// Style component styling
const ImageWrapper = styled.img`
  width: 100%;
  margin: 0 auto;
  transition: all 0.3s
  animation: animateImage 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LandingPageLink = styled.a`
  text-decoration: none;
  color: black;
`;

// Slider Carousel
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

const baseURL = "https://api-good-news.herokuapp.com/api";
// const baseURL = "http://localhost:3001/api";

function TopNews() {
  const ads = useSelector((state) => state.AdsPosts);
  console.log(ads);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdsPosts());
  }, [dispatch]);

  let desktopHeading = [],
    desktopSidebar = [],
    mobile = [];

  for (let i = 0; i < ads.length; i++) {
    if (ads[i].category === "desktopHeading") {
      desktopHeading.push(ads[i]);
    } else if (ads[i].category === "desktopSidebar") {
      desktopSidebar.push(ads[i]);
    } else if (ads[i].category === "mobile") {
      mobile.push(ads[i]);
    }
  }

  console.log(desktopSidebar, desktopHeading, mobile);

  // const posts = useSelector((state) => state.posts);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTopPosts());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch]);

  const [postcaty, setPostcaty] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/posts/category-posts`).then((response) => {
      setPostcaty(response.data);
    });
  }, []);

  if (!postcaty) return null;

  console.log(postcaty);

  let data = postcaty.data;

  const newData = data.filter((item) => {
    return (
      item.categoryId !== "615d60765b9e9d000424fa62" && item.posts.length >= 1
    );
  });
  console.log(newData);

  // console.log(categories)

  return (
    <>
      <div className="mt-2">
        <Slider {...settings} className="col-12 col-lg-10 m-auto ">
          {desktopHeading.map((banner) => (
            <LandingPageLink
              href={banner.url}
              target="_blank"
              className=" card"
            >
              <ImageWrapper src={banner.imageUrl} alt="goodnewsads" />

              <p className="card-body"> {banner.title} </p>
            </LandingPageLink>
          ))}
        </Slider>
        <div className="goodnews col-12">
          <h2> GOODNEWS NIGERIA </h2>
        </div>

        <Headlines />

        {/* Mobile Advert */}
        <section className="d-block d-md-none">
          <Slider {...settings}>
            {mobile.map((mobileBanner) => (
              <LandingPageLink
                href={mobileBanner.url}
                target="_blank"
                className="card"
              >
                <ImageWrapper src={mobileBanner.imageUrl} alt="GoodnewsAds" />
                <p className="card-body"> {mobileBanner.title} </p>
              </LandingPageLink>
            ))}
          </Slider>
        </section>

        <main className=" container mt-5 d-flex flex-column flex-md-row">
          <div className="col-12 col-md-8">
            {!data ? (
              <CircularProgress />
            ) : (
              newData.map((post, index) => (
                <section>
                  <HomepagePost key={index} data={post} />
                </section>
              ))
            )}
          </div>

          <article className="col-4 d-none d-md-block ms-3 me-3">
            {desktopSidebar.map((sidebarBanner) => (
              <LandingPageLink
                href={sidebarBanner.url}
                target="_blank"
                className="card"
              >
                <ImageWrapper src={sidebarBanner.imageUrl} alt="GoodnewsAds" />
                <p className="card-body">{sidebarBanner.title}</p>
              </LandingPageLink>
            ))}
          </article>

          {/* News Cards Thumbnails */}
          {/* {!posts.length ? (
            <CircularProgress />
          ) : (
            <section className="container d-flex flex-wrap">
              {posts.map((news) => (
                <div className="col-12 col-md-6 col-lg-4 p-1">
                  <Newscard
                    title={news.title}
                    name={news.nameOfAuthor}
                    imagesrc={news.imageUrl}
                    description={news.description.slice(0, 150)}
                    url={"/post?id=" + news._id}
                    likes={news.numberOfLikes}
                    views={news.numberOfViews}
                    comment={news.comments.length}
                    postId={news._id}
                    likeArray={news.likes}
                    baseURL={baseURL}
                    posts={posts}
                  />
                </div>
              ))}
            </section>
          )} */}
        </main>
      </div>
    </>
  );
}

export default TopNews;
