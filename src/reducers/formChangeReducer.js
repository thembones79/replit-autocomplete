import * as types from "../actions/types";

export const formChangeReducer = (state = types.INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_FORM_VALUE:
      return {
        ...state,
        formInput: action.payload,
      };
    default:
      return state;
  }
};
