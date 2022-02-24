export const INITIAL_STATE = {
  isLoading: false,
  error: null,
  formInput: "",
  data: [],
  filteredSuggestions: [],
  activeSuggestionIndex: 0,
  showSuggestions: false,
};

export const GET_DATA_BEGIN = "GET_DATA_BEGIN";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_ERROR = "GET_DATA_ERROR";
export const CHANGE_FORM_VALUE = "CHANGE_FORM_VALUE";
export const SET_FILTERED_SUGGESTIONS = "SET_FILTERED_SUGGESTIONS";
export const SET_ACTIVE_SUGGESTION_INDEX = "SET_ACTIVE_SUGGESTION_INDEX";
export const SET_SHOW_SUGGESTIONS = "SET_SHOW_SUGGESTIONS";
