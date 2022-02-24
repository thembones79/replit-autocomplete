import * as types from "../actions/types";

export const filteredSuggestionsReducer = (
  state = types.INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case types.SET_FILTERED_SUGGESTIONS:
      return {
        ...state,
        filteredSuggestions: action.payload,
      };
    default:
      return state;
  }
};
