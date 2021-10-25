import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatPosts } from "../actions/cat";
import Styled from "styled-components";

import Newscard from "../components/NewsCard";
import Pagination from "../components/Pagination";
// bootsrapt css
import "bootstrap/dist/css/bootstrap.min.css";
import { CircularProgress } from "@material-ui/core";

const Pagins = Styled.div`

display: flex;
justify-content: center;


`;

// import axios from "axios";
const baseURL = "https://api-good-news.herokuapp.com/api";

function getQuery() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  // let foo = parseInt(params.get('id'))
  let foo = params.get("catId");
  return foo;
}

function Categories() {
  const categories = useSelector((state) => state.cats);
  // console.log(categories)
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  // Get current Posts
  const indexOfLastCatPost = currentPage * postPerPage;
  const indexOfFirstCatPost = indexOfLastCatPost - postPerPage;
  const currentCatPost = categories.slice(
    indexOfFirstCatPost,
    indexOfLastCatPost
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(fetchCatPosts(getQuery()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getQuery(), dispatch]);

  // console.log(categories)

  console.log(categories);
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
      {!categories.length ? (
        <CircularProgress />
      ) : (
        <div>
          <section className="container d-flex flex-wrap">
            {currentCatPost.map((news, index) => (
              <div className="col-12 col-md-6 col-lg-4 p-1">
                <Newscard
                  key={index}
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
                  posts={categories}
                  categoryTrue={true}
                />
              </div>
            ))}
          </section>
        </div>
      )}
      <Pagins>
        <Pagination
          postPerpage={postPerPage}
          totalPost={categories.length}
          className="text-center"
          paginate={paginate}
        />
      </Pagins>
    </>
  );
}

export default Categories;
