import {
    FETCHING_COMIC_START,
    FETCHING_COMIC_SUCCESS,
    FETCHING_COMIC_FAILURE
} from '../actions';

export const initialState = {
    number: 1,
    title: 'Barrel - Part 1',
    comicSRC: 'https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg',
    isFetching: false,
    error: ''
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_COMIC_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCHING_COMIC_SUCCESS:
        return {
          ...state,
          isFetching: false,
          quote: action.payload
        };
      default:
        return state;
    }
  };
  