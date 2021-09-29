import React from "react";

import Newscard from "../components/NewsCard";

// import { Link } from 'react-router-dom';

// bootsrapt css
import "bootstrap/dist/css/bootstrap.min.css";

// import {GreaterlagosData} from '../components/GreaterlagosData'
import axios from "axios";
const baseURL = "https://api-good-news.herokuapp.com/api";

function getQuery() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  // let foo = parseInt(params.get('id'))
  let foo = params.get("id");
  return foo;
}

function Greaterlagos() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/posts/cat/${getQuery()}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  let data = post.data;
  console.log(data);

  return (
    <div>
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

export default Greaterlagos;
