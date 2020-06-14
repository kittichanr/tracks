import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};

const createTrack = (dispatch) => (name, locations) => {
  //make request api
};

export const {Context, Provider} = createDataContext(
  trackReducer,
  {fetchTracks, createTrack},
  [],
);
