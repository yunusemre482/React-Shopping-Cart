import * as actions from '../actionTypes/authActionTypes';

export const signUp = (user) => {
  return (dispatch) => {
      console.log(user);
    dispatch({type: actions.SIGN_UP_ERROR, payload: "error"});
  };
};

export const signIn = (email, password) => {
  return (dispatch) => {
      console.log(email,password)
    dispatch({type: actions.SIGN_IN_BEGINS});
  };
};

export const signOut = () => {
  return (dispatch) => {
    console.log('signed out');
    dispatch({
      type: actions.SIGN_OUT,
    });
  };
};
