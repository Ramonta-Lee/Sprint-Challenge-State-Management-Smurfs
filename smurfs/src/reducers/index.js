import { combineReducers } from "redux";
// Import all reducer files here
import { fetchSmurfReducer } from "./fetchSmurfReducer";
import { postSmurfReducer } from "./postSmurfReducer";

const allReducers = combineReducers({
  //key: value pairs here
  fetchSmurfReducer: fetchSmurfReducer,
  postSmurfReducer: postSmurfReducer
});

export default allReducers;
