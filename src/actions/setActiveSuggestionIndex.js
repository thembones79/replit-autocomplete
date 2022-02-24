import * as types from "./types";

export const setActiveSuggestionIndex = (activeSuggestionIndex) => {
  return {
    type: types.SET_ACTIVE_SUGGESTION_INDEX,
    payload: activeSuggestionIndex,
  };
};
