import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOnePost } from "../actions/posts";
import NewsPage from "../components/NewsPage";
import { CircularProgress } from "@material-ui/core";

// import axios from "axios";

// import articleImg from '../assets/Greater Lagos 5.jpg';

// import Data from '../topstories.json'

// import {Data} from '../components/TopstoriesData';

// import {FashionData} from '../components/FashionLifestyleData';

// const baseURL = "https://api-good-news.herokuapp.com/api";

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

  // const [post, setPost] = useState(null);

  // useEffect(() => {
  //   axios.get(`${baseURL}/posts/${getQuery()}`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // if (!post) return null;
  console.log(post.post);
  let data = post.post;

  return (
    <div>
      {!data ? (
        <CircularProgress />
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
