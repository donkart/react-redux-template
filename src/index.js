import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";

import App from "./components/App";
import LandingPage from "./components/LandingPage";

import * as routes from "routes";

import "./index.css";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path={routes.LANDING_PAGE} exact component={LandingPage} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
