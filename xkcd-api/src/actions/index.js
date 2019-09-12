import Axios from "axios";

export const FETCHING_COMIC_START = "FETCHING_COMIC_START";
export const FETCHING_COMIC_SUCCESS = "FETCHING_COMIC_SUCCESS";
export const FETCHING_COMIC_FAILURE = "FETCHING_COMIC_FAILURE";
export const getComicAC = () => dispatch => {
    dispatch({ type: FETCHING_COMIC_START });
  Axios
    .get("https://cors-anywhere.herokuapp.com/https://xkcd.com/614/info.0.json")
    .then(res => {
      dispatch({ type: FETCHING_COMIC_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_COMIC_FAILURE, payload: err});
    });
};
