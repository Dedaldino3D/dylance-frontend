import { makeConstant } from "./utils";

const auth = makeConstant("AUTH");
const signup = makeConstant("SIGNUP");

export const AUTH_REQUEST = auth("REQUEST");
export const AUTH_SUCCESS = auth("SUCCESS");
export const AUTH_FAILURE = auth("FAILURE");

export const SIGNUP_REQUEST = signup("REQUEST");
export const SIGNUP_SUCCESS = signup("SUCCESS");
export const SIGNUP_FAILURE = signup("FAILURE");
