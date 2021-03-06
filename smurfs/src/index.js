import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducers from "./reducers";
import logger from "redux-logger";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";

const store = createStore(allReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
