import {
  Fetch_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  FETCH_SMURF_START
} from "../actions";

const initialState = {
  isFetching: false,
  smurfs: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ],
  error: ""
};

export const fetchSmurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        isFetching: false,
        error: "Failed to fetch smurf"
      };
    default:
      return state;
  }
};
