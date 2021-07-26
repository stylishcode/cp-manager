import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Clients from "./pages/Client/Clients";
import NewClient from "./pages/Client/NewClient";
import Products from "./pages/Product/Products";
import NewProduct from "./pages/Product/NewProduct";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/clients" component={Clients} />
        <Route path="/new-client" component={NewClient} />

        <Route path="/products" component={Products} />
        <Route path="/new-product" component={NewProduct} />
      </Switch>
    </BrowserRouter>
  );
}