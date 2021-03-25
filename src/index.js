import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Redux/index";
const store = createStore(rootReducer);
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);