import * as types from "../types/users";

const initialState = {
  isLoading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.entities,
        isLoading: false,
      };
    case types.GET_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
