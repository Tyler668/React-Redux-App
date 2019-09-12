import {
    FETCHING_COMIC_START,
    FETCHING_COMIC_SUCCESS,
    FETCHING_COMIC_FAILURE
} from '../actions';

export const initialState = {
    number: 1,
    title: 'Barrel - Part 1',
    comicSRC: '"https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg"',
    isFetching: false,
    error: ''
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {


        default: return state;
    }
}