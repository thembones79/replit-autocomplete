import * as types from "../actions/types";

export const showSuggestionsReducer = (state = types.INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_SHOW_SUGGESTIONS:
      return {
        ...state,
        showSuggestions: action.payload,
      };
    default:
      return state;
  }
};
