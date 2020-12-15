import * as types from "../types/auth";

const initialState = {
  isLoading: false,
  authenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        authenticated: true,
      };
    case types.AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
