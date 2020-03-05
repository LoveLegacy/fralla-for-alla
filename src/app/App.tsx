import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "../views/Home/Home";
import Admin from "../views/Admin/Admin";
import Shopping from "../views/Shopping/Shopping";
import styled, { createGlobalStyle } from "styled-components";
import Colors from "../styles/Colors";
import normalize from "../styles/normalize";



const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${Colors.rose};
  }
  ${normalize}

`

export default function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shopping">Shopping</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/shopping">
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