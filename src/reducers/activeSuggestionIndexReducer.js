import * as types from "../actions/types";

export const activeSuggestionIndexReducer = (
  state = types.INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case types.SET_ACTIVE_SUGGESTION_INDEX:
      return {
        ...state,
        activeSuggestionIndex: action.payload,
      };
    default:
      return state;
  }
};
