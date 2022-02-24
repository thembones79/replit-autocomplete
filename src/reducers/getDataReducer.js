import * as types from "../actions/types";

export const getDataReducer = (state = types.INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_DATA_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case types.GET_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
