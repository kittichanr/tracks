import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackApi from '../api/tracker';
import navigate from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errMessage: action.payload};
    case 'signup':
      return {errMessage: '', token: action.payload};
    default:
      return state;
  }
};

const signup = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackApi.post('/signup', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({
      type: 'signup',
      payload: response.data.token,
    });
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with signup',
    });
  }
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
  {token: null, errMessage: ''},
);
