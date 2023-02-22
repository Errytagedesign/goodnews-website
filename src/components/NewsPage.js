import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatPosts } from "../actions/cat";
import moment from "moment";

import "./NewsPage.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

import { HeartFill } from "react-bootstrap-icons";

import axios from "axios";

// import { TextField, Button } from "@mui/material";

import styled from "styled-components";
// import Technology from "../pages/Technology";
// import Comments from "./Comments/Comments";
import Comments from "./Comments/Comments";
import Newscard from "./NewsCard";
// import ReadAlsoNewsCard from "./ReadAlso/ReadAlsoNewsCard";

// import SendIcon from "@mui/icons-material/Send";
import { NEWS_LIKE } from "../constants/actionTypes";
import { Spinner } from "react-bootstrap";

const ReadAlso = styled.div`
  background: var(--main-color);
  border-top: 4px solid grey;
  margin-top: 3em;
  margin-bottom: 6em;
`;

// const ReadMore = styled.a`
//   text-decoration: none;
//   background: var(--main-color);
//   color: #fff;
//   margin-top: 7em;
//   padding: 1em;
// `;

function NewsPage({
  articleTitle,
  articleImage,
  articleContents,
  postId,
  url,
  comments,
  likeArray,
  catId,
  createdAt,
  categoryName,
}) {
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState({});
  // const [readAlso, setReadAlso] = useState(null);
  // const baseURL = "http://localhost:3001/api";
  const baseURL = "https://goodnews-ng.herokuapp.com/api";

  // useEffect(() => {
  //   axios
  //     .get(`${baseURL}/admin-users/aUser/614f4d55d35c933f145fa99a`)
  //     .then((response) => {
  //       setUser(response.data);
  //     });
  // }, []);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile"))?.result);
  }, []);

  let userId = user?._id || user?.googleId;

  // useEffect(() => {
  //   axios.get(`${baseURL}/posts/cat/${catId}`).then((response) => {
  //     setReadAlso(response.data);
  //   });
  // });
  const categories = useSelector((state) => state.cats);
  // console.log(categories)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatPosts(catId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catId, dispatch]);

  // if (!readAlso) return null;

  // let readAlsodata = readAlso.data;

  const addLike = async (e) => {
    e.preventDefault();
    // likePost(postId, userId)
    await axios
      .put(`${baseURL}/posts/addLike/${postId}/${userId}`)
      .then((response) => {
        let data = response.data;
        dispatch({ type: NEWS_LIKE, payload: data });
      });
    // console.log(data)
    // eslint-disable-next-line no-restricted-globals
    // location.reload();
  };

  const Likes = () => {
    if (likeArray.length > 0) {
      return likeArray.includes(user?.googleId || user?._id) ? (
        <>
          <HeartFill size={25} className={`heart`} />
          {likeArray.length}
        </>
      ) : (
        <>
          <HeartFill size={25} className={`icons`} />
          {likeArray.length}
        </>
      );
    }

    return (
      <>
        <HeartFill size={25} className={`icons`} />
        &nbsp;{likeArray.length}
      </>
    );
  };

  const postComment = async (e) => {
    e.preventDefault();
    let option = {
      description: comment.comment,
      post: postId,
    };
    await axios.post(`${baseURL}/comments`, option).then((response) => {
      console.log(response);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
  };

  return (
    <div className="newsPage mt-5 container">
      <div className="newstime d-flex flex-row justify-content-between p-1">
        {" "}
        <p>{categoryName} | GoodNews </p> <p>{moment(createdAt).fromNow()}</p>{" "}
      </div>
      <h2> {articleTitle} </h2>

      <img className="col-12 " src={articleImage} alt="" />

      <p className="p-5">
        {" "}
        {articleContents}{" "}
        {/* <ReadMore href={readmoreUrl} target="_blank" rel="noreferrer">
          Continue Reading
        </ReadMore>{" "} */}
      </p>

      {/* Social share start */}
      <section className="d-flex text-center flex-column flex-md-row justify-content-around align-items-center likeIcon mb-5">
        <div className="d-flex">
          <div>
            <h6 className=" share me-3 align-items-center mb-4 mb-md-0">
              Leave a like
            </h6>
          </div>
          {/* onClick={() => dispatch(likePost(postId, userId))} */}
          <button
            size="small"
            color="primary"
            disabled={!user}
            onClick={addLike}
          >
            <Likes />
          </button>
          <div>{/* <small className="ms-2"> {likes} </small> */}</div>
        </div>

        <div className="d-flex flex-row justify-content-around  col-10 col-md-7 ps-4 likeIcon">
          <h6 className="share">Share</h6>

          <FacebookShareButton url={url} title={articleTitle}>
            <div>
              <FacebookIcon logoFillColor="White" round="true" size={35}>
                {" "}
              </FacebookIcon>
            </div>
          </FacebookShareButton>

          <TwitterShareButton url={url} title={articleTitle}>
            <div>
              <TwitterIcon logoFillColor="White" round="true" size={35}>
                {" "}
              </TwitterIcon>
            </div>
          </TwitterShareButton>

          <LinkedinShareButton url={url} title={articleTitle}>
            <div>
              <LinkedinIcon logoFillColor="White" round="true" size={35}>
                {" "}
              </LinkedinIcon>
            </div>
          </LinkedinShareButton>

          <WhatsappShareButton url={url} title={articleTitle}>
            <div>
              <WhatsappIcon logoFillColor="White" round="true" size={35}>
                {" "}
              </WhatsappIcon>
            </div>
          </WhatsappShareButton>
        </div>
        {/* Social share end */}
      </section>
      {/* Comments start */}

      <div className="commentsection">
        <h6> Comments </h6>
        {comments.map((comment) => (
          <Comments name={comment.name} description={comment.description} />
        ))}

        <form className="comment__form">
          <textarea
            placeholder="Add a comment"
            className="form-control"
            onChange={(e) => {
              let value = { comment: e.target.value };
              setComment(value);
            }}
            value={comment.comment}
          />
          <button
            // endIcon={<SendIcon />}
            type="submit"
            className="form-control"
            onClick={postComment}
          >
            Send
          </button>
        </form>
      </div>
      {/* <Comments /> */}

      <ReadAlso>
        <h6 className=""> Read Also </h6>
        {!categories ? (
          <Spinner />
        ) : (
          <section className="container d-flex flex-wrap">
            {categories.slice(0, 3).map((news) => (
              <div className="col-12 col-md-6 col-lg-4 p-1">
                <Newscard
                  title={news.title}
                  name={news.nameOfAuthor}
                  imagesrc={news.imageUrl}
                  description={news.description.slice(0, 150)}
                  url={"/post?id=" + news._id}
                  likes={news.likes.length}
                  views={news.numberOfViews}
                  comment={news.comments.length}
                  postId={news._id}
                  likeArray={news.likes}
                  baseURL={baseURL}
                  readAlso={true}
                />

                {/* <Newscard
               
              /> */}
              </div>
            ))}
          </section>
        )}
      </ReadAlso>
    </div>
  );
}

export default NewsPage;
