import React from "react";
import { connect } from "react-redux";

import "./AutoComplete.css";

import {
  setFilteredSuggestions,
  handleChangeFormValue,
  setActiveSuggestionIndex,
  setShowSuggestions,
} from "../actions";

import SuggestionList from "./SuggestionList";

const AutoComplete = (props) => {
  const {
    suggestions,
    formInput,
    showSuggestions,
    activeSuggestionIndex,
    filteredSuggestions,
    setFilteredSuggestions,
    handleChangeFormValue,
    setActiveSuggestionIndex,
    setShowSuggestions,
  } = props;

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    const userInput = e.target.value;
    const filtered = suggestions
      ? suggestions.filter((suggestion) =>
          suggestion.toLowerCase().startsWith(userInput.toLowerCase())
        )
      : [];
    handleChangeFormValue(userInput);
    setFilteredSuggestions(filtered);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onKeyDown = (e) => {
    const KEY_ENTER = 13;
    const KEY_DOWN = 40;
    const KEY_UP = 38;

    if (e.keyCode === KEY_ENTER) {
      setActiveSuggestionIndex(0);
      setShowSuggestions(true);
      handleChangeFormValue(filteredSuggestions[activeSuggestionIndex]);
    } else if (e.keyCode === KEY_UP) {
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.keyCode === KEY_DOWN) {
      if (activeSuggestionIndex === filteredSuggestions.length - 1) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  const renderSuggestionList = () => {
    if (showSuggestions && formInput) {
      return <SuggestionList />;
    }
  };

  return (
    <div className="autocomplete" onClick={() => setShowSuggestions(false)}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={formInput}
        />
        <input type="submit" />
        {renderSuggestionList()}
      </form>
    </div>
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
})(AutoComplete);
