import { normalize } from "normalizr";
import { usersService } from "../services";
import * as types from "../types/users";
import { userSchema } from "./utils/schema";

export const getProfilePage = (username) => {
  return async (dispatch) => {
    dispatch({ type: types.GET_PROFILE_REQUEST });
    try {
      const resp = await usersService().getProfile(username);
      if (resp.status === 200) {
        const user = normalize(resp.data, userSchema);
        dispatch({ type: types.GET_PROFILE_SUCCESS, user });
      }
    } catch (error) {
      dispatch({ type: types.GET_PROFILE_FAILURE });
    }
  };
};

export const upateProfile = (username) => {
  return async (dispatch) => {
    dispatch({ type: types.UPDATE_PROFILE_REQUEST });
    try {
      const resp = await usersService().getProfile(username);
      if (resp.status === 200) {
        const user = normalize(resp.data, userSchema);
        dispatch({ type: types.UPDATE_PROFILE_SUCCESS, user });
      }
    } catch (error) {
      dispatch({ type: types.UPDATE_PROFILE_FAILURE });
    }
  };
};

export const getTopFrelancers = () => {
  return async (dispatch) => {
    dispatch({ type: types.GET_TOP_FRELANCERS });
    try {
      const resp = await usersService().getTopFrelancers();
      if (resp.status === 200) {
        dispatch({ type: types.SET_TOP_FRELANCERS, users: resp.data });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

export const getSkills = () => {
  return async (dispatch) => {
    dispatch({ type: types.GET_SKILLS });
    try {
      const resp = await usersService().getSkills();
      if (resp.status === 200) {
        dispatch({ type: types.SET_SKILLS, users: resp.data });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
};
