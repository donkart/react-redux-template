import axios from "axios";
import { AUTH_USER, AUTH_ERROR, ACCOUNTS_FETCH, FORM_UPDATE } from "./types";

export const fetchAccounts = callback => async dispatch => {
  try {
    const response = await axios.get(
      "https://us-central1-capco-243515.cloudfunctions.net/quant-test-fetch-accounts"
    );
    console.log(response.data);
    dispatch({
      type: ACCOUNTS_FETCH,
      payload: response.data
    });
    if (callback) {
      callback();
    }
  } catch (e) {
    console.log(e);
    //FIXME: we can improve this by dispatching an error action and handling it to provide a user error
  }
};

export const updateForm = (key, value, callback) => async dispatch => {
  try {
    // const obj = {
    //     key: value
    // }
    // const response = await axios.patch('https://us-central1-capco-243515.cloudfunctions.net/account', obj);
    // console.log(response.data)
    dispatch({
      type: FORM_UPDATE,
      key: key,
      value: value
    });
    if (callback) {
      callback();
    }
  } catch (e) {
    console.log(e);
    //FIXME: we can improve this by dispatching an error action and handling it to provide a user error
  }
};

// Simple authentication actions to sign up, sign in and sign out the user
export const signUp = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formProps
    );

    dispatch({
      type: AUTH_USER,
      payload: response.data
    });
    localStorage.setItem("token", response.data.token);
    if (callback) {
      callback();
    }
  } catch (e) {
    console.log(e.response);
    dispatch({
      type: AUTH_ERROR,
      payload: e.response.data.error
    });
  }
};

export const signIn = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signin",
      formProps
    );

    dispatch({
      type: AUTH_USER,
      payload: response.data
    });
    localStorage.setItem("token", response.data.token);
    if (callback) {
      callback();
    }
  } catch (e) {
    console.log(e.response);
    dispatch({
      type: AUTH_ERROR,
      payload: e.response.data.error
    });
  }
};

export const signOut = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: ""
  };
};
