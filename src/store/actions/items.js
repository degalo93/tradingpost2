import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";

export const loadItems = items => ({
  type: LOAD_ITEMS,
  items
});

export const fetchItems = () => {
  return dispatch => {
    return apiCall("GET", "/api/latest")
      .then(res => {
        dispatch(loadItems(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
  };
};
