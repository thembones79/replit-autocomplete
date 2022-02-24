import { combineReducers } from "redux";
import { formChangeReducer } from "./formChangeReducer";
import { getDataReducer } from "./getDataReducer";
import { activeSuggestionIndexReducer } from "./activeSuggestionIndexReducer";
import { filteredSuggestionsReducer } from "./filteredSuggestionsReducer";
import { showSuggestionsReducer } from "./showSuggestionsReducer";

const reducers = combineReducers({
  formChangeReducer,
  getDataReducer,
  activeSuggestionIndexReducer,
  filteredSuggestionsReducer,
  showSuggestionsReducer,
});

export default reducers;
