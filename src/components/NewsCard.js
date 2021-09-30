import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NewsCard.css";
import axios from "axios";

import { ChatFill, HeartFill } from "react-bootstrap-icons";

// import heart from "../assets/icons/Heart.svg";
// import comments from "../assets/icons/Comment.svg";
// import share from '../assets/icons/Share.svg';

import { Eye } from "react-bootstrap-icons";
// import Image from '../assets/Greater Lagos 5.jpg'

const baseURL = "https://api-good-news.herokuapp.com/api";

function NewsCard(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseURL}/admin-users/aUser/614f4d55d35c933f145fa99a`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  const {
    title,
    imagesrc,
    description,
    name,
    url,
    likes,
    comment,
    views,
    postId,
  } = props;

  const addLike = async (e) => {
    await axios
      .put(`${baseURL}/posts/addLike/${postId}?userId=614f4d55d35c933f145fa99a`)
      .then((response) => {
        console.log(response);
      });
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  const removeLike = async (e) => {
    await axios
      .put(
        `${baseURL}/posts/removeLike/${postId}?userId=614f4d55d35c933f145fa99a`
      )
      .then((response) => {
        console.log(response);
      });
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  const Like = async (e) => {
    e.preventDefault();

    // console.log(user.data.data.userLikedPost);
    if (!user.data.userLikedPost.includes(postId)) {
      addLike();
    }
    if (user.data.userLikedPost.includes(postId)) {
      removeLike();
    }
  };
  // console.log(user.data);
  var liked = "";
  if (!user) {
    liked += "icons";
  } else if (!user.data.userLikedPost.includes(postId)) {
    liked += "icons";
  } else {
    liked += "heart";
  }

  return (
    <div>
      <section className="p-3 mt-2 newscard">
        <h4>{title}</h4>

        <div className="NewsCardWrapper">
          <div className="col-12 overflow-hidden">
            {" "}
            <img className="col-12 card-img-top" src={imagesrc} alt="" />
          </div>

          <p className="NewsCardTitle"> {name} </p>
        </div>
        <p className="NewsCardExcerpt">
          {" "}
          {description}
          <Link to={url} className="Readmore">
            {" "}
            Read More{" "}
          </Link>{" "}
        </p>

        <div className="d-flex col-6 justify-content-between">
          <div onClick={Like}>
            <HeartFill className={liked} /> <small> {likes} </small>{" "}
          </div>
          <div>
            <ChatFill className="icons" />
            <small> {comment} </small>{" "}
          </div>
          <div>
            {" "}
            <Eye className="icons" /> <small> {views} </small>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsCard;
