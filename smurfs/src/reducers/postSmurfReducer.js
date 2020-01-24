import {
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL
} from "../actions";

const initialState = {
  isPosting: false,
  smurfs: [
    {
      name: "",
      age: "",
      height: "",
      id: Date.now()
    }
  ],
  error: ""
};

export const postSmurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SMURF_START:
      return {
        ...state,
        isPosting: true
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        isPosting: false,
        smurfs: action.payload
      };
    case POST_SMURF_FAIL:
      return {
        ...state,
        isPosting: false,
        error: "Faild to post new smurf"
      };
    default:
      return state;
  }
};
