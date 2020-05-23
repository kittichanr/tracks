import createDataContext from './createDataContext';
import trackApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errMessage: action.payload};
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({email, password}) => {
    try {
      const response = await trackApi.post('/signup', {email, password});
      console.log(response.data);
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with signup',
      });
    }
  };
};

const signin = (dispatch) => {
  return ({email, password}) => {};
};

const signout = (dispatch) => {
  return ({email, password}) => {};
};

export const {Context, Provider} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {isSignedIn: false, errMessage: ''},
);
