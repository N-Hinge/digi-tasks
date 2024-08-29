// src/redux/reducer.js
import { SET_CURRENT_PAGE } from '../components/actions';

const initialState = {
  currentPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
