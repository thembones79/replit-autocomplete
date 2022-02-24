import * as types from "./types";

export const setFilteredSuggestions = (filteredSuggestions) => (dispatch) => {
  dispatch({
    type: types.SET_FILTERED_SUGGESTIONS,
    payload: filteredSuggestions,
  });
};
