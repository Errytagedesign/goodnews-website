import {
  CREATEADS,
  UPDATEADS,
  DELETEADS,
  FETCH_ALL_ADS,
} from "../constants/actionTypes";
// eslint-disable-next-line import/no-anonymous-default-export
export default (ads = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ADS:
      return action.payload;

    case CREATEADS:
      return [...ads, action.payload];
    case UPDATEADS:
      return ads.map((ad) =>
        ad._id === action.payload._id ? action.payload : ad
      );
    case DELETEADS:
      return ads.filter((ad) => ad._id !== action.payload);

    default:
      return ads;
  }
};
