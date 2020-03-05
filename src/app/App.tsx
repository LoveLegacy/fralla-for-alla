import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../views/Home/Home";
import Admin from "../views/Admin/Admin";
import Shopping from "../views/ShopList/ShopList";
import styled, { createGlobalStyle } from "styled-components";
import Colors from "../styles/Colors";
import normalize from "../styles/normalize";
import Header from "../components/Header/Header";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${Colors.rose};
    padding: 1rem;
  }
  ${normalize}

`;

export default function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Header />

        <Switch>
          <Route path="/shoplist">
            <Shopping />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
