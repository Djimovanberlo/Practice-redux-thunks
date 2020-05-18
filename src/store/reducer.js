import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";

export const postsFetched = (data) => {
  console.log("fetched data:", data);
  return {
    type: "FETCH_POSTS",
    payload: {
      data: data,
    },
  };
};

const reducer = combineReducers({
  //   someFeature: someFeatureReducer,
  // etc.
});

export default reducer;
