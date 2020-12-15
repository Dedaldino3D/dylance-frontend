import * as types from "../types/users";
import { AUTH_SUCCESS } from "../types/auth";

const initialState = {
  isLoading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        ...action.entities,
        result: action.result,
      };

    default:
      return state;
  }
};

export default usersReducer;
