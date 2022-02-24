import axios from "axios";
import * as types from "./types";

export const getData = (url) => async (dispatch) => {
  dispatch({ type: types.GET_DATA_BEGIN });
  try {
    const response = await axios.get(url);
    dispatch({ type: types.GET_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.GET_DATA_ERROR, payload: error });
  }
};
