import React from "react";
import ReactDOM from "react-dom/client";
import App from "./question6/App";
import "./index.css";
import { Provider } from 'react-redux'
import store from './question4/store/configureStore'

window.store = store

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
