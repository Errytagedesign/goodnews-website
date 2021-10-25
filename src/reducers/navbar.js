import { FETCH_ALL_NAVBAR_CAT } from '../constants/actionTypes';
// eslint-disable-next-line import/no-anonymous-default-export
export default (navbar = [], action) => {
    switch (action.type) {
        case FETCH_ALL_NAVBAR_CAT:
            return action.payload;
        default:
            return navbar;
    }
}