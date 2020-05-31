import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackApi from '../api/tracker';
import navigate from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errMessage: action.payload};
    case 'signin':
      return {errMessage: '', token: action.payload};
    case 'clear_error_message':
      return {...state, errMessage: ''};
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({type: 'clear_error_message'});
};

const signup = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackApi.post('/signup', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({
      type: 'signin',
      payload: response.data.token,
    });
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with signup',
    });
  }
};

const signin = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackApi.post('/signin', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({
      type: 'signin',
      payload: response.data.token,
    });
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with signin',
    });
  }
};

const signout = (dispatch) => {
  return ({email, password}) => {};
};

export const {Context, Provider} = createDataContext(
  authReducer,
  {signin, signout, signup, clearErrorMessage},
  {token: null, errMessage: ''},
);
