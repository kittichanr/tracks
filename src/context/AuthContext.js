import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({email, password}) => {
    // make api request to signup with that email and password
    //if we sign up, modify our state, and say that we are authenticated.
    //if signing up fail, we probably nedd to reflect error message
    //somewhere
  };
};

const signin = (dispatch) => {
  return ({email, password}) => {};
};

const signout = (dispatch) => {
  return ({email, password}) => {};
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {isSignedIn: false},
);
