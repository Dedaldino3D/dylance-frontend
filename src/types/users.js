import { makeConstant } from "./utils";

const get = makeConstant("GET_PROFILE");
const update = makeConstant("UPDATE_PROFILE");

export const GET_PROFILE_REQUEST = get("REQUEST");
export const GET_PROFILE_SUCCESS = get("SUCCESS");
export const GET_PROFILE_FAILURE = get("FAILURE");

export const UPDATE_PROFILE_REQUEST = update("REQUEST");
export const UPDATE_PROFILE_SUCCESS = update("SUCCESS");
export const UPDATE_PROFILE_FAILURE = update("FAILURE");
