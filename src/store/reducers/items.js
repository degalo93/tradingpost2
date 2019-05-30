import { LOAD_ITEMS, REMOVE_ITEMS } from "../actionTypes";

const item = (state = [], action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return [...action.items];
    default:
      return state;
  }
};

export default item;