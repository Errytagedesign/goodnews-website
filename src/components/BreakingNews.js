import React from "react";
import { Link } from "react-router-dom";
import "./BreakingNews.css";

// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// import DeleteIcon from '@mui/icons-material/Delete';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';

// import heart from "../assets/icons/Heart.svg";
// import comments from "../assets/icons/Comment.svg";
// import share from '../assets/icons/Share.svg';

// import Image from '../assets/Greater Lagos 5.jpg'

// const baseURL = "http://localhost:3001/api";

function BreakingNews(props) {
  // useEffect(() => {
  //   axios
  //     .get(`${baseURL}/admin-users/aUser/614f4d55d35c933f145fa99a`)
  //     .then((response) => {
  //       setUser(response.data);
  //     });
  // }, []);

  const { title, imagesrc, url } = props;

  // const addLike = async (e) => {
  //   await axios
  //     .put(`${baseURL}/posts/addLike/${postId}?userId=614f4d55d35c933f145fa99a`)
  //     .then((response) => {
  //       console.log(response);
  //     });
  //   // eslint-disable-next-line no-restricted-globals
  //   location.reload();
  // };
  // const removeLike = async (e) => {
  //   await axios
  //     .put(
  //       `${baseURL}/posts/removeLike/${postId}?userId=614f4d55d35c933f145fa99a`
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     });
  //   // eslint-disable-next-line no-restricted-globals
  //   location.reload();
  // };
  // const Like = async (e) => {
  //   e.preventDefault();

  //   // console.log(user.data.data.userLikedPost);
  //   if (!user.data.userLikedPost.includes(postId)) {
  //     addLike();
  //   }
  //   if (user.data.userLikedPost.includes(postId)) {
  //     removeLike();
  //   }
  // };

  // const Like = async (e) => {
  //      if (!user.userLikedPost.includes(postId)) {
  //       dispatch(likePost(postId, user._id))
  //   }
  //   if (user.userLikedPost.includes(postId)) {
  //     dispatch(unLikePost(postId, user._id))
  //   }
  // }

  // var liked = "";
  // if (!user) {
  //   liked += "icons";
  // } else if (!(user.userLikedPost.includes(postId))) {
  //   liked += "icons";
  // } else {
  //   liked += "heart"; 3 me, bash and abba
  // }
  // console.log(likes)

  return (
    <div>
      <section className="d-flex ">
        <div className="d-flex flex-column col-12 justify-content-around flex-md-row  NewsCardWrapper ">
          <div className="HeadImg col-12 col-md-7">
            {" "}
            <img className="col-12" src={imagesrc} alt="" />
          </div>
          <div className="BreakingTitle col-12 col-md-5 ">
            <Link
              onClick={() =>
                setTimeout(() => {
                  // window.location.reload();
                  window.history.go();
                }, 2000)
              }
              to={url}
            >
              <div>
                <h2> Breaking News: </h2> <h3>{title}</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BreakingNews;
