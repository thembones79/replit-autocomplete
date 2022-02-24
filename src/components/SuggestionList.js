import React from "react";
import { connect } from "react-redux";

import {
  setFilteredSuggestions,
  handleChangeFormValue,
  setActiveSuggestionIndex,
  setShowSuggestions,
} from "../actions";

const SuggestionList = (props) => {
  const {
    filteredSuggestions,
    activeSuggestionIndex,
    setFilteredSuggestions,
    handleChangeFormValue,
    setActiveSuggestionIndex,
    setShowSuggestions,
    formInput,
  } = props;

  const onClick = (e) => {
    setFilteredSuggestions([]);
    handleChangeFormValue(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  return (
    filteredSuggestions && (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          if (index === activeSuggestionIndex) {
            className = "suggestion--active";
          }
          return (
            <li className={className} key={suggestion} onClick={onClick}>
              <strong>{suggestion.substr(0, formInput.length)}</strong>
              {suggestion.substr(formInput.length)}
            </li>
          );
        })}
      </ul>
    )
  );
};

const mapStateToProps = (state) => {
  const { formInput } = state.formChangeReducer;
  const { filteredSuggestions } = state.filteredSuggestionsReducer;
  const { activeSuggestionIndex } = state.activeSuggestionIndexReducer;
  const { showSuggestions } = state.showSuggestionsReducer;

  return {
    formInput,
    filteredSuggestions,
    activeSuggestionIndex,
    showSuggestions,
  };
};

export default connect(mapStateToProps, {
  setFilteredSuggestions,
  handleChangeFormValue,
  setActiveSuggestionIndex,
  setShowSuggestions,
})(SuggestionList);
