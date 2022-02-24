import * as types from "./types";

export const handleChangeFormValue = (userInput) => {
  return {
    type: types.CHANGE_FORM_VALUE,
    payload: userInput,
  };
};
