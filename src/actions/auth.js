import * as types from "../types/auth";
import { authService } from "../services";

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: types.AUTH_REQUEST });
    try {
      const resp = authService().login(username, password);
      if (resp.status === 200) {
        const { token, user } = resp.data;
        dispatch({ type: types.AUTH_SUCCESS, token, user });
      }
    } catch (error) {
      dispatch({ type: types.AUTH_FAILURE });
    }
  };
};

export const signup = (data) => {
  return async (dispatch) => {
    dispatch({ type: types.SIGNUP_REQUEST });
    try {
      const resp = await authService().signup(data);
      if (resp.status === (200 || 201)) {
        const { token, user } = resp.data;
        dispatch({ type: types.SIGNUP_SUCCESS, token, user });
      }
    } catch (error) {
      dispatch({ type: types.SIGNUP_FAILURE });
    }
  };
};
