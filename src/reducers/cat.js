import { FETCH_ALL_CAT, FETCH_CAT_POST, CAT_NEWS_LIKE } from '../constants/actionTypes';
// eslint-disable-next-line import/no-anonymous-default-export
export default (cats = [], action) => {
    switch (action.type) {
        case FETCH_CAT_POST:
            console.log(action.payload)
            return action.payload;
        case FETCH_ALL_CAT:
            return action.payload;
        case CAT_NEWS_LIKE:
            console.log(action.payload)
            // console.log(cats)
            let catData = cats.map((post) => post._id === action.payload._id ? action.payload : post);
            return catData;
        default:
            return cats;
    }
}