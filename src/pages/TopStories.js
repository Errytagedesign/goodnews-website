import React from "react";

// News Components
import Headlines from "../components/Headlines";
import Newscard from "../components/NewsCard";

import axios from "axios";

import vector from "../assets/icons/Vector.svg";
import { Link } from "react-router-dom";

// bootsrapt css
import "bootstrap/dist/css/bootstrap.min.css";

const baseURL = "https://api-good-news.herokuapp.com/api";

function TopNews() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/posts/top-posts`).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  console.log(post);

  let data = post.data;

  return (
    <div className=" container mt-5">
      <div className=" d-flex flex-row justify-content-between">
        <div className="d-flex flex-row justify-content-between">
          <div>
            <img className="headicon" src={vector} alt="" />
          </div>{" "}
          <h2> HEADLINES </h2>{" "}
        </div>
        <div>
          {" "}
          <Link to="/HeadlineStories"> See All </Link>{" "}
        </div>
      </div>

      <Headlines />

      {/* News Cards Thumbnails */}

      <section className="container d-flex flex-wrap">
        {data.map((news) => (
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
              baseURL={baseURL}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default TopNews;
