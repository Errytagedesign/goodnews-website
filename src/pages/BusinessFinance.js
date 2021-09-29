import React from "react";

import Newscard from "../components/NewsCard";
// bootsrapt css
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
const baseURL = "https://api-good-news.herokuapp.com/api";
// import { Link } from 'react-router-dom';

// import {BusinessData} from '../components/BusinessData';

function BusinessFinance() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/posts/61530843274bbc0004a35869`).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  let news = post.post;
  console.log(news);

  return (
    <div>
      <section className="container d-flex flex-wrap">
        {/* {data.map((news) => ( */}
        <div className="col-12 col-md-6 col-lg-4 p-1">
          <Newscard
            title={news.title}
            name={news.nameOfAuthor}
            imagesrc={news.imageUrl}
            description={
              <div dangerouslySetInnerHTML={{ __html: news.description }}></div>
            }
            url={"/businessread?id=" + news._id}
            likes={news.numberOfLikes}
            views={news.numberOfViews}
            comment={news.comments.length}
            postId={news._id}
            baseURL={baseURL}
          />
        </div>
        {/* ))} */}
      </section>
    </div>
  );
}

export default BusinessFinance;
