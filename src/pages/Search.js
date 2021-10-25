import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { searchPost } from "../actions/cat"
import { fetchPosts } from "../actions/search";

import Newscard from "../components/NewsCard";
// bootsrapt css
import "bootstrap/dist/css/bootstrap.min.css";
import { CircularProgress } from "@material-ui/core";

// import axios from "axios";
const baseURL = "https://api-good-news.herokuapp.com/api";

function Search() {
  const dispatch = useDispatch();

  // const searchPosts = JSON.parse(localStorage.getItem('searchResult'))
  const searchPosts = useSelector((state) => state.searchPosts);

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(`${baseURL}/posts/cat/${getQuery()}`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, [post]);

  // if (!post) return null;

  // let data = post.data;
  // console.log(data);

  return (
    <>
      {!searchPosts ? (
        <CircularProgress />
      ) : searchPosts.length === 0 ? (
        <div>
          <br />
          <h2>No search results</h2>
          <br />
        </div>
      ) : (
        <div>
          <div>
            <br />
            <h1>Your Search Results</h1> <br />
          </div>
          <section className="container d-flex flex-wrap">
            {searchPosts.map((news) => (
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
                  search={true}
                  searchPosts={searchPosts}
                />
              </div>
            ))}
          </section>
        </div>
      )}
    </>
  );
}

export default Search;
