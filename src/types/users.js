import { makeConstant } from "./utils";

const user = makeConstant("user");
const get = makeConstant("GET_PROFILE");
const update = makeConstant("UPDATE_PROFILE");

export const GET_PROFILE_REQUEST = get("REQUEST");
export const GET_PROFILE_SUCCESS = get("SUCCESS");
export const GET_PROFILE_FAILURE = get("FAILURE");

export const UPDATE_PROFILE_REQUEST = update("REQUEST");
export const UPDATE_PROFILE_SUCCESS = update("SUCCESS");
export const UPDATE_PROFILE_FAILURE = update("FAILURE");

export const GET_TOP_FRELANCERS = user("GET_TOP_FRELANCERS");
export const SET_TOP_FRELANCERS = user("SET_TOP_FRELANCERS");
export const GET_SKILLS = user("GET_SKILLS");
export const SET_SKILLS = user("SET_SKILLS");
