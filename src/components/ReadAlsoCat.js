import React, { useState, useEffect } from "react";
import Newscard from "./NewsCard";
import styled from "styled-components";

import axios from "axios";

const ReadAlso = styled.div`
  background: var(--main-color);
  border-top: 4px solid grey;
  margin-top: 3em;
  margin-bottom: 6em;
`;

// function getQuery() {
//   let search = window.location.search;
//   let params = new URLSearchParams(search);
//   // let foo = parseInt(params.get('id'))
//   let foo = params.get("catId");
//   return foo;
// }

function ReadAlsoCat(props) {
  const [post, setPost] = useState(null);
  const baseURL = "https://api-good-news.herokuapp.com/api";

  useEffect(() => {
    axios.get(`${baseURL}/posts/cat/${props.catId}`).then((response) => {
      setPost(response.data);
    });
  });

  if (!post) return null;

  let postdata = post.data;

  return (
    <div>
      <ReadAlso>
        <p className="share"> Read Also </p>
        <section className="container d-flex flex-wrap">
          {postdata.slice(0, 3).map((news) => (
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
      </ReadAlso>
    </div>
  );
}

export default ReadAlsoCat;
