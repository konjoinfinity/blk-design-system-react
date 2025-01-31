/*!
=========================================================
* BLK Design System React - v1.2.1
=========================================================
* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { Suspense } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";
import Index from "views/Index.js";
import * as buffer from "buffer";
import { Provider } from "react-redux";
import store from "./components/PageHeader/redux/store";

window.Buffer = buffer.Buffer;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
  <BrowserRouter>
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/" render={(props) => <Index {...props} />} />
    </Switch>
    </Suspense>
  </BrowserRouter>
  </Provider>
);
