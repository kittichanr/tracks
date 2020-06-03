import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errMessage: action.payload};
    case 'signin':
      return {errMessage: '', token: action.payload};
    case 'clear_error_message':
      return {...state, errMessage: ''};
    case 'restore_token':
      return {token: action.payload, isLoading: false, errMessage: ''};
    case 'signout':
      return {token: null, errMessage: ''};
    default:
      state;
  }
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  dispatch({
    type: 'restore_token',
    payload: token,
  });
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

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({
    type: 'signout',
  });
};

export const {Context, Provider} = createDataContext(
  authReducer,
  {signin, signout, signup, clearErrorMessage, tryLocalSignIn},
  {token: null, errMessage: '', isLoading: true},
);
