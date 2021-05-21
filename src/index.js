/*!

=========================================================
* Material Kit PRO React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

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
      <Route path="/" component={EcommercePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
