import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchTopPosts } from "../actions/posts";

import { CircularProgress } from "@material-ui/core";

// News Components
import Headlines from "../components/Headlines";
// import Newscard from "../components/NewsCard";

import axios from "axios";

// import vector from "../assets/icons/Vector.svg";
// import { Link } from "react-router-dom";
// import NavBarCategories from "../components/CategoriesNavbar/Categories";

// bootsrapt css
import "bootstrap/dist/css/bootstrap.min.css";
import HomepagePost from "../components/HomepagePost";

const baseURL = "https://api-good-news.herokuapp.com/api";
// const baseURL = "http://localhost:3001/api";

function TopNews() {
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
      <div className="mt-5">
        <div className="goodnews col-12">
          <h2> GOODNEWS NIGERIA </h2>
        </div>

        <Headlines />

        <main className=" container mt-5">
          <div>
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
