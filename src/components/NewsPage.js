import React, { useState, useEffect } from "react";
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

// import { TextField, Button } from "@material-ui/core";

import styled from "styled-components";
// import Technology from "../pages/Technology";
// import Comments from "./Comments/Comments";
import Comments from "./Comments/Comments";
// import Newscard from "./NewsCard";
import ReadAlsoNewsCard from "./ReadAlso/ReadAlsoNewsCard";

import SendIcon from "@mui/icons-material/Send";

const ReadAlso = styled.div`
  background: var(--main-color);
  border-top: 4px solid grey;
  margin-top: 3em;
  margin-bottom: 6em;
`;

function NewsPage(props) {
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState({});
  const [readAlso, setReadAlso] = useState(null);
  const baseURL = "https://api-good-news.herokuapp.com/api";

  useEffect(() => {
    axios
      .get(`${baseURL}/admin-users/aUser/614f4d55d35c933f145fa99a`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  useEffect(() => {
    axios.get(`${baseURL}/posts/cat/${props.catId}`).then((response) => {
      setReadAlso(response.data);
    });
  });

  if (!readAlso) return null;

  let readAlsodata = readAlso.data;

  const addLike = async (e) => {
    await axios
      .put(
        `${baseURL}/posts/addLike/${props.postId}?userId=614f4d55d35c933f145fa99a`
      )
      .then((response) => {
        // console.log(response);
      });
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  const removeLike = async (e) => {
    await axios
      .put(
        `${baseURL}/posts/removeLike/${props.postId}?userId=614f4d55d35c933f145fa99a`
      )
      .then((response) => {
        // console.log(response);
      });
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  const Like = async (e) => {
    e.preventDefault();
    const user = await axios.get(
      `${baseURL}/admin-users/aUser/614f4d55d35c933f145fa99a`
    );
    // console.log(user.data.data.userLikedPost);
    if (!user.data.data.userLikedPost.includes(props.postId)) {
      addLike();
    }
    if (user.data.data.userLikedPost.includes(props.postId)) {
      removeLike();
    }
  };
  const postComment = async (e) => {
    e.preventDefault();
    let option = {
      description: comment.comment,
      post: props.postId,
    };
    await axios.post(`${baseURL}/comments`, option).then((response) => {
      console.log(response);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
  };

  var liked = "";
  if (!user) {
    liked += "icons";
  } else if (!user.data.userLikedPost.includes(props.postId)) {
    liked += "icons";
  } else {
    liked += "heart";
  }

  // console.log(comment);

  return (
    <div className="newsPage mt-5 container">
      <div className="newstime d-flex flex-row justify-content-between p-1">
        {" "}
        <p>Top News | GoodNews </p> <p>5 Minutes Ago </p>{" "}
      </div>
      <h2> {props.articleTitle} </h2>

      <img className="col-12 " src={props.articleImage} alt="" />

      <p className="p-5"> {props.articleContents} </p>

      {/* Social share start */}
      <section className="d-flex text-center flex-column flex-md-row justify-content-around align-items-center likeIcon mb-5">
        <div onClick={Like} className="d-flex">
          <div>
            <h6 className=" share me-3 align-items-center mb-4 mb-md-0">
              Leave a like
            </h6>
          </div>

          <div>
            <HeartFill size={25} className={liked} />
          </div>
          <div>
            <small className="ms-2"> {props.likes} </small>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-around  col-10 col-md-7 ps-4 likeIcon">
          <h6 className="share">Share</h6>

          <FacebookShareButton url={props.url} title={props.articleTitle}>
            <div>
              <FacebookIcon logoFillColor="White" round="true" size={35}>
                {" "}
              </FacebookIcon>
            </div>
          </FacebookShareButton>

          <TwitterShareButton url={props.url} title={props.articleTitle}>
            <div>
              <TwitterIcon logoFillColor="White" round="true" size={35}>
                {" "}
              </TwitterIcon>
            </div>
          </TwitterShareButton>

          <LinkedinShareButton url={props.url} title={props.articleTitle}>
            <div>
              <LinkedinIcon logoFillColor="White" round="true" size={35}>
                {" "}
              </LinkedinIcon>
            </div>
          </LinkedinShareButton>

          <WhatsappShareButton url={props.url} title={props.articleTitle}>
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
        {props.comments.map((comment) => (
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
            endIcon={<SendIcon />}
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
        <section className="container d-flex flex-wrap">
          {readAlsodata.slice(0, 3).map((news) => (
            <div className="col-12 col-md-6 col-lg-4 p-1">
              <ReadAlsoNewsCard
                title={news.title}
                name={news.nameOfAuthor}
                imagesrc={news.imageUrl}
                description={news.description.slice(0, 150)}
                url={"/readalso?id=" + news._id}
                likes={news.numberOfLikes}
                views={news.numberOfViews}
                comment={news.comments.length}
                postId={news._id}
                baseURL={baseURL}
              />

              {/* <Newscard
               
              /> */}
            </div>
          ))}
        </section>
      </ReadAlso>
    </div>
  );
}

export default NewsPage;
