import React, { useState, useEffect } from "react";
import NewsPage from "../components/NewsPage";
import axios from "axios";

// import articleImg from '../assets/Greater Lagos 5.jpg';

// import Data from '../topstories.json'

// import {Data} from '../components/TopstoriesData';

// import {FashionData} from '../components/FashionLifestyleData';

const baseURL = "https://api-good-news.herokuapp.com/api";

function getQuery() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  // let foo = parseInt(params.get('id'))
  let foo = params.get("id");
  return foo;
}

console.log(getQuery());

function NewsReadUrl() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/posts/${getQuery()}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  console.log(post);

  let data = post.post;

  // let news = Data.filter(news => news.id === getQuery())
  // let news = Data.filter(news => news.id === getQuery())
  var date = new Date(data.updatedAt); // dateStr you get from mongodb

  var d = date.getDate();
  // var m = date.getMonth()+1;

  return (
    <div>
      <NewsPage
        time={`${d} days`}
        articleTitle={data.title}
        articleImage={data.imageUrl}
        articleContents={
          <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
        }
        postId={data._id}
        url={`http://localhost:3000/post?id=${data._id}`}
        comments={data.comments}
        likes={data.numberOfLikes}
        catId={data.category._id}
      />
    </div>
  );
}

export default NewsReadUrl;
