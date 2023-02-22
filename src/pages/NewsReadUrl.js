import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchOnePost } from "../actions/posts";
import NewsPage from "../components/NewsPage";

function getQuery() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  // let foo = parseInt(params.get('id'))
  let foo = params.get("id");
  return foo;
}

console.log(getQuery());

function NewsReadUrl() {
  const post = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOnePost(getQuery()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getQuery(), dispatch]);

  // console.log(post.post);
  let data = post.post;

  return (
    <div>
      {!data ? (
        <Spinner />
      ) : (
        <NewsPage
          articleTitle={data.title}
          articleImage={data.imageUrl}
          articleContents={
            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
          }
          postId={data._id}
          url={`${window.location.protocol}//${window.location.hostname}/post?id=${data._id}`}
          comments={data.comments}
          // likes={data.likes.length}
          likeArray={data.likes}
          createdAt={data.createdAt}
          categoryName={data.category.title}
          catId={data.category._id}
          readMoreUrl={data.link}
        />
      )}
    </div>
  );
}

export default NewsReadUrl;
