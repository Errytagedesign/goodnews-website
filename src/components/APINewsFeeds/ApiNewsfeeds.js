import React from "react";
import { Link } from "react-router-dom";
import NewsCard from "../NewsCard";
import Styled from "styled-components";

const Heading = Styled.div`

color: var(--main-color);

`;

const Button = Styled(Link)`


color: white;
background-color: var(--main-color);

`;

function ApiNewsfeeds({ data }) {
  // console.log(data.posts);

  return (
    <div className="d-flex flex-column justify-content-between">
      <section className="d-flex flex-row justify-content-between ">
        <Heading>
          {" "}
          <h2> {data[0].categoryName} </h2>
        </Heading>
        <Button to={`/apicategory?catId=${data[0].categoryId}`} className="btn">
          See All
        </Button>
      </section>
      <hr />

      <section className="d-flex flex-wrap">
        {data[0].posts.slice(0, 6).map((news) => (
          <div key={news._id} className="col-12 col-md-6 col-lg-4 ">
            <NewsCard
              key={news._id}
              title={news.title}
              name={news.nameOfAuthor}
              imagesrc={news.imageUrl}
              description={news.description.slice(0, 150)}
              url={"/newsread?id=" + news._id}
              likes={news.numberOfLikes}
              views={news.numberOfViews}
              comment={news.comments.length}
              postId={news._id}
              likeArray={news.likes}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default ApiNewsfeeds;
