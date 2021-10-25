import {
  FETCH_ALL,
  FETCH_TOP_POSTS,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_ONE_POST,
  NEWS_LIKE,
} from "../constants/actionTypes";
// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_TOP_POSTS:
      return action.payload;
    case FETCH_ONE_POST:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case LIKE:
      console.log(posts);
      let data = posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      return data;
    case NEWS_LIKE:
      return action.payload;
    default:
      return posts;
  }
};
