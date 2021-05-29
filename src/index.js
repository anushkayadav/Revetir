import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.10.0";

// pages for this product
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/ecommerce-page" component={EcommercePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/product-page/:id" component={ProductPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Redirect exact from="/" to="/login-page" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
