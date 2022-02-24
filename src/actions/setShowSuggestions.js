import * as types from "./types";

export const setShowSuggestions = (showSuggestions) => {
  return {
    type: types.SET_SHOW_SUGGESTIONS,
    payload: showSuggestions,
  };
};
