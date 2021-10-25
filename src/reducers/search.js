import { SEARCH_FETCH_ALL , SEARCH_POST_LIKE, SEARCH_POST } from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (searchPosts = [], action) => {
    switch (action.type) {
        case SEARCH_FETCH_ALL:
            return action.payload;
        case SEARCH_POST:
            return action.payload;
        case SEARCH_POST_LIKE:
            console.log(action.payload)
            let data = searchPosts.map((post) => post._id === action.payload._id ? action.payload : post);
            return data;
        default:
            return searchPosts;
    }
}