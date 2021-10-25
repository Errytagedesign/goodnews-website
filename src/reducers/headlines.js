import { FETCH_HEADLINE_POST, HEADLINE_POST_LIKE } from '../constants/actionTypes';
// eslint-disable-next-line import/no-anonymous-default-export
export default (headlineCat = [], action) => {
    switch (action.type) {
        case FETCH_HEADLINE_POST:
            return action.payload;
        case HEADLINE_POST_LIKE:
            console.log(action.payload)
            let data = headlineCat.map((post) => post._id === action.payload._id ? action.payload : post);
            return data;
        default:
            return headlineCat;
    }
}