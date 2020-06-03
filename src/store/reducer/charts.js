import * as actionTypes from "../action/actionTypes";

const initialState = {
  line: [],
  pie: [],
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_LINE:
      return { ...state, line: action.data };

    case actionTypes.FETCH_DATA_PIE:
      return { ...state, pie: action.data };

    case actionTypes.ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
};
